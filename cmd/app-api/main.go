package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	dao2 "github.com/thomaspoignant/go-feature-flag/cmd/app-api/dao"
	"github.com/thomaspoignant/go-feature-flag/cmd/app-api/handler"
)

func main() {
	dao := dao2.NewFlagDao("/Users/thomas.poignant/dev/thomaspoignant/go-feature-flag/cmd/app-api/testdata/flag.yaml")
	handlers := handler.NewFlags(dao)

	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.DefaultCORSConfig))
	groupV1 := e.Group("/v1")
	groupV1.GET("/flags", handlers.GetAllFeatureFlags)
	groupV1.GET("/flags/:id", handlers.GetFeatureFlagsByID)
	groupV1.POST("/flags", handlers.CreateNewFlag)
	groupV1.PUT("/flags/:id", handlers.UpdateFlagByID)
	groupV1.DELETE("/flags/:id", handlers.DeleteFlagByID)
	groupV1.PATCH("/flags/:id/status", handlers.UpdateFeatureFlagStatus)
	e.Logger.Fatal(e.Start(":3001"))
}
