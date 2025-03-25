import {
  volumeConversions,
  weightConversions,
  Unit, VolumeUnit, WeightUnit, TemperatureUnit,
} from "./constants";

function checkOfType<T extends Unit>(
    units: ReadonlyArray<Unit>,
    enumObj: Record<string, T>,
): void {

  units.forEach((unit) => {
    if(!Object.values(enumObj).includes(unit as T)){
      throw new Error(`Invalid unit: ${unit}.`);
    }
  });
}

export function convertVolume(
  value: number,
  fromUnit: Unit,
  toUnit: Unit,
): number {
  checkOfType([fromUnit, toUnit], VolumeUnit);

  if (fromUnit === toUnit) return value;

  const baseCups =
    value / volumeConversions[fromUnit as keyof typeof volumeConversions];
  return baseCups * volumeConversions[toUnit as keyof typeof volumeConversions];
}

export function convertWeight(
  value: number,
  fromUnit: Unit,
  toUnit: Unit,
): number {

  checkOfType([fromUnit, toUnit], WeightUnit);

  if (fromUnit === toUnit) return value;

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
  checkOfType([fromUnit, toUnit], TemperatureUnit);

  if (fromUnit === toUnit) return value;

  if (fromUnit === "Fahrenheit") {
    return (value - 32) * (5 / 9);
  } else {
    return value * (9 / 5) + 32;
  }
}
