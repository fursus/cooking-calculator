import { convertVolume, convertWeight, convertTemperature } from './conversion-form-helper';

import { VolumeUnit, WeightUnit, TemperatureUnit, Unit } from './constants';

describe('Unit Converter Helper', () => {
  describe('convertVolume', () => {
    it('should convert cups to tablespoons', () => {
      const result = convertVolume(1, VolumeUnit.Cups, VolumeUnit.Tablespoons);
      expect(result).toBe(16);
    });

    it('should convert tablespoons to teaspoons', () => {
      const result = convertVolume(1, VolumeUnit.Tablespoons, VolumeUnit.Teaspoons);
      expect(result).toBe(3);
    });

    it('should convert fluid ounces to milliliters', () => {
      const result = convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Milliliters);
      expect(result).toBe(29.5735);
    });

    it('should convert milliliters to liters', () => {
      const result = convertVolume(1, VolumeUnit.Milliliters, VolumeUnit.Liters);
      expect(result).toBe(0.001);
    });

    describe('Cups conversions', () => {
      it('should convert cups to cups (identity)', () => {
        const result = convertVolume(2, VolumeUnit.Cups, VolumeUnit.Cups);
        expect(result).toBe(2);
      });

      it('should convert cups to tablespoons', () => {
        const result = convertVolume(1, VolumeUnit.Cups, VolumeUnit.Tablespoons);
        expect(result).toBe(16);
      });

      it('should convert cups to teaspoons', () => {
        const result = convertVolume(1, VolumeUnit.Cups, VolumeUnit.Teaspoons);
        expect(result).toBe(48);
      });

      it('should convert cups to fluid ounces', () => {
        const result = convertVolume(1, VolumeUnit.Cups, VolumeUnit.FluidOunces);
        expect(result).toBe(8);
      });

      it('should convert cups to milliliters', () => {
        const result = convertVolume(1, VolumeUnit.Cups, VolumeUnit.Milliliters);
        expect(result).toBeCloseTo(236.59);
      });

      it('should convert cups to liters', () => {
        const result = convertVolume(4, VolumeUnit.Cups, VolumeUnit.Liters);
        expect(result).toBeCloseTo(0.946);
      });
    });

    describe('Tablespoons conversions', () => {
      it('should convert tablespoons to cups', () => {
        const result = convertVolume(16, VolumeUnit.Tablespoons, VolumeUnit.Cups);
        expect(result).toBe(1);
      });

      it('should convert tablespoons to tablespoons (identity)', () => {
        const result = convertVolume(5, VolumeUnit.Tablespoons, VolumeUnit.Tablespoons);
        expect(result).toBe(5);
      });

      it('should convert tablespoons to teaspoons', () => {
        const result = convertVolume(1, VolumeUnit.Tablespoons, VolumeUnit.Teaspoons);
        expect(result).toBe(3);
      });

      it('should convert tablespoons to fluid ounces', () => {
        const result = convertVolume(2, VolumeUnit.Tablespoons, VolumeUnit.FluidOunces);
        expect(result).toBe(1);
      });

      it('should convert tablespoons to milliliters', () => {
        const result = convertVolume(1, VolumeUnit.Tablespoons, VolumeUnit.Milliliters);
        expect(result).toBeCloseTo(14.79);
      });

      it('should convert tablespoons to liters', () => {
        const result = convertVolume(200, VolumeUnit.Tablespoons, VolumeUnit.Liters);
        expect(result).toBeCloseTo(2.96);
      });
    });

    describe('Teaspoons conversions', () => {
      it('should convert teaspoons to cups', () => {
        const result = convertVolume(48, VolumeUnit.Teaspoons, VolumeUnit.Cups);
        expect(result).toBe(1);
      });

      it('should convert teaspoons to tablespoons', () => {
        const result = convertVolume(3, VolumeUnit.Teaspoons, VolumeUnit.Tablespoons);
        expect(result).toBe(1);
      });

      it('should convert teaspoons to teaspoons (identity)', () => {
        const result = convertVolume(7, VolumeUnit.Teaspoons, VolumeUnit.Teaspoons);
        expect(result).toBe(7);
      });

      it('should convert teaspoons to fluid ounces', () => {
        const result = convertVolume(6, VolumeUnit.Teaspoons, VolumeUnit.FluidOunces);
        expect(result).toBe(1);
      });

      it('should convert teaspoons to milliliters', () => {
        const result = convertVolume(1, VolumeUnit.Teaspoons, VolumeUnit.Milliliters);
        expect(result).toBeCloseTo(4.93);
      });

      it('should convert teaspoons to liters', () => {
        const result = convertVolume(202, VolumeUnit.Teaspoons, VolumeUnit.Liters);
        expect(result).toBeCloseTo(0.995);
      });
    });

    describe('Fluid ounces conversions', () => {
      it('should convert fluid ounces to cups', () => {
        const result = convertVolume(8, VolumeUnit.FluidOunces, VolumeUnit.Cups);
        expect(result).toBe(1);
      });

      it('should convert fluid ounces to tablespoons', () => {
        const result = convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Tablespoons);
        expect(result).toBe(2);
      });

      it('should convert fluid ounces to teaspoons', () => {
        const result = convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Teaspoons);
        expect(result).toBe(6);
      });

      it('should convert fluid ounces to fluid ounces (identity)', () => {
        const result = convertVolume(3.5, VolumeUnit.FluidOunces, VolumeUnit.FluidOunces);
        expect(result).toBe(3.5);
      });

      it('should convert fluid ounces to milliliters', () => {
        const result = convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Milliliters);
        expect(result).toBeCloseTo(29.57);
      });

      it('should convert fluid ounces to liters', () => {
        const result = convertVolume(33.81, VolumeUnit.FluidOunces, VolumeUnit.Liters);
        expect(result).toBeCloseTo(1);
      });
    });

    describe('Milliliters conversions', () => {
      it('should convert milliliters to cups', () => {
        const result = convertVolume(236.59, VolumeUnit.Milliliters, VolumeUnit.Cups);
        expect(result).toBeCloseTo(1);
      });

      it('should convert milliliters to tablespoons', () => {
        const result = convertVolume(14.79, VolumeUnit.Milliliters, VolumeUnit.Tablespoons);
        expect(result).toBeCloseTo(1);
      });

      it('should convert milliliters to teaspoons', () => {
        const result = convertVolume(4.93, VolumeUnit.Milliliters, VolumeUnit.Teaspoons);
        expect(result).toBeCloseTo(1);
      });

      it('should convert milliliters to fluid ounces', () => {
        const result = convertVolume(29.57, VolumeUnit.Milliliters, VolumeUnit.FluidOunces);
        expect(result).toBeCloseTo(1);
      });

      it('should convert milliliters to milliliters (identity)', () => {
        const result = convertVolume(125, VolumeUnit.Milliliters, VolumeUnit.Milliliters);
        expect(result).toBe(125);
      });

      it('should convert milliliters to liters', () => {
        const result = convertVolume(1000, VolumeUnit.Milliliters, VolumeUnit.Liters);
        expect(result).toBe(1);
      });
    });

    describe('Liters conversions', () => {
      it('should convert liters to cups', () => {
        const result = convertVolume(0.946, VolumeUnit.Liters, VolumeUnit.Cups);
        expect(result).toBeCloseTo(4);
      });

      it('should convert liters to tablespoons', () => {
        const result = convertVolume(0.0148, VolumeUnit.Liters, VolumeUnit.Tablespoons);
        expect(result).toBeCloseTo(1);
      });

      it('should convert liters to teaspoons', () => {
        const result = convertVolume(0.00493, VolumeUnit.Liters, VolumeUnit.Teaspoons);
        expect(result).toBeCloseTo(1);
      });

      it('should convert liters to fluid ounces', () => {
        const result = convertVolume(1, VolumeUnit.Liters, VolumeUnit.FluidOunces);
        expect(result).toBeCloseTo(33.81);
      });

      it('should convert liters to milliliters', () => {
        const result = convertVolume(1, VolumeUnit.Liters, VolumeUnit.Milliliters);
        expect(result).toBe(1000);
      });

      it('should convert liters to liters (identity)', () => {
        const result = convertVolume(2.5, VolumeUnit.Liters, VolumeUnit.Liters);
        expect(result).toBe(2.5);
      });
    });

    describe('Edge cases', () => {
      it('should handle zero values', () => {
        const result = convertVolume(0, VolumeUnit.Cups, VolumeUnit.Milliliters);
        expect(result).toBe(0);
      });

      it('should handle negative values', () => {
        const result = convertVolume(-1, VolumeUnit.Cups, VolumeUnit.Milliliters);
        expect(result).toBeCloseTo(-236.59);
      });

      it('should handle decimal values', () => {
        const result = convertVolume(0.5, VolumeUnit.Cups, VolumeUnit.Tablespoons);
        expect(result).toBe(8);
      });

      it('should handle large values', () => {
        const result = convertVolume(1000, VolumeUnit.Milliliters, VolumeUnit.Cups);
        expect(result).toBeCloseTo(4.227);
      });
    });
    describe('Volume Conversion Validation Tests', () => {
      describe('Valid conversions', () => {
        it('should accept valid volume unit conversions', () => {
          expect(() => {
            convertVolume(1, VolumeUnit.Cups, VolumeUnit.Tablespoons);
          }).not.toThrow();
        });

        it('should handle all valid volume unit combinations', () => {
          const volumeUnits = Object.values(VolumeUnit);
          volumeUnits.forEach((fromUnit) => {
            volumeUnits.forEach((toUnit) => {
              expect(() => {
                convertVolume(1, fromUnit, toUnit);
              }).not.toThrow();
            });
          });
        });
      });

      describe('Invalid from unit', () => {
        it('should throw an error when fromUnit is a weight unit', () => {
          expect(() => {
            convertVolume(1, WeightUnit.Grams as unknown as Unit, VolumeUnit.Cups);
          }).toThrow(/Invalid unit: grams/);
        });

        it('should throw an error when fromUnit is a temperature unit', () => {
          expect(() => {
            convertVolume(1, TemperatureUnit.Celsius as unknown as Unit, VolumeUnit.Cups);
          }).toThrow(/Invalid unit: Celsius/);
        });

        it('should throw an error with a non-existent unit', () => {
          expect(() => {
            convertVolume(1, 'gallons' as unknown as Unit, VolumeUnit.Cups);
          }).toThrow(/Invalid unit/);
        });
      });

      describe('Invalid to unit', () => {
        it('should throw an error when toUnit is a weight unit', () => {
          expect(() => {
            convertVolume(1, VolumeUnit.Cups, WeightUnit.Pounds as unknown as Unit);
          }).toThrow(/Invalid unit: pounds/);
        });

        it('should throw an error when toUnit is a temperature unit', () => {
          expect(() => {
            convertVolume(1, VolumeUnit.Cups, TemperatureUnit.Fahrenheit as unknown as Unit);
          }).toThrow(/Invalid unit: Fahrenheit/);
        });

        it('should throw an error with a non-existent unit', () => {
          expect(() => {
            convertVolume(1, VolumeUnit.Cups, 'quarts' as unknown as Unit);
          }).toThrow(/Invalid unit/);
        });
      });

      describe('Both units invalid', () => {
        it('should throw an error mentioning the first invalid unit when both units are invalid', () => {
          expect(() => {
            convertVolume(1, WeightUnit.Kilograms as unknown as Unit, TemperatureUnit.Celsius as unknown as Unit);
          }).toThrow(/Invalid unit: kilograms/);
        });
      });

      describe('Edge cases', () => {
        it('should throw an error with undefined units', () => {
          expect(() => {
            convertVolume(1, undefined as unknown as Unit, VolumeUnit.Cups);
          }).toThrow(/Invalid unit/);

          expect(() => {
            convertVolume(1, VolumeUnit.Cups, undefined as unknown as Unit);
          }).toThrow(/Invalid unit/);
        });

        it('should throw an error with null units', () => {
          expect(() => {
            convertVolume(1, null as unknown as Unit, VolumeUnit.Cups);
          }).toThrow(/Invalid unit/);

          expect(() => {
            convertVolume(1, VolumeUnit.Cups, null as unknown as Unit);
          }).toThrow(/Invalid unit/);
        });
      });
    });
    test('converts cups to cups', () => {
      expect(convertVolume(1, VolumeUnit.Cups, VolumeUnit.Cups)).toBeCloseTo(1);
      expect(convertVolume(2.5, VolumeUnit.Cups, VolumeUnit.Cups)).toBeCloseTo(2.5);
    });

    test('converts cups to tablespoons', () => {
      expect(convertVolume(1, VolumeUnit.Cups, VolumeUnit.Tablespoons)).toBeCloseTo(16);
      expect(convertVolume(0.5, VolumeUnit.Cups, VolumeUnit.Tablespoons)).toBeCloseTo(8);
    });

    test('converts cups to teaspoons', () => {
      expect(convertVolume(1, VolumeUnit.Cups, VolumeUnit.Teaspoons)).toBeCloseTo(48);
      expect(convertVolume(0.25, VolumeUnit.Cups, VolumeUnit.Teaspoons)).toBeCloseTo(12);
    });

    test('converts cups to fluid ounces', () => {
      expect(convertVolume(1, VolumeUnit.Cups, VolumeUnit.FluidOunces)).toBeCloseTo(8);
      expect(convertVolume(0.5, VolumeUnit.Cups, VolumeUnit.FluidOunces)).toBeCloseTo(4);
    });

    test('converts cups to milliliters', () => {
      expect(convertVolume(1, VolumeUnit.Cups, VolumeUnit.Milliliters)).toBeCloseTo(236.588);
      expect(convertVolume(2, VolumeUnit.Cups, VolumeUnit.Milliliters)).toBeCloseTo(473.176);
    });

    test('converts cups to liters', () => {
      expect(convertVolume(1, VolumeUnit.Cups, VolumeUnit.Liters)).toBeCloseTo(0.236588);
      expect(convertVolume(4, VolumeUnit.Cups, VolumeUnit.Liters)).toBeCloseTo(0.946352);
    });

    // Tablespoon conversions
    test('converts tablespoons to cups', () => {
      expect(convertVolume(16, VolumeUnit.Tablespoons, VolumeUnit.Cups)).toBeCloseTo(1);
      expect(convertVolume(8, VolumeUnit.Tablespoons, VolumeUnit.Cups)).toBeCloseTo(0.5);
    });

    test('converts tablespoons to tablespoons', () => {
      expect(convertVolume(1, VolumeUnit.Tablespoons, VolumeUnit.Tablespoons)).toBeCloseTo(1);
      expect(convertVolume(2.5, VolumeUnit.Tablespoons, VolumeUnit.Tablespoons)).toBeCloseTo(2.5);
    });

    test('converts tablespoons to teaspoons', () => {
      expect(convertVolume(1, VolumeUnit.Tablespoons, VolumeUnit.Teaspoons)).toBeCloseTo(3);
      expect(convertVolume(2, VolumeUnit.Tablespoons, VolumeUnit.Teaspoons)).toBeCloseTo(6);
    });

    test('converts tablespoons to fluid ounces', () => {
      expect(convertVolume(2, VolumeUnit.Tablespoons, VolumeUnit.FluidOunces)).toBeCloseTo(1);
      expect(convertVolume(4, VolumeUnit.Tablespoons, VolumeUnit.FluidOunces)).toBeCloseTo(2);
    });

    test('converts tablespoons to milliliters', () => {
      expect(convertVolume(1, VolumeUnit.Tablespoons, VolumeUnit.Milliliters)).toBeCloseTo(14.7868);
      expect(convertVolume(2, VolumeUnit.Tablespoons, VolumeUnit.Milliliters)).toBeCloseTo(29.5735);
    });

    test('converts tablespoons to liters', () => {
      expect(convertVolume(1, VolumeUnit.Tablespoons, VolumeUnit.Liters)).toBeCloseTo(0.0147868);
      expect(convertVolume(100, VolumeUnit.Tablespoons, VolumeUnit.Liters)).toBeCloseTo(1.47868);
    });

    test('converts teaspoons to cups', () => {
      expect(convertVolume(48, VolumeUnit.Teaspoons, VolumeUnit.Cups)).toBeCloseTo(1);
      expect(convertVolume(24, VolumeUnit.Teaspoons, VolumeUnit.Cups)).toBeCloseTo(0.5);
    });

    test('converts teaspoons to tablespoons', () => {
      expect(convertVolume(3, VolumeUnit.Teaspoons, VolumeUnit.Tablespoons)).toBeCloseTo(1);
      expect(convertVolume(6, VolumeUnit.Teaspoons, VolumeUnit.Tablespoons)).toBeCloseTo(2);
    });

    test('converts teaspoons to teaspoons', () => {
      expect(convertVolume(1, VolumeUnit.Teaspoons, VolumeUnit.Teaspoons)).toBeCloseTo(1);
      expect(convertVolume(2.5, VolumeUnit.Teaspoons, VolumeUnit.Teaspoons)).toBeCloseTo(2.5);
    });

    test('converts teaspoons to fluid ounces', () => {
      expect(convertVolume(6, VolumeUnit.Teaspoons, VolumeUnit.FluidOunces)).toBeCloseTo(1);
      expect(convertVolume(3, VolumeUnit.Teaspoons, VolumeUnit.FluidOunces)).toBeCloseTo(0.5);
    });

    test('converts teaspoons to milliliters', () => {
      expect(convertVolume(1, VolumeUnit.Teaspoons, VolumeUnit.Milliliters)).toBeCloseTo(4.92892);
      expect(convertVolume(10, VolumeUnit.Teaspoons, VolumeUnit.Milliliters)).toBeCloseTo(49.2892);
    });

    test('converts teaspoons to liters', () => {
      expect(convertVolume(1, VolumeUnit.Teaspoons, VolumeUnit.Liters)).toBeCloseTo(0.00492892);
      expect(convertVolume(300, VolumeUnit.Teaspoons, VolumeUnit.Liters)).toBeCloseTo(1.47868);
    });

    test('converts fluid ounces to cups', () => {
      expect(convertVolume(8, VolumeUnit.FluidOunces, VolumeUnit.Cups)).toBeCloseTo(1);
      expect(convertVolume(4, VolumeUnit.FluidOunces, VolumeUnit.Cups)).toBeCloseTo(0.5);
    });

    test('converts fluid ounces to tablespoons', () => {
      expect(convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Tablespoons)).toBeCloseTo(2);
      expect(convertVolume(2, VolumeUnit.FluidOunces, VolumeUnit.Tablespoons)).toBeCloseTo(4);
    });

    test('converts fluid ounces to teaspoons', () => {
      expect(convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Teaspoons)).toBeCloseTo(6);
      expect(convertVolume(0.5, VolumeUnit.FluidOunces, VolumeUnit.Teaspoons)).toBeCloseTo(3);
    });

    test('converts fluid ounces to fluid ounces', () => {
      expect(convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.FluidOunces)).toBeCloseTo(1);
      expect(convertVolume(2.5, VolumeUnit.FluidOunces, VolumeUnit.FluidOunces)).toBeCloseTo(2.5);
    });

    test('converts fluid ounces to milliliters', () => {
      expect(convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Milliliters)).toBeCloseTo(29.5735);
      expect(convertVolume(2, VolumeUnit.FluidOunces, VolumeUnit.Milliliters)).toBeCloseTo(59.147);
    });

    test('converts fluid ounces to liters', () => {
      expect(convertVolume(1, VolumeUnit.FluidOunces, VolumeUnit.Liters)).toBeCloseTo(0.0295735);
      expect(convertVolume(33.814, VolumeUnit.FluidOunces, VolumeUnit.Liters)).toBeCloseTo(1, 4);
    });

    test('converts milliliters to cups', () => {
      expect(convertVolume(236.588, VolumeUnit.Milliliters, VolumeUnit.Cups)).toBeCloseTo(1);
      expect(convertVolume(118.294, VolumeUnit.Milliliters, VolumeUnit.Cups)).toBeCloseTo(0.5);
    });

    test('converts milliliters to tablespoons', () => {
      expect(convertVolume(14.7868, VolumeUnit.Milliliters, VolumeUnit.Tablespoons)).toBeCloseTo(1);
      expect(convertVolume(29.5735, VolumeUnit.Milliliters, VolumeUnit.Tablespoons)).toBeCloseTo(2);
    });

    test('converts milliliters to teaspoons', () => {
      expect(convertVolume(4.92892, VolumeUnit.Milliliters, VolumeUnit.Teaspoons)).toBeCloseTo(1);
      expect(convertVolume(9.85784, VolumeUnit.Milliliters, VolumeUnit.Teaspoons)).toBeCloseTo(2);
    });

    test('converts milliliters to fluid ounces', () => {
      expect(convertVolume(29.5735, VolumeUnit.Milliliters, VolumeUnit.FluidOunces)).toBeCloseTo(1);
      expect(convertVolume(59.147, VolumeUnit.Milliliters, VolumeUnit.FluidOunces)).toBeCloseTo(2);
    });

    test('converts milliliters to milliliters', () => {
      expect(convertVolume(1, VolumeUnit.Milliliters, VolumeUnit.Milliliters)).toBeCloseTo(1);
      expect(convertVolume(2.5, VolumeUnit.Milliliters, VolumeUnit.Milliliters)).toBeCloseTo(2.5);
    });

    test('converts milliliters to liters', () => {
      expect(convertVolume(1000, VolumeUnit.Milliliters, VolumeUnit.Liters)).toBeCloseTo(1);
      expect(convertVolume(500, VolumeUnit.Milliliters, VolumeUnit.Liters)).toBeCloseTo(0.5);
    });

    test('converts liters to cups', () => {
      expect(convertVolume(0.236588, VolumeUnit.Liters, VolumeUnit.Cups)).toBeCloseTo(1);
      expect(convertVolume(0.473176, VolumeUnit.Liters, VolumeUnit.Cups)).toBeCloseTo(2);
    });

    test('converts liters to tablespoons', () => {
      expect(convertVolume(0.0147868, VolumeUnit.Liters, VolumeUnit.Tablespoons)).toBeCloseTo(1);
      expect(convertVolume(0.0295735, VolumeUnit.Liters, VolumeUnit.Tablespoons)).toBeCloseTo(2);
    });

    test('converts liters to teaspoons', () => {
      expect(convertVolume(0.00492892, VolumeUnit.Liters, VolumeUnit.Teaspoons)).toBeCloseTo(1);
      expect(convertVolume(0.00985784, VolumeUnit.Liters, VolumeUnit.Teaspoons)).toBeCloseTo(2);
    });

    test('converts liters to fluid ounces', () => {
      expect(convertVolume(0.0295735, VolumeUnit.Liters, VolumeUnit.FluidOunces)).toBeCloseTo(1);
      expect(convertVolume(0.059147, VolumeUnit.Liters, VolumeUnit.FluidOunces)).toBeCloseTo(2);
    });

    test('converts liters to milliliters', () => {
      expect(convertVolume(1, VolumeUnit.Liters, VolumeUnit.Milliliters)).toBeCloseTo(1000);
      expect(convertVolume(0.5, VolumeUnit.Liters, VolumeUnit.Milliliters)).toBeCloseTo(500);
    });

    test('converts liters to liters', () => {
      expect(convertVolume(1, VolumeUnit.Liters, VolumeUnit.Liters)).toBeCloseTo(1);
      expect(convertVolume(2.5, VolumeUnit.Liters, VolumeUnit.Liters)).toBeCloseTo(2.5);
    });

    test('handles zero conversions', () => {
      expect(convertVolume(0, VolumeUnit.Cups, VolumeUnit.Milliliters)).toBeCloseTo(0);
      expect(convertVolume(0, VolumeUnit.Liters, VolumeUnit.Teaspoons)).toBeCloseTo(0);
    });

    test('handles negative values', () => {
      expect(convertVolume(-1, VolumeUnit.Cups, VolumeUnit.Milliliters)).toBeCloseTo(-236.588);
      expect(convertVolume(-2, VolumeUnit.Liters, VolumeUnit.Cups)).toBeCloseTo(-8.45351);
    });

    test('handles decimal precision', () => {
      expect(convertVolume(1.23456, VolumeUnit.Cups, VolumeUnit.Milliliters)).toBeCloseTo(292.077, 1);
      expect(convertVolume(0.333333, VolumeUnit.Liters, VolumeUnit.FluidOunces)).toBeCloseTo(11.2686, 1);
    });

    test('handles very large values', () => {
      expect(convertVolume(1000, VolumeUnit.Cups, VolumeUnit.Liters)).toBeCloseTo(236.588);
      expect(convertVolume(1000000, VolumeUnit.Milliliters, VolumeUnit.Cups)).toBeCloseTo(4226.75, 1);
    });

    test('handles very small values', () => {
      expect(convertVolume(0.001, VolumeUnit.Cups, VolumeUnit.Milliliters)).toBeCloseTo(0.236588);
      expect(convertVolume(0.00001, VolumeUnit.Liters, VolumeUnit.Teaspoons)).toBeCloseTo(0.00205);
    });
  });

  describe('Invalid input handling', () => {
    test('should handle invalid unit types', () => {
      expect(() => {
        convertVolume(1, WeightUnit.Grams, VolumeUnit.Cups);
      }).toThrow();

      expect(() => {
        convertVolume(1, VolumeUnit.Cups, TemperatureUnit.Celsius);
      }).toThrow();
    });
  });

  describe('convertWeight', () => {
    it('should convert ounces to pounds', () => {
      const result = convertWeight(1, WeightUnit.Ounces, WeightUnit.Pounds);
      expect(result).toBe(0.0625);
    });

    it('should convert pounds to grams', () => {
      const result = convertWeight(1, WeightUnit.Pounds, WeightUnit.Grams);
      expect(result).toBe(453.592);
    });

    it('should convert grams to kilograms', () => {
      const result = convertWeight(1, WeightUnit.Grams, WeightUnit.Kilograms);
      expect(result).toBe(0.001);
    });
    describe('Ounces conversions', () => {
      it('should convert ounces to ounces (identity)', () => {
        const result = convertWeight(3, WeightUnit.Ounces, WeightUnit.Ounces);
        expect(result).toBe(3);
      });

      it('should convert ounces to pounds', () => {
        const result = convertWeight(16, WeightUnit.Ounces, WeightUnit.Pounds);
        expect(result).toBe(1);
      });

      it('should convert ounces to grams', () => {
        const result = convertWeight(1, WeightUnit.Ounces, WeightUnit.Grams);
        expect(result).toBeCloseTo(28.35);
      });

      it('should convert ounces to kilograms', () => {
        const result = convertWeight(35.27, WeightUnit.Ounces, WeightUnit.Kilograms);
        expect(result).toBeCloseTo(1);
      });
    });

    describe('Pounds conversions', () => {
      it('should convert pounds to ounces', () => {
        const result = convertWeight(1, WeightUnit.Pounds, WeightUnit.Ounces);
        expect(result).toBe(16);
      });

      it('should convert pounds to pounds (identity)', () => {
        const result = convertWeight(2.5, WeightUnit.Pounds, WeightUnit.Pounds);
        expect(result).toBe(2.5);
      });

      it('should convert pounds to grams', () => {
        const result = convertWeight(1, WeightUnit.Pounds, WeightUnit.Grams);
        expect(result).toBeCloseTo(453.59);
      });

      it('should convert pounds to kilograms', () => {
        const result = convertWeight(2.2046, WeightUnit.Pounds, WeightUnit.Kilograms);
        expect(result).toBeCloseTo(1);
      });
    });

    describe('Grams conversions', () => {
      it('should convert grams to ounces', () => {
        const result = convertWeight(28.35, WeightUnit.Grams, WeightUnit.Ounces);
        expect(result).toBeCloseTo(1);
      });

      it('should convert grams to pounds', () => {
        const result = convertWeight(453.59, WeightUnit.Grams, WeightUnit.Pounds);
        expect(result).toBeCloseTo(1);
      });

      it('should convert grams to grams (identity)', () => {
        const result = convertWeight(42, WeightUnit.Grams, WeightUnit.Grams);
        expect(result).toBe(42);
      });

      it('should convert grams to kilograms', () => {
        const result = convertWeight(1000, WeightUnit.Grams, WeightUnit.Kilograms);
        expect(result).toBe(1);
      });
    });

    describe('Kilograms conversions', () => {
      it('should convert kilograms to ounces', () => {
        const result = convertWeight(1, WeightUnit.Kilograms, WeightUnit.Ounces);
        expect(result).toBeCloseTo(35.27);
      });

      it('should convert kilograms to pounds', () => {
        const result = convertWeight(1, WeightUnit.Kilograms, WeightUnit.Pounds);
        expect(result).toBeCloseTo(2.2046);
      });

      it('should convert kilograms to grams', () => {
        const result = convertWeight(1, WeightUnit.Kilograms, WeightUnit.Grams);
        expect(result).toBe(1000);
      });

      it('should convert kilograms to kilograms (identity)', () => {
        const result = convertWeight(5.5, WeightUnit.Kilograms, WeightUnit.Kilograms);
        expect(result).toBe(5.5);
      });
    });

    describe('Edge cases', () => {
      it('should handle zero values', () => {
        const result = convertWeight(0, WeightUnit.Pounds, WeightUnit.Grams);
        expect(result).toBe(0);
      });

      it('should handle negative values', () => {
        const result = convertWeight(-1, WeightUnit.Kilograms, WeightUnit.Pounds);
        expect(result).toBeCloseTo(-2.2046);
      });

      it('should handle decimal values', () => {
        const result = convertWeight(0.5, WeightUnit.Pounds, WeightUnit.Ounces);
        expect(result).toBe(8);
      });

      it('should handle large values', () => {
        const result = convertWeight(1000, WeightUnit.Grams, WeightUnit.Pounds);
        expect(result).toBeCloseTo(2.2046);
      });
    });

    describe('Unit validation', () => {
      it('should throw error when fromUnit is a volume unit', () => {
        expect(() => {
          convertWeight(1, VolumeUnit.Cups as unknown as Unit, WeightUnit.Pounds);
        }).toThrow(/Invalid unit/);
      });

      it('should throw error when toUnit is a volume unit', () => {
        expect(() => {
          convertWeight(1, WeightUnit.Pounds, VolumeUnit.Cups as unknown as Unit);
        }).toThrow(/Invalid unit/);
      });

      it('should throw error when fromUnit is a temperature unit', () => {
        expect(() => {
          convertWeight(1, TemperatureUnit.Celsius as unknown as Unit, WeightUnit.Pounds);
        }).toThrow(/Invalid unit/);
      });

      it('should throw error when toUnit is a temperature unit', () => {
        expect(() => {
          convertWeight(1, WeightUnit.Pounds, TemperatureUnit.Fahrenheit as unknown as Unit);
        }).toThrow(/Invalid unit/);
      });

      it('should throw error with non-existent unit', () => {
        expect(() => {
          convertWeight(1, 'tons' as unknown as Unit, WeightUnit.Pounds);
        }).toThrow(/Invalid unit/);
      });

      it('should throw error with undefined units', () => {
        expect(() => {
          convertWeight(1, undefined as unknown as Unit, WeightUnit.Pounds);
        }).toThrow();

        expect(() => {
          convertWeight(1, WeightUnit.Pounds, undefined as unknown as Unit);
        }).toThrow();
      });

      it('should throw error with null units', () => {
        expect(() => {
          convertWeight(1, null as unknown as Unit, WeightUnit.Pounds);
        }).toThrow();

        expect(() => {
          convertWeight(1, WeightUnit.Pounds, null as unknown as Unit);
        }).toThrow();
      });
    });

    describe('All combinations test', () => {
      it('should correctly convert between all weight unit combinations', () => {
        const weightUnits = Object.values(WeightUnit);
        const testValue = 10;

        weightUnits.forEach((fromUnit) => {
          weightUnits.forEach((toUnit) => {
            const result1 = convertWeight(testValue, fromUnit, toUnit);

            const result2 = convertWeight(result1, toUnit, fromUnit);

            expect(result2).toBeCloseTo(testValue);
          });
        });
      });
    });
  });

  describe('convertTemperature', () => {
    it('should convert Fahrenheit to Celsius', () => {
      const result = convertTemperature(32, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
      expect(result).toBe(0);
    });

    it('should convert Celsius to Fahrenheit', () => {
      const result = convertTemperature(100, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
      expect(result).toBe(212);
    });

    it('should return the same temperature for the same unit', () => {
      const result = convertTemperature(1, TemperatureUnit.Fahrenheit, TemperatureUnit.Fahrenheit);
      expect(result).toBe(1);
    });
    describe('Fahrenheit conversions', () => {
      it('should convert Fahrenheit to Fahrenheit (identity)', () => {
        const result = convertTemperature(72, TemperatureUnit.Fahrenheit, TemperatureUnit.Fahrenheit);
        expect(result).toBe(72);
      });

      it('should convert Fahrenheit to Celsius', () => {
        const result = convertTemperature(32, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
        expect(result).toBe(0);
      });

      it('should convert Fahrenheit to Celsius - positive value', () => {
        const result = convertTemperature(68, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
        expect(result).toBeCloseTo(20);
      });

      it('should convert Fahrenheit to Celsius - negative result', () => {
        const result = convertTemperature(14, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
        expect(result).toBeCloseTo(-10);
      });
    });

    describe('Celsius conversions', () => {
      it('should convert Celsius to Celsius (identity)', () => {
        const result = convertTemperature(25, TemperatureUnit.Celsius, TemperatureUnit.Celsius);
        expect(result).toBe(25);
      });

      it('should convert Celsius to Fahrenheit', () => {
        const result = convertTemperature(0, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
        expect(result).toBe(32);
      });

      it('should convert Celsius to Fahrenheit - positive value', () => {
        const result = convertTemperature(20, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
        expect(result).toBeCloseTo(68);
      });

      it('should convert Celsius to Fahrenheit - negative value', () => {
        const result = convertTemperature(-10, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
        expect(result).toBeCloseTo(14);
      });
    });

    describe('Notable temperature points', () => {
      it('should correctly convert water freezing point', () => {
        const freezingFtoC = convertTemperature(32, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
        expect(freezingFtoC).toBeCloseTo(0);

        const freezingCtoF = convertTemperature(0, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
        expect(freezingCtoF).toBeCloseTo(32);
      });

      it('should correctly convert water boiling point', () => {
        const boilingFtoC = convertTemperature(212, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
        expect(boilingFtoC).toBeCloseTo(100);

        const boilingCtoF = convertTemperature(100, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
        expect(boilingCtoF).toBeCloseTo(212);
      });

      it('should correctly convert body temperature', () => {
        const bodyTempFtoC = convertTemperature(98.6, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
        expect(bodyTempFtoC).toBeCloseTo(37);

        const bodyTempCtoF = convertTemperature(37, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
        expect(bodyTempCtoF).toBeCloseTo(98.6);
      });
    });

    describe('Edge cases', () => {
      it('should handle zero Celsius', () => {
        const result = convertTemperature(0, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
        expect(result).toBe(32);
      });

      it('should handle zero Fahrenheit', () => {
        const result = convertTemperature(0, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
        expect(result).toBeCloseTo(-17.78);
      });

      it('should handle negative values', () => {
        const result = convertTemperature(-40, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
        expect(result).toBe(-40); // -40 is the same in both scales
      });

      it('should handle extreme cold', () => {
        const absoluteZeroF = convertTemperature(-273.15, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
        expect(absoluteZeroF).toBeCloseTo(-459.67);
      });

      it('should handle extreme heat', () => {
        const result = convertTemperature(1000, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
        expect(result).toBeCloseTo(537.78);
      });

      it('should handle decimal precision', () => {
        const result = convertTemperature(98.6, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
        expect(result).toBeCloseTo(37, 1);
      });
    });

    describe('Round-trip conversions', () => {
      it('should correctly round-trip between scales', () => {
        const testValues = [-50, -20, 0, 25, 37, 100, 200];

        testValues.forEach((value) => {
          const toFahrenheit = convertTemperature(value, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit);
          const backToCelsius = convertTemperature(toFahrenheit, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius);
          expect(backToCelsius).toBeCloseTo(value);
        });
      });
    });

    describe('Unit validation', () => {
      it('should throw error when fromUnit is a volume unit', () => {
        expect(() => {
          convertTemperature(1, VolumeUnit.Cups as unknown as Unit, TemperatureUnit.Celsius);
        }).toThrow();
      });

      it('should throw error when toUnit is a volume unit', () => {
        expect(() => {
          convertTemperature(1, TemperatureUnit.Celsius, VolumeUnit.Cups as unknown as Unit);
        }).toThrow();
      });

      it('should throw error when fromUnit is a weight unit', () => {
        expect(() => {
          convertTemperature(1, WeightUnit.Pounds as unknown as Unit, TemperatureUnit.Celsius);
        }).toThrow();
      });

      it('should throw error when toUnit is a weight unit', () => {
        expect(() => {
          convertTemperature(1, TemperatureUnit.Celsius, WeightUnit.Pounds as unknown as Unit);
        }).toThrow();
      });

      it('should throw error with non-existent unit', () => {
        expect(() => {
          convertTemperature(1, 'kelvin' as unknown as Unit, TemperatureUnit.Celsius);
        }).toThrow();
      });

      it('should throw error with undefined units', () => {
        expect(() => {
          convertTemperature(1, undefined as unknown as Unit, TemperatureUnit.Celsius);
        }).toThrow();

        expect(() => {
          convertTemperature(1, TemperatureUnit.Celsius, undefined as unknown as Unit);
        }).toThrow();
      });

      it('should throw error with null units', () => {
        expect(() => {
          convertTemperature(1, null as unknown as Unit, TemperatureUnit.Celsius);
        }).toThrow();

        expect(() => {
          convertTemperature(1, TemperatureUnit.Celsius, null as unknown as Unit);
        }).toThrow();
      });
    });
  });
});
