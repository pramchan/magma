// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"
	models2 "magma/lte/cloud/go/services/lte/obsidian/models"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// EnodebdTestConfig Enodebd e2e test configuration
// swagger:model enodebd_test_config
type EnodebdTestConfig struct {

	// agw config
	// Required: true
	AgwConfig *AgwTestConfig `json:"agw_config"`

	// Enodeb serial number for the test case
	// Required: true
	// Min Length: 1
	EnodebSN *string `json:"enodeb_SN"`

	// enodeb config
	// Required: true
	EnodebConfig *models2.EnodebConfiguration `json:"enodeb_config"`

	// Network for the test case
	// Required: true
	// Min Length: 1
	NetworkID *string `json:"network_id"`

	// Toggle whether or not to run traffic test cases
	// Required: true
	RunTrafficTests *bool `json:"run_traffic_tests"`

	// SSID the enodeb will connect to
	// Min Length: 1
	Ssid string `json:"ssid,omitempty"`

	// Password to authenticate to SSID
	// Min Length: 1
	SsidPw string `json:"ssid_pw,omitempty"`

	// NUC gateway ID
	// Required: true
	// Min Length: 1
	TrafficGwID *string `json:"traffic_gwID"`
}

// Validate validates this enodebd test config
func (m *EnodebdTestConfig) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAgwConfig(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateEnodebSN(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateEnodebConfig(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateNetworkID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateRunTrafficTests(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSsid(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSsidPw(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTrafficGwID(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *EnodebdTestConfig) validateAgwConfig(formats strfmt.Registry) error {

	if err := validate.Required("agw_config", "body", m.AgwConfig); err != nil {
		return err
	}

	if m.AgwConfig != nil {
		if err := m.AgwConfig.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("agw_config")
			}
			return err
		}
	}

	return nil
}

func (m *EnodebdTestConfig) validateEnodebSN(formats strfmt.Registry) error {

	if err := validate.Required("enodeb_SN", "body", m.EnodebSN); err != nil {
		return err
	}

	if err := validate.MinLength("enodeb_SN", "body", string(*m.EnodebSN), 1); err != nil {
		return err
	}

	return nil
}

func (m *EnodebdTestConfig) validateEnodebConfig(formats strfmt.Registry) error {

	if err := validate.Required("enodeb_config", "body", m.EnodebConfig); err != nil {
		return err
	}

	if m.EnodebConfig != nil {
		if err := m.EnodebConfig.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("enodeb_config")
			}
			return err
		}
	}

	return nil
}

func (m *EnodebdTestConfig) validateNetworkID(formats strfmt.Registry) error {

	if err := validate.Required("network_id", "body", m.NetworkID); err != nil {
		return err
	}

	if err := validate.MinLength("network_id", "body", string(*m.NetworkID), 1); err != nil {
		return err
	}

	return nil
}

func (m *EnodebdTestConfig) validateRunTrafficTests(formats strfmt.Registry) error {

	if err := validate.Required("run_traffic_tests", "body", m.RunTrafficTests); err != nil {
		return err
	}

	return nil
}

func (m *EnodebdTestConfig) validateSsid(formats strfmt.Registry) error {

	if swag.IsZero(m.Ssid) { // not required
		return nil
	}

	if err := validate.MinLength("ssid", "body", string(m.Ssid), 1); err != nil {
		return err
	}

	return nil
}

func (m *EnodebdTestConfig) validateSsidPw(formats strfmt.Registry) error {

	if swag.IsZero(m.SsidPw) { // not required
		return nil
	}

	if err := validate.MinLength("ssid_pw", "body", string(m.SsidPw), 1); err != nil {
		return err
	}

	return nil
}

func (m *EnodebdTestConfig) validateTrafficGwID(formats strfmt.Registry) error {

	if err := validate.Required("traffic_gwID", "body", m.TrafficGwID); err != nil {
		return err
	}

	if err := validate.MinLength("traffic_gwID", "body", string(*m.TrafficGwID), 1); err != nil {
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *EnodebdTestConfig) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *EnodebdTestConfig) UnmarshalBinary(b []byte) error {
	var res EnodebdTestConfig
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
