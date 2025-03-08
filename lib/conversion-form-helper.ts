import {
  volumeConversions,
  weightConversions,
  ConversionType,
  VolumeUnit,
  WeightUnit,
  TemperatureUnit,
} from "./constants";

export function convertVolume(
  value: number,
  fromUnit: VolumeUnit | WeightUnit | TemperatureUnit,
  toUnit: VolumeUnit | WeightUnit | TemperatureUnit
): number {
  const baseCups =
    value / volumeConversions[fromUnit as keyof typeof volumeConversions];
  return baseCups * volumeConversions[toUnit as keyof typeof volumeConversions];
}

export function convertWeight(
  value: number,
  fromUnit: VolumeUnit | WeightUnit | TemperatureUnit,
  toUnit: VolumeUnit | WeightUnit | TemperatureUnit
): number {
  const baseOunces =
    value / weightConversions[fromUnit as keyof typeof weightConversions];
  return (
    baseOunces * weightConversions[toUnit as keyof typeof weightConversions]
  );
}

export function convertTemperature(
  value: number,
  fromUnit: VolumeUnit | WeightUnit | TemperatureUnit,
  toUnit: VolumeUnit | WeightUnit | TemperatureUnit
): number {
  if (fromUnit === toUnit) return value;
  if (fromUnit === "Fahrenheit") {
    return (value - 32) * (5 / 9);
  } else {
    return value * (9 / 5) + 32;
  }
}

export const convert = (
  type: ConversionType,
  input: string,
  fromUnit: VolumeUnit | WeightUnit | TemperatureUnit,
  toUnit: VolumeUnit | WeightUnit | TemperatureUnit
) => {
  if (input === "") {
    return "";
  }

  const inputNumber = Number(input);

  if (isNaN(inputNumber)) {
    return "";
  }

  switch (type) {
    case ConversionType.Volume:
      return convertVolume(inputNumber, fromUnit, toUnit);
    case ConversionType.Weight:
      return convertWeight(inputNumber, fromUnit, toUnit);
    case ConversionType.Temperature:
      return convertTemperature(inputNumber, fromUnit, toUnit);
    default:
      return "";
  }
};
