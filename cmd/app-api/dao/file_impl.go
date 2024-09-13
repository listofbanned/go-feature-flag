package dao

import (
	"fmt"
	"github.com/thomaspoignant/go-feature-flag/cmd/app-api/model"
	"github.com/thomaspoignant/go-feature-flag/internal/dto"
	"gopkg.in/yaml.v3"
	"os"
	"time"
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
	return flag.ID, nil
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
		loadedFlag := model.FeatureFlag{
			DTO: dto.DTO{
				DTOv1:       flag.DTOv1,
				TrackEvents: flag.TrackEvents,
				Disable:     flag.Disable,
				Version:     flag.Version,
			},
			Name: name,
		}

		if flag.Metadata != nil {
			metadata := *flag.Metadata
			if metadata["gofeatureflag_id"] != nil {
				loadedFlag.ID = metadata["gofeatureflag_id"].(string)
				delete(metadata, "gofeatureflag_id")
			} else {
				// default to avoid failing
				loadedFlag.ID = name
			}

			if metadata["gofeatureflag_createdDate"] != nil {
				loadedFlag.CreatedDate = metadata["gofeatureflag_createdDate"].(time.Time)
				delete(metadata, "gofeatureflag_createdDate")
			}

			if metadata["gofeatureflag_lastUpdatedDate"] != nil {
				loadedFlag.LastUpdatedDate = metadata["gofeatureflag_lastUpdatedDate"].(time.Time)
				delete(metadata, "gofeatureflag_lastUpdatedDate")
			}

			if metadata["gofeatureflag_description"] != nil {
				loadedFlag.Description = metadata["gofeatureflag_description"].(string)
				delete(metadata, "gofeatureflag_description")
			}

			loadedFlag.Metadata = &metadata
		}

		if flag.Variations != nil {
			m := *flag.Variations
			values := make([]interface{}, 0, len(m))
			for _, value := range m {
				values = append(values, *value)
			}
			firstValue := values[0]
			switch firstValue.(type) {
			case bool:
				loadedFlag.VariationType = model.FlagTypeBoolean
				break
			case string:
				loadedFlag.VariationType = model.FlagTypeString
				break
			case int, int32, int64:
				loadedFlag.VariationType = model.FlagTypeInteger
				break
			case float64:
				loadedFlag.VariationType = model.FlagTypeDouble
				break
			default:
				loadedFlag.VariationType = model.FlagTypeJSON
				break
			}
		}
		featureFlags = append(featureFlags, loadedFlag)

	}

	return featureFlags, nil
}

func (d *dataFlagImpl) saveFlags(flags []model.FeatureFlag) error {
	var mapFlags = make(map[string]dto.DTO)
	for _, flag := range flags {

		// Save extra info in metadata
		metadata := *flag.Metadata
		if metadata == nil {
			metadata = make(map[string]interface{})
		}
		metadata["gofeatureflag_id"] = flag.ID
		metadata["gofeatureflag_createdDate"] = flag.CreatedDate
		metadata["gofeatureflag_lastUpdatedDate"] = flag.LastUpdatedDate
		metadata["gofeatureflag_description"] = flag.Description
		flag.DTO.Metadata = &metadata

		mapFlags[flag.Name] = flag.DTO
	}

	data, err := yaml.Marshal(mapFlags)
	if err != nil {
		return err
	}
	return os.WriteFile(d.filePath, data, 0600)
}
