import { useState } from "react";
import {
  ConversionState,
  getUnits,
  convert,
} from "@/lib/conversion-form-helper";
import { formatNumber } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ConversionType,
  VolumeUnit,
  WeightUnit,
  TemperatureUnit,
} from "@/lib/constants";
import { useConversionType } from "@/contexts/ConversionTypeContext";

export const ConversionForm = () => {
  const context = useConversionType();

  if (!context) {
    throw new Error(
      "ConversionForm must be used within a ConversionTypeProvider"
    );
  }

  const { conversionType } = context;

  // Separate states for each conversion type
  const [volumeState, setVolumeState] = useState<ConversionState>({
    input: "",
    fromUnit: VolumeUnit.Cups,
    toUnit: VolumeUnit.Tablespoons,
  });

  const [weightState, setWeightState] = useState<ConversionState>({
    input: "",
    fromUnit: WeightUnit.Ounces,
    toUnit: WeightUnit.Grams,
  });

  const [temperatureState, setTemperatureState] = useState<ConversionState>({
    input: "",
    fromUnit: TemperatureUnit.Fahrenheit,
    toUnit: TemperatureUnit.Celsius,
  });

  const updateState = (
    type: ConversionType,
    updates: Partial<ConversionState>
  ) => {
    if (type === ConversionType.Volume) {
      setVolumeState((prev) => ({ ...prev, ...updates }));
    } else if (type === ConversionType.Weight) {
      setWeightState((prev) => ({ ...prev, ...updates }));
    } else if (type === ConversionType.Temperature) {
      setTemperatureState((prev) => ({ ...prev, ...updates }));
    }
  };

  // Determine the current state based on the conversion type
  const state =
    conversionType === ConversionType.Volume
      ? volumeState
      : conversionType === ConversionType.Weight
      ? weightState
      : temperatureState;

  const units = getUnits(conversionType);
  const result = convert(
    conversionType,
    state.input,
    state.fromUnit,
    state.toUnit
  );
  const formattedResult =
    typeof result === "number" ? formatNumber(result) : result;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${conversionType}-input`}>Value</Label>
        <Input
          autoFocus
          id={`${conversionType}-input`}
          type="number"
          value={state.input}
          onChange={(e) =>
            updateState(conversionType, { input: e.target.value })
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`${conversionType}-from`}>From</Label>
          <Select
            value={state.fromUnit}
            onValueChange={(value) =>
              updateState(conversionType, {
                fromUnit: value as VolumeUnit | WeightUnit | TemperatureUnit,
              })
            }
          >
            <SelectTrigger id={`${conversionType}-from`}>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {units.map((unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${conversionType}-to`}>To</Label>
          <Select
            value={state.toUnit}
            onValueChange={(value) =>
              updateState(conversionType, {
                toUnit: value as VolumeUnit | WeightUnit | TemperatureUnit,
              })
            }
          >
            <SelectTrigger id={`${conversionType}-to`}>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {units.map((unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${conversionType}-result`}>Result</Label>
        <Input
          id={`${conversionType}-result`}
          type="text"
          value={formattedResult}
          readOnly
        />
      </div>
    </div>
  );
};
