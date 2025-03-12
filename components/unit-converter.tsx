"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConversionForm } from "@/components/conversion-form";
import {
  ConversionType,
  TemperatureUnit,
  VolumeUnit,
  WeightUnit,
} from "@/lib/constants";
import { useState } from "react";
import {
  convertTemperature,
  convertVolume,
  convertWeight,
} from "@/lib/conversion-form-helper";

const volumeUnits = Object.values(VolumeUnit);
const weightUnits = Object.values(WeightUnit);
const temperatureUnits = Object.values(TemperatureUnit);

export default function UnitConverter() {
  const [input, setInput] = useState("");

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Cooking Unit Converter</CardTitle>
        <CardDescription>
          Convert between common cooking and baking units
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={ConversionType.Volume} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value={ConversionType.Volume}>Volume</TabsTrigger>
            <TabsTrigger value={ConversionType.Weight}>Weight</TabsTrigger>
            <TabsTrigger value={ConversionType.Temperature}>
              Temperature
            </TabsTrigger>
          </TabsList>
          <TabsContent value={ConversionType.Volume}>
            <ConversionForm
              type={ConversionType.Volume}
              units={volumeUnits}
              input={input}
              setInput={setInput}
              convert={convertVolume}
            />
          </TabsContent>
          <TabsContent value={ConversionType.Weight}>
            <ConversionForm
              type={ConversionType.Weight}
              units={weightUnits}
              input={input}
              setInput={setInput}
              convert={convertWeight}
            />
          </TabsContent>
          <TabsContent value={ConversionType.Temperature}>
            <ConversionForm
              type={ConversionType.Temperature}
              units={temperatureUnits}
              input={input}
              setInput={setInput}
              convert={convertTemperature}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
