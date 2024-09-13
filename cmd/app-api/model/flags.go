package model

import (
	"github.com/thomaspoignant/go-feature-flag/internal/dto"
	"time"
)

type FlagType string

const (
	FlagTypeBoolean FlagType = "boolean"
	FlagTypeString  FlagType = "string"
	FlagTypeInteger FlagType = "integer"
	FlagTypeDouble  FlagType = "double"
	FlagTypeJSON    FlagType = "json"
)

type FeatureFlag struct {
	dto.DTO
	ID              string    `json:"id"`
	Name            string    `json:"name"`
	CreatedDate     time.Time `json:"createdDate"`
	LastUpdatedDate time.Time `json:"lastUpdatedDate"`
	Description     string    `json:"description"`
	VariationType   FlagType  `json:"type"`
}
