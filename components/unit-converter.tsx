"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  conversionTypes,
  temperatureUnits,
  volumeUnits,
  weightUnits,
} from "@/lib/constants";
import {
  convertVolume,
  convertWeight,
  convertTemperature,
} from "@/lib/unit-converter-helper";

export default function UnitConverter() {
  const [conversionType, setConversionType] = useState<string>("Volume");
  const [input, setInput] = useState<number>(1);
  const [fromUnit, setFromUnit] = useState<string>("cups");
  const [toUnit, setToUnit] = useState<string>("tablespoons");

  const getUnits = () => {
    switch (conversionType) {
      case "Volume":
        return volumeUnits;
      case "Weight":
        return weightUnits;
      case "Temperature":
        return temperatureUnits;
      default:
        return [];
    }
  };

  const convert = () => {
    switch (conversionType) {
      case "Volume":
        return convertVolume(input, fromUnit, toUnit);
      case "Weight":
        return convertWeight(input, fromUnit, toUnit);
      case "Temperature":
        return convertTemperature(input, fromUnit, toUnit);
      default:
        return 0;
    }
  };

  const result = convert();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Cooking Unit Converter</CardTitle>
        <CardDescription>
          Convert between common cooking and baking units
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="conversion-type">Conversion Type</Label>
            <Select
              value={conversionType}
              onValueChange={(value: string) => {
                setConversionType(value);
                const units =
                  value === "Volume"
                    ? volumeUnits
                    : value === "Weight"
                    ? weightUnits
                    : temperatureUnits;
                setFromUnit(units[0]);
                setToUnit(units[1]);
              }}
            >
              <SelectTrigger id="conversion-type">
                <SelectValue placeholder="Select conversion type" />
              </SelectTrigger>
              <SelectContent>
                {conversionTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-value">Value</Label>
            <Input
              id="input-value"
              type="number"
              value={input}
              onChange={(e) => setInput(Number.parseFloat(e.target.value) || 0)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from-unit">From</Label>
              <Select value={fromUnit} onValueChange={setFromUnit}>
                <SelectTrigger id="from-unit">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  {getUnits().map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="to-unit">To</Label>
              <Select value={toUnit} onValueChange={setToUnit}>
                <SelectTrigger id="to-unit">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  {getUnits().map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="result">Result</Label>
            <Input
              id="result"
              type="number"
              value={result.toFixed(2)}
              readOnly
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
