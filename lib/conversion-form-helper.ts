import {
  volumeConversions,
  weightConversions,
  Unit, VolumeUnit,
} from "./constants";

function isVolumeUnit(unit: Unit): unit is VolumeUnit {
  return Object.values(VolumeUnit).includes(unit as VolumeUnit);
}

export function convertVolume(
  value: number,
  fromUnit: Unit,
  toUnit: Unit,
): number {
  if (!isVolumeUnit(fromUnit)) {
    throw new Error(`Invalid volume unit: ${fromUnit}.`);
  }

  if (!isVolumeUnit(toUnit)) {
    throw new Error(`Invalid volume unit: ${toUnit}.`);
  }

  const baseCups =
    value / volumeConversions[fromUnit as keyof typeof volumeConversions];
  return baseCups * volumeConversions[toUnit as keyof typeof volumeConversions];
}

export function convertWeight(
  value: number,
  fromUnit: Unit,
  toUnit: Unit,
): number {
  const baseOunces =
    value / weightConversions[fromUnit as keyof typeof weightConversions];
  return (
    baseOunces * weightConversions[toUnit as keyof typeof weightConversions]
  );
}

export function convertTemperature(
  value: number,
  fromUnit: Unit,
  toUnit: Unit,
): number {
  if (fromUnit === toUnit) return value;
  if (fromUnit === "Fahrenheit") {
    return (value - 32) * (5 / 9);
  } else {
    return value * (9 / 5) + 32;
  }
}
