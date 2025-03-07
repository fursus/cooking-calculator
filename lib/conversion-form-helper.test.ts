import {
  convertVolume,
  convertWeight,
  convertTemperature,
  convert,
} from "./conversion-form-helper";

import {
  VolumeUnit,
  WeightUnit,
  TemperatureUnit,
  ConversionType,
} from "./constants";

describe("Unit Converter Helper", () => {
  describe("convertVolume", () => {
    it("should convert cups to tablespoons", () => {
      const result = convertVolume(1, VolumeUnit.Cups, VolumeUnit.Tablespoons);
      expect(result).toBe(16);
    });

    it("should convert tablespoons to teaspoons", () => {
      const result = convertVolume(
        1,
        VolumeUnit.Tablespoons,
        VolumeUnit.Teaspoons
      );
      expect(result).toBe(3);
    });

    it("should convert fluid ounces to milliliters", () => {
      const result = convertVolume(
        1,
        VolumeUnit.FluidOunces,
        VolumeUnit.Milliliters
      );
      expect(result).toBe(29.5735);
    });

    it("should convert milliliters to liters", () => {
      const result = convertVolume(
        1,
        VolumeUnit.Milliliters,
        VolumeUnit.Liters
      );
      expect(result).toBe(0.001);
    });
  });

  describe("convertWeight", () => {
    it("should convert ounces to pounds", () => {
      const result = convertWeight(1, WeightUnit.Ounces, WeightUnit.Pounds);
      expect(result).toBe(0.0625);
    });

    it("should convert pounds to grams", () => {
      const result = convertWeight(1, WeightUnit.Pounds, WeightUnit.Grams);
      expect(result).toBe(453.592);
    });

    it("should convert grams to kilograms", () => {
      const result = convertWeight(1, WeightUnit.Grams, WeightUnit.Kilograms);
      expect(result).toBe(0.001);
    });
  });

  describe("convertTemperature", () => {
    it("should convert Fahrenheit to Celsius", () => {
      const result = convertTemperature(
        32,
        TemperatureUnit.Fahrenheit,
        TemperatureUnit.Celsius
      );
      expect(result).toBe(0);
    });

    it("should convert Celsius to Fahrenheit", () => {
      const result = convertTemperature(
        100,
        TemperatureUnit.Celsius,
        TemperatureUnit.Fahrenheit
      );
      expect(result).toBe(212);
    });

    it("should return the same temperature for the same unit", () => {
      const result = convertTemperature(
        1,
        TemperatureUnit.Fahrenheit,
        TemperatureUnit.Fahrenheit
      );
      expect(result).toBe(1);
    });
  });

  describe("convert", () => {
    it("should convert volume", () => {
      const result = convert(
        ConversionType.Volume,
        "1",
        VolumeUnit.Cups,
        VolumeUnit.Tablespoons
      );
      expect(result).toBe(16);
    });

    it("should convert weight", () => {
      const result = convert(
        ConversionType.Weight,
        "1",
        WeightUnit.Ounces,
        WeightUnit.Pounds
      );
      expect(result).toBe(0.0625);
    });

    it("should convert temperature", () => {
      const result = convert(
        ConversionType.Temperature,
        "-40",
        TemperatureUnit.Fahrenheit,
        TemperatureUnit.Celsius
      );
      expect(result).toBe(-40);
    });

    it("should return an empty string if the input is empty", () => {
      const result = convert(
        ConversionType.Volume,
        "",
        VolumeUnit.Cups,
        VolumeUnit.Tablespoons
      );
      expect(result).toBe("");
    });

    it("should return an empty string if the input is not a number", () => {
      const result = convert(
        ConversionType.Volume,
        "not a number",
        VolumeUnit.Cups,
        VolumeUnit.Tablespoons
      );
      expect(result).toBe("");
    });
  });
});
