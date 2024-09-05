package dao

import (
	"fmt"
	"github.com/thomaspoignant/go-feature-flag/cmd/app-api/model"
	"github.com/thomaspoignant/go-feature-flag/internal/dto"
	"gopkg.in/yaml.v3"
	"os"
)

type dataFlagImpl struct {
	filePath string
}

func NewFlagDao(filePath string) Flags {
	return &dataFlagImpl{filePath: filePath}
}

func (d *dataFlagImpl) GetFlags() ([]model.FeatureFlag, error) {
	return d.loadFlags()
}

func (d *dataFlagImpl) GetFlag(id string) (model.FeatureFlag, error) {
	flags, err := d.loadFlags()
	if err != nil {
		return model.FeatureFlag{}, err
	}
	for _, flag := range flags {
		if flag.ID == id {
			return flag, nil
		}
	}
	return model.FeatureFlag{}, fmt.Errorf("flag with id %s not found", id)
}

func (d *dataFlagImpl) CreateFlag(flag model.FeatureFlag) (string, error) {
	flags, err := d.loadFlags()
	if err != nil {
		return "", err
	}

	for _, f := range flags {
		if f.Name == flag.Name {
			return "", fmt.Errorf("flag with name %s already exists", flag.Name)
		}
	}
	flags = append(flags, flag)
	err = d.saveFlags(flags)
	if err != nil {
		return "", err
	}
	return flag.Name, nil
}

func (d *dataFlagImpl) UpdateFlag(flag model.FeatureFlag) error {
	flags, err := d.loadFlags()
	if err != nil {
		return err
	}

	for i, f := range flags {
		if f.ID == flag.ID {
			flags[i] = flag
		}
	}
	return d.saveFlags(flags)
}

func (d *dataFlagImpl) DeleteFlag(id string) error {
	flags, err := d.loadFlags()
	if err != nil {
		return err
	}

	flagsToSave := make([]model.FeatureFlag, 0)
	for i, f := range flags {
		if f.ID != id {
			flagsToSave = append(flagsToSave, flags[i])
		}
	}
	return d.saveFlags(flagsToSave)
}

func (d *dataFlagImpl) loadFlags() ([]model.FeatureFlag, error) {
	data, err := os.ReadFile(d.filePath)
	if err != nil {
		return nil, err
	}

	// Unmarshal the YAML content into a slice of dto.DTO objects
	var flags map[string]dto.DTO
	err = yaml.Unmarshal(data, &flags)
	if err != nil {
		return nil, err
	}

	featureFlags := make([]model.FeatureFlag, 0)
	for name, flag := range flags {
		featureFlags = append(featureFlags, model.FeatureFlag{
			DTO:  flag,
			Name: name,
			ID:   name,
		})
	}
	return featureFlags, nil
}

func (d *dataFlagImpl) saveFlags(flags []model.FeatureFlag) error {
	var mapFlags = make(map[string]dto.DTO)
	for _, flag := range flags {
		mapFlags[flag.Name] = flag.DTO
	}

	data, err := yaml.Marshal(mapFlags)
	if err != nil {
		return err
	}
	return os.WriteFile(d.filePath, data, 0600)
}
