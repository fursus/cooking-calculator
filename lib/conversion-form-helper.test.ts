import {
  convertVolume,
  convertWeight,
  convertTemperature,
} from "./conversion-form-helper";

import {VolumeUnit, WeightUnit, TemperatureUnit, Unit} from "./constants";

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

      describe("Cups conversions", () => {
        it("should convert cups to cups (identity)", () => {
          const result = convertVolume(2, VolumeUnit.Cups, VolumeUnit.Cups);
          expect(result).toBe(2);
        });

        it("should convert cups to tablespoons", () => {
          const result = convertVolume(1, VolumeUnit.Cups, VolumeUnit.Tablespoons);
          expect(result).toBe(16);
        });

        it("should convert cups to teaspoons", () => {
          const result = convertVolume(1, VolumeUnit.Cups, VolumeUnit.Teaspoons);
          expect(result).toBe(48);
        });

        it("should convert cups to fluid ounces", () => {
          const result = convertVolume(1, VolumeUnit.Cups, VolumeUnit.FluidOunces);
          expect(result).toBe(8);
        });

        it("should convert cups to milliliters", () => {
          const result = convertVolume(1, VolumeUnit.Cups, VolumeUnit.Milliliters);
          expect(result).toBeCloseTo(236.59);
        });

        it("should convert cups to liters", () => {
          const result = convertVolume(4, VolumeUnit.Cups, VolumeUnit.Liters);
          expect(result).toBeCloseTo(0.946);
        });
      });

      describe("Tablespoons conversions", () => {
        it("should convert tablespoons to cups", () => {
          const result = convertVolume(16, VolumeUnit.Tablespoons, VolumeUnit.Cups);
          expect(result).toBe(1);
        });

        it("should convert tablespoons to tablespoons (identity)", () => {
          const result = convertVolume(5, VolumeUnit.Tablespoons, VolumeUnit.Tablespoons);
          expect(result).toBe(5);
        });

        it("should convert tablespoons to teaspoons", () => {
          const result = convertVolume(1, VolumeUnit.Tablespoons, VolumeUnit.Teaspoons);
          expect(result).toBe(3);
        });

        it("should convert tablespoons to fluid ounces", () => {
          const result = convertVolume(2, VolumeUnit.Tablespoons, VolumeUnit.FluidOunces);
          expect(result).toBe(1);
        });

        it("should convert tablespoons to milliliters", () => {
          const result = convertVolume(1, VolumeUnit.Tablespoons, VolumeUnit.Milliliters);
          expect(result).toBeCloseTo(14.79);
        });

        it("should convert tablespoons to liters", () => {
          const result = convertVolume(200, VolumeUnit.Tablespoons, VolumeUnit.Liters);
          expect(result).toBeCloseTo(2.96);
        });
      });

      describe("Teaspoons conversions", () => {
        it("should convert teaspoons to cups", () => {
          const result = convertVolume(48, VolumeUnit.Teaspoons, VolumeUnit.Cups);
          expect(result).toBe(1);
        });

        it("should convert teaspoons to tablespoons", () => {
          const result = convertVolume(3, VolumeUnit.Teaspoons, VolumeUnit.Tablespoons);
          expect(result).toBe(1);
        });

        it("should convert teaspoons to teaspoons (identity)", () => {
          const result = convertVolume(7, VolumeUnit.Teaspoons, VolumeUnit.Teaspoons);
          expect(result).toBe(7);
        });

        it("should convert teaspoons to fluid ounces", () => {
          const result = convertVolume(6, VolumeUnit.Teaspoons, VolumeUnit.FluidOunces);
          expect(result).toBe(1);
        });

        it("should convert teaspoons to milliliters", () => {
          const result = convertVolume(1, VolumeUnit.Teaspoons, VolumeUnit.Milliliters);
          expect(result).toBeCloseTo(4.93);
        });

        it("should convert teaspoons to liters", () => {
          const result = convertVolume(202, VolumeUnit.Teaspoons, VolumeUnit.Liters);
          expect(result).toBeCloseTo(0.995);
        });
      });

      describe("Fluid ounces conversions", () => {
        it("should convert fluid ounces to cups", () => {
          const result = convertVolume(8, VolumeUnit.FluidOunces, VolumeUnit.Cups);
          expect(result).toBe(1);
        });

        it("should convert fluid ounces to tablespoons", () => {
          const result = convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Tablespoons);
          expect(result).toBe(2);
        });

        it("should convert fluid ounces to teaspoons", () => {
          const result = convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Teaspoons);
          expect(result).toBe(6);
        });

        it("should convert fluid ounces to fluid ounces (identity)", () => {
          const result = convertVolume(3.5, VolumeUnit.FluidOunces, VolumeUnit.FluidOunces);
          expect(result).toBe(3.5);
        });

        it("should convert fluid ounces to milliliters", () => {
          const result = convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Milliliters);
          expect(result).toBeCloseTo(29.57);
        });

        it("should convert fluid ounces to liters", () => {
          const result = convertVolume(33.81, VolumeUnit.FluidOunces, VolumeUnit.Liters);
          expect(result).toBeCloseTo(1);
        });
      });

      describe("Milliliters conversions", () => {
        it("should convert milliliters to cups", () => {
          const result = convertVolume(236.59, VolumeUnit.Milliliters, VolumeUnit.Cups);
          expect(result).toBeCloseTo(1);
        });

        it("should convert milliliters to tablespoons", () => {
          const result = convertVolume(14.79, VolumeUnit.Milliliters, VolumeUnit.Tablespoons);
          expect(result).toBeCloseTo(1);
        });

        it("should convert milliliters to teaspoons", () => {
          const result = convertVolume(4.93, VolumeUnit.Milliliters, VolumeUnit.Teaspoons);
          expect(result).toBeCloseTo(1);
        });

        it("should convert milliliters to fluid ounces", () => {
          const result = convertVolume(29.57, VolumeUnit.Milliliters, VolumeUnit.FluidOunces);
          expect(result).toBeCloseTo(1);
        });

        it("should convert milliliters to milliliters (identity)", () => {
          const result = convertVolume(125, VolumeUnit.Milliliters, VolumeUnit.Milliliters);
          expect(result).toBe(125);
        });

        it("should convert milliliters to liters", () => {
          const result = convertVolume(1000, VolumeUnit.Milliliters, VolumeUnit.Liters);
          expect(result).toBe(1);
        });
      });

      describe("Liters conversions", () => {
        it("should convert liters to cups", () => {
          const result = convertVolume(0.946, VolumeUnit.Liters, VolumeUnit.Cups);
          expect(result).toBeCloseTo(4);
        });

        it("should convert liters to tablespoons", () => {
          const result = convertVolume(0.0148, VolumeUnit.Liters, VolumeUnit.Tablespoons);
          expect(result).toBeCloseTo(1);
        });

        it("should convert liters to teaspoons", () => {
          const result = convertVolume(0.00493, VolumeUnit.Liters, VolumeUnit.Teaspoons);
          expect(result).toBeCloseTo(1);
        });

        it("should convert liters to fluid ounces", () => {
          const result = convertVolume(1, VolumeUnit.Liters, VolumeUnit.FluidOunces);
          expect(result).toBeCloseTo(33.81);
        });

        it("should convert liters to milliliters", () => {
          const result = convertVolume(1, VolumeUnit.Liters, VolumeUnit.Milliliters);
          expect(result).toBe(1000);
        });

        it("should convert liters to liters (identity)", () => {
          const result = convertVolume(2.5, VolumeUnit.Liters, VolumeUnit.Liters);
          expect(result).toBe(2.5);
        });
      });

      describe("Edge cases", () => {
        it("should handle zero values", () => {
          const result = convertVolume(0, VolumeUnit.Cups, VolumeUnit.Milliliters);
          expect(result).toBe(0);
        });

        it("should handle negative values", () => {
          const result = convertVolume(-1, VolumeUnit.Cups, VolumeUnit.Milliliters);
          expect(result).toBeCloseTo(-236.59);
        });

        it("should handle decimal values", () => {
          const result = convertVolume(0.5, VolumeUnit.Cups, VolumeUnit.Tablespoons);
          expect(result).toBe(8);
        });

        it("should handle large values", () => {
          const result = convertVolume(1000, VolumeUnit.Milliliters, VolumeUnit.Cups);
          expect(result).toBeCloseTo(4.227);
        });
      });
    describe("Volume Conversion Validation Tests", () => {
      // Valid conversions - should not throw errors
      describe("Valid conversions", () => {
        it("should accept valid volume unit conversions", () => {
          // This should not throw an error
          expect(() => {
            convertVolume(1, VolumeUnit.Cups, VolumeUnit.Tablespoons);
          }).not.toThrow();
        });

        it("should handle all valid volume unit combinations", () => {
          const volumeUnits = Object.values(VolumeUnit);
          // Test a sample of valid combinations
          volumeUnits.forEach(fromUnit => {
            volumeUnits.forEach(toUnit => {
              expect(() => {
                convertVolume(1, fromUnit, toUnit);
              }).not.toThrow();
            });
          });
        });
      });

      describe("Invalid from unit", () => {
        it("should throw an error when fromUnit is a weight unit", () => {
          expect(() => {
            convertVolume(1, WeightUnit.Grams as unknown as Unit, VolumeUnit.Cups);
          }).toThrow(/Invalid volume unit: grams/);
        });

        it("should throw an error when fromUnit is a temperature unit", () => {
          expect(() => {
            convertVolume(1, TemperatureUnit.Celsius as unknown as Unit, VolumeUnit.Cups);
          }).toThrow(/Invalid volume unit: Celsius/);
        });

        it("should throw an error with a non-existent unit", () => {
          expect(() => {
            convertVolume(1, "gallons" as unknown as Unit, VolumeUnit.Cups);
          }).toThrow(/Invalid volume unit/);
        });
      });

      describe("Invalid to unit", () => {
        it("should throw an error when toUnit is a weight unit", () => {
          expect(() => {
            convertVolume(1, VolumeUnit.Cups, WeightUnit.Pounds as unknown as Unit);
          }).toThrow(/Invalid volume unit: pounds/);
        });

        it("should throw an error when toUnit is a temperature unit", () => {
          expect(() => {
            convertVolume(1, VolumeUnit.Cups, TemperatureUnit.Fahrenheit as unknown as Unit);
          }).toThrow(/Invalid volume unit: Fahrenheit/);
        });

        it("should throw an error with a non-existent unit", () => {
          expect(() => {
            convertVolume(1, VolumeUnit.Cups, "quarts" as unknown as Unit);
          }).toThrow(/Invalid volume unit/);
        });
      });

      describe("Both units invalid", () => {
        it("should throw an error mentioning the first invalid unit when both units are invalid", () => {
          expect(() => {
            convertVolume(1, WeightUnit.Kilograms as unknown as Unit, TemperatureUnit.Celsius as unknown as Unit);
          }).toThrow(/Invalid volume unit: kilograms/);
        });
      });

      describe("Edge cases", () => {
        it("should throw an error with undefined units", () => {
          expect(() => {
            convertVolume(1, undefined as unknown as Unit, VolumeUnit.Cups);
          }).toThrow(/Invalid volume unit/);

          expect(() => {
            convertVolume(1, VolumeUnit.Cups, undefined as unknown as Unit);
          }).toThrow(/Invalid volume unit/);
        });

        it("should throw an error with null units", () => {
          expect(() => {
            convertVolume(1, null as unknown as Unit, VolumeUnit.Cups);
          }).toThrow(/Invalid volume unit/);

          expect(() => {
            convertVolume(1, VolumeUnit.Cups, null as unknown as Unit);
          }).toThrow(/Invalid volume unit/);
        });
      });
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
});
