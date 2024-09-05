package dao

import "github.com/thomaspoignant/go-feature-flag/cmd/app-api/model"

type Flags interface {
	// GetFlags return all the flags
	GetFlags() ([]model.FeatureFlag, error)

	// GetFlag return a flag by its ID
	GetFlag(id string) (model.FeatureFlag, error)

	// CreateFlag create a new flag, return the id of the flag
	CreateFlag(flag model.FeatureFlag) (string, error)

	// UpdateFlag update a flag
	UpdateFlag(flag model.FeatureFlag) error

	// DeleteFlag delete a flag
	DeleteFlag(id string) error
}
