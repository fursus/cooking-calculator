import {
  convertVolume,
  convertWeight,
  convertTemperature,
} from "./unit-converter-helper";

describe("Unit Converter Helper", () => {
  describe("convertVolume", () => {
    it("should convert cups to tablespoons", () => {
      const result = convertVolume(1, "cups", "tablespoons");
      expect(result).toBe(16);
    });

    it("should convert tablespoons to teaspoons", () => {
      const result = convertVolume(1, "tablespoons", "teaspoons");
      expect(result).toBe(3);
    });

    it("should convert fluid ounces to milliliters", () => {
      const result = convertVolume(1, "fluid ounces", "milliliters");
      expect(result).toBe(29.5735);
    });

    it("should convert milliliters to liters", () => {
      const result = convertVolume(1, "milliliters", "liters");
      expect(result).toBe(0.001);
    });
  });

  describe("convertWeight", () => {
    it("should convert ounces to pounds", () => {
      const result = convertWeight(1, "ounces", "pounds");
      expect(result).toBe(0.0625);
    });

    it("should convert pounds to grams", () => {
      const result = convertWeight(1, "pounds", "grams");
      expect(result).toBe(453.592);
    });

    it("should convert grams to kilograms", () => {
      const result = convertWeight(1, "grams", "kilograms");
      expect(result).toBe(0.001);
    });
  });

  describe("convertTemperature", () => {
    it("should convert Fahrenheit to Celsius", () => {
      const result = convertTemperature(32, "Fahrenheit", "Celsius");
      expect(result).toBe(0);
    });

    it("should convert Celsius to Fahrenheit", () => {
      const result = convertTemperature(100, "Celsius", "Fahrenheit");
      expect(result).toBe(212);
    });

    it("should return the same temperature for the same unit", () => {
      const result = convertTemperature(1, "Fahrenheit", "Fahrenheit");
      expect(result).toBe(1);
    });
  });
});
