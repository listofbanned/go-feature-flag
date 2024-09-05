package handler

import (
	"github.com/labstack/echo/v4"
	"github.com/thomaspoignant/go-feature-flag/cmd/app-api/dao"
	"github.com/thomaspoignant/go-feature-flag/cmd/app-api/model"
	"net/http"
)

type Flags struct {
	dao dao.Flags
}

func NewFlags(dao dao.Flags) Flags {
	return Flags{dao: dao}
}

func (f Flags) GetAllFeatureFlags(c echo.Context) error {
	flags, err := f.dao.GetFlags()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	return c.JSON(http.StatusOK, flags)
}

func (f Flags) GetFeatureFlagsByID(c echo.Context) error {
	flag, err := f.dao.GetFlag(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusNotFound, map[string]string{"error": err.Error()})
	}
	return c.JSON(http.StatusOK, flag)
}

func (f Flags) CreateNewFlag(c echo.Context) error {
	var flag model.FeatureFlag
	if err := c.Bind(&flag); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
	}
	id, err := f.dao.CreateFlag(flag)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}
	flag.ID = id
	return c.JSON(http.StatusOK, flag)
}

func (f Flags) UpdateFlagByID(c echo.Context) error {
	// check if the flag exists
	_, err := f.dao.GetFlag(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusNotFound, map[string]string{"error": err.Error()})
	}

	// update the flag
	var flag model.FeatureFlag
	if err := c.Bind(&flag); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
	}

	if flag.ID == "" {
		flag.ID = c.Param("id")
	}

	err = f.dao.UpdateFlag(flag)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}
	return c.JSON(http.StatusOK, flag)
}

func (f Flags) DeleteFlagByID(c echo.Context) error {
	err := f.dao.DeleteFlag(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}
	return c.JSON(http.StatusOK, nil)
}

func (f Flags) UpdateFeatureFlagStatus(c echo.Context) error {
	flag, err := f.dao.GetFlag(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusNotFound, map[string]string{"error": err.Error()})
	}

	// FeatureFlagStatusUpdate represents the input for updating the status of a feature flag.
	type FeatureFlagStatusUpdate struct {
		Disable bool `json:"disable"`
	}

	var statusUpdate FeatureFlagStatusUpdate
	if err := c.Bind(&statusUpdate); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
	}

	flag.Disable = &statusUpdate.Disable
	err = f.dao.UpdateFlag(flag)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}

	return c.JSON(http.StatusOK, nil)
}
