module.exports = [
  {
    "type": "heading",
    "defaultValue": "Units & formats"
  },
  {
    "type": "select",
    "messageKey": "TEMP_UNIT",
    "defaultValue": 0,
    "label": "Temperature",
    "options": [
      { "label": "°C", "value": 0 },
      { "label": "°F", "value": 1 }
    ]
  },
  {
    "type": "select",
    "messageKey": "WIND_UNIT",
    "defaultValue": 0,
    "label": "Wind",
    "options": [
      { "label": "m/s", "value": 0 },
      { "label": "km/h", "value": 1 },
      { "label": "mph", "value": 2 }
    ]
  },
  {
    "type": "select",
    "messageKey": "PRECIP_UNIT",
    "defaultValue": 0,
    "label": "Precipitation",
    "options": [
      { "label": "mm", "value": 0 },
      { "label": "inch", "value": 1 }
    ]
  },
  {
    "type": "select",
    "messageKey": "DATE_FORMAT",
    "defaultValue": 0,
    "label": "Date",
    "options": [
      { "label": "dd.mm.", "value": 0 },
      { "label": "mm/dd", "value": 1 }
    ]
  },
  {
    "type": "select",
    "messageKey": "TIME_FORMAT",
    "defaultValue": 0,
    "label": "Time",
    "options": [
      { "label": "24h", "value": 0 },
      { "label": "12h (am/pm)", "value": 1 }
    ]
  },
  {
    "type": "heading",
    "defaultValue": "Data selection"
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_CLOUD_Z1",
    "label": "Cloud cover (1 day)",
    "defaultValue": true
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_CLOUD_Z5",
    "label": "Cloud cover (5 days)",
    "defaultValue": true
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_PRECIP_Z1",
    "label": "Precipitation (1 day)",
    "defaultValue": true
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_PRECIP_Z5",
    "label": "Precipitation (5 days)",
    "defaultValue": true
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_WEATHER_IND_Z1",
    "label": "Snow & lightning indicators (1 day)",
    "defaultValue": true
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_WEATHER_IND_Z5",
    "label": "Snow & lightning indicators (5 days)",
    "defaultValue": true
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_HUMIDITY_Z1",
    "label": "Relative humidity (1 day)",
    "defaultValue": false
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_HUMIDITY_Z5",
    "label": "Relative humidity (5 days)",
    "defaultValue": false
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_WIND_Z1",
    "label": "Wind speed & direction (1 day)",
    "defaultValue": true
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_WIND_Z5",
    "label": "Wind speed & direction (5 days)",
    "defaultValue": true
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_UV_Z1",
    "label": "UV index (1 day)",
    "defaultValue": false
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_UV_Z5",
    "label": "UV index (5 days)",
    "defaultValue": false
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_GOLDEN_HOUR_Z1",
    "label": "Golden hour (1 day)",
    "defaultValue": false
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_GOLDEN_HOUR_Z5",
    "label": "Golden hour (5 days)",
    "defaultValue": false
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_DARKNESS_Z1",
    "label": "Darkness (1 day)",
    "defaultValue": false
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_DARKNESS_Z5",
    "label": "Darkness (5 days)",
    "defaultValue": false
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_SUNRISE_SUNSET_Z1",
    "label": "Sunrise & sunset ticks (1 day)",
    "defaultValue": false
  },
  {
    "type": "toggle",
    "messageKey": "SHOW_SUNRISE_SUNSET_Z5",
    "label": "Sunrise & sunset ticks (5 days)",
    "defaultValue": false
  },
  {
    "type": "heading",
    "defaultValue": "Preset Locations"
  },
  {
    "type": "input",
    "messageKey": "PRESET_NAME_1",
    "defaultValue": "",
    "label": "Location 1",
    "attributes": { "placeholder": "e.g. Paris", "maxlength": 32 }
  },
  {
    "type": "input",
    "messageKey": "PRESET_NAME_2",
    "defaultValue": "",
    "label": "Location 2",
    "attributes": { "placeholder": "e.g. Tokyo", "maxlength": 32 }
  },
  {
    "type": "input",
    "messageKey": "PRESET_NAME_3",
    "defaultValue": "",
    "label": "Location 3",
    "attributes": { "placeholder": "", "maxlength": 32 }
  },
  {
    "type": "input",
    "messageKey": "PRESET_NAME_4",
    "defaultValue": "",
    "label": "Location 4",
    "attributes": { "placeholder": "", "maxlength": 32 }
  },
  {
    "type": "input",
    "messageKey": "PRESET_NAME_5",
    "defaultValue": "",
    "label": "Location 5",
    "attributes": { "placeholder": "", "maxlength": 32 }
  },
  {
    "type": "submit",
    "defaultValue": "Save"
  }
];
