export const ShippingSettings = {
  maxPackageWeight: 40,
  packagesAmountRebate: {
    1: 0.85,
    2: 0.8,
    3: 0.75,
    4: 0.7,
    maxRebate: 0.7,
  }
}

export const ShippingCountries = {
  "Croatia": "Zone 1",
  "Slovenia": "Zone 1",
  "Hungary": "Zone 1",
  "Slovakia": "Zone 1",
  "Austria": "Zone 1",
  "Czech Republic": "Zone 1",
  "Poland": "Zone 1",
  "Germany": "Zone 1",
  "Lichtenstein": "Zone 1",
  "Switzerland": "Zone 1",
  "Belgium": "Zone 1",
  "Netherlands": "Zone 1",
  "Luxembourg": "Zone 1",
  "Montenegro": "Zone 1",
  "Serbia": "Zone 1",
  "Macedonia": "Zone 1",
  "Kosovo": "Zone 1",
  "Bosnia and Herzegovina": "Zone 1",
  "Romania": "Zone 2",
  "Italy": "Zone 2",
  "Bulgaria": "Zone 2",
  "Denmark": "Zone 2",
  "United Kingdom": "Zone 2",
  "Ireland": "Zone 2",
  "Lithuania": "Zone 3",
  "Latvia": "Zone 3",
  "Estonia": "Zone 3",
  "Sweden": "Zone 3",
  "Greece": "Zone 3",
  "Finland": "Zone 3",
  "France": "Zone 3",
  "Turkey": "Zone 3",
  "Norway": "Zone 3",
  "Spain": "Zone 3",
  "Portugal": "Zone 3",
  "Cyprus": "Zone 3",
  "Malta": "Zone 3",
  "San Marino": "Zone 3",
  "Monaco": "Zone 3",
  "Andorra": "Zone 3",
  "Gibraltar": "Zone 3",
  "USA": "USA",
  "Canada": "USA"
}

export const ShippingZones = {
  // key represents maximum weight of the package
  "1": {
    "Zone 1": 5.45,
    "Zone 2": 14.95,
    "Zone 3": 19.95,
    "USA": 29.95
  },
  "5": {
    "Zone 1": 22.95,
    "Zone 2": 34.95,
    "Zone 3": 59.95,
    "USA": 149.95
  },
  "10": {
    "Zone 1": 29.95,
    "Zone 2": 42.95,
    "Zone 3": 69.95,
    "USA": 199.95
  },
  "20": {
    "Zone 1": 41.95,
    "Zone 2": 52.95,
    "Zone 3": 99.95,
    "USA": 315.95
  },
  "40": {
    "Zone 1": 51.95,
    "Zone 2": 65.95,
    "Zone 3": 109.95,
    "USA": 415.95
  },
}



// WEBPACK FOOTER //
// ./src/data/ShippingData.js
