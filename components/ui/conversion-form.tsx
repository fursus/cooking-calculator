import { useState } from "react";
import {
  ConversionType,
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

export const ConversionForm = ({ type }: { type: ConversionType }) => {
  // Separate states for each conversion type
  const [volumeState, setVolumeState] = useState<ConversionState>({
    input: "",
    fromUnit: "cups",
    toUnit: "tablespoons",
  });

  const [weightState, setWeightState] = useState<ConversionState>({
    input: "",
    fromUnit: "ounces",
    toUnit: "grams",
  });

  const [temperatureState, setTemperatureState] = useState<ConversionState>({
    input: "",
    fromUnit: "Fahrenheit",
    toUnit: "Celsius",
  });

  const updateState = (
    type: ConversionType,
    updates: Partial<ConversionState>
  ) => {
    if (type === "volume") {
      setVolumeState((prev) => ({ ...prev, ...updates }));
    } else if (type === "weight") {
      setWeightState((prev) => ({ ...prev, ...updates }));
    } else if (type === "temperature") {
      setTemperatureState((prev) => ({ ...prev, ...updates }));
    }
  };

  // Determine the current state based on the conversion type
  const state =
    type === "volume"
      ? volumeState
      : type === "weight"
      ? weightState
      : temperatureState;

  const units = getUnits(type);
  const result = convert(type, state.input, state.fromUnit, state.toUnit);
  const formattedResult =
    typeof result === "number" ? formatNumber(result) : result;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${type}-input`}>Value</Label>
        <Input
          autoFocus
          id={`${type}-input`}
          type="number"
          value={state.input}
          onChange={(e) => updateState(type, { input: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`${type}-from`}>From</Label>
          <Select
            value={state.fromUnit}
            onValueChange={(value) => updateState(type, { fromUnit: value })}
          >
            <SelectTrigger id={`${type}-from`}>
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
          <Label htmlFor={`${type}-to`}>To</Label>
          <Select
            value={state.toUnit}
            onValueChange={(value) => updateState(type, { toUnit: value })}
          >
            <SelectTrigger id={`${type}-to`}>
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
        <Label htmlFor={`${type}-result`}>Result</Label>
        <Input
          id={`${type}-result`}
          type="text"
          value={formattedResult}
          readOnly
        />
      </div>
    </div>
  );
};
