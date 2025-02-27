import {
  temperatureUnits,
  volumeConversions,
  volumeUnits,
  weightConversions,
  weightUnits,
} from "./constants";

export type ConversionType = "volume" | "weight" | "temperature";

export interface ConversionState {
  input: string;
  fromUnit: string;
  toUnit: string;
}

export function convertVolume(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  const baseCups =
    value / volumeConversions[fromUnit as keyof typeof volumeConversions];
  return baseCups * volumeConversions[toUnit as keyof typeof volumeConversions];
}

export function convertWeight(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  const baseOunces =
    value / weightConversions[fromUnit as keyof typeof weightConversions];
  return (
    baseOunces * weightConversions[toUnit as keyof typeof weightConversions]
  );
}

export function convertTemperature(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  if (fromUnit === toUnit) return value;
  if (fromUnit === "Fahrenheit") {
    return (value - 32) * (5 / 9);
  } else {
    return value * (9 / 5) + 32;
  }
}

export const getUnits = (type: ConversionType) => {
  switch (type) {
    case "volume":
      return volumeUnits;
    case "weight":
      return weightUnits;
    case "temperature":
      return temperatureUnits;
    default:
      return [];
  }
};

export const convert = (
  type: ConversionType,
  input: string,
  fromUnit: string,
  toUnit: string
) => {
  if (input === "") {
    return "";
  }

  const inputNumber = Number(input);

  if (isNaN(inputNumber)) {
    return "";
  }

  switch (type) {
    case "volume":
      return convertVolume(inputNumber, fromUnit, toUnit);
    case "weight":
      return convertWeight(inputNumber, fromUnit, toUnit);
    case "temperature":
      return convertTemperature(inputNumber, fromUnit, toUnit);
    default:
      return "";
  }
};
