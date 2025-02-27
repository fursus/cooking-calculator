import { temperatureUnits, volumeUnits, weightUnits } from "@/lib/constants";
import { useState } from "react";
import { ConversionType, ConversionState } from "../unit-converter";
import {
  convertWeight,
  convertVolume,
  convertTemperature,
} from "@/lib/unit-converter-helper";
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
  const [states, setStates] = useState<Record<ConversionType, ConversionState>>(
    {
      volume: { input: 1, fromUnit: "cups", toUnit: "tablespoons" },
      weight: { input: 1, fromUnit: "ounces", toUnit: "grams" },
      temperature: { input: 32, fromUnit: "Fahrenheit", toUnit: "Celsius" },
    }
  );

  const getUnits = (type: ConversionType) => {
    switch (type) {
      case "volume":
        return volumeUnits;
      case "weight":
        return weightUnits;
      case "temperature":
        return temperatureUnits;
    }
  };

  const convert = (type: ConversionType) => {
    const { input, fromUnit, toUnit } = states[type];

    if (isNaN(input)) {
      return "";
    }

    switch (type) {
      case "volume":
        return convertVolume(input, fromUnit, toUnit);
      case "weight":
        return convertWeight(input, fromUnit, toUnit);
      case "temperature":
        return convertTemperature(input, fromUnit, toUnit);
      default:
        return "";
    }
  };

  const updateState = (
    type: ConversionType,
    updates: Partial<ConversionState>
  ) => {
    setStates((prev) => ({
      ...prev,
      [type]: { ...prev[type], ...updates },
    }));
  };

  const state = states[type];
  const units = getUnits(type);
  const result = convert(type);
  const formattedResult =
    typeof result === "number" ? formatNumber(result) : result;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${type}-input`}>Value</Label>
        <Input
          id={`${type}-input`}
          type="number"
          value={state.input}
          onChange={(e) => updateState(type, { input: Number(e.target.value) })}
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
