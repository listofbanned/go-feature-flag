package model

import (
	"github.com/thomaspoignant/go-feature-flag/internal/dto"
	"time"
)

type FeatureFlag struct {
	dto.DTO
	ID              string    `json:"id"`
	Name            string    `json:"name"`
	CreatedDate     time.Time `json:"createdDate"`
	LastUpdatedDate time.Time `json:"lastUpdatedDate"`
	Description     string    `json:"description"`
}
