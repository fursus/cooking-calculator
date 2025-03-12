export enum ConversionType {
  Volume = "Volume",
  Weight = "Weight",
  Temperature = "Temperature",
}

export enum VolumeUnit {
  Cups = "cups",
  Tablespoons = "tablespoons",
  Teaspoons = "teaspoons",
  FluidOunces = "fluid ounces",
  Milliliters = "milliliters",
  Liters = "liters",
}

export enum WeightUnit {
  Ounces = "ounces",
  Pounds = "pounds",
  Grams = "grams",
  Kilograms = "kilograms",
}

export enum TemperatureUnit {
  Fahrenheit = "Fahrenheit",
  Celsius = "Celsius",
}

export type Unit = VolumeUnit | WeightUnit | TemperatureUnit;

export const volumeConversions = {
  cups: 1,
  tablespoons: 16,
  teaspoons: 48,
  "fluid ounces": 8,
  milliliters: 236.588,
  liters: 0.236588,
};

export const weightConversions = {
  ounces: 1,
  pounds: 0.0625,
  grams: 28.3495,
  kilograms: 0.0283495,
};
