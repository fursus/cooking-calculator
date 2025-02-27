"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConversionForm } from "./ui/conversion-form";

export type ConversionType = "volume" | "weight" | "temperature";

export interface ConversionState {
  input: number;
  fromUnit: string;
  toUnit: string;
}

export default function UnitConverter() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Cooking Unit Converter</CardTitle>
        <CardDescription>
          Convert between common cooking and baking units
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="volume" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="volume">Volume</TabsTrigger>
            <TabsTrigger value="weight">Weight</TabsTrigger>
            <TabsTrigger value="temperature">Temp</TabsTrigger>
          </TabsList>
          <TabsContent value="volume">
            <ConversionForm type="volume" />
          </TabsContent>
          <TabsContent value="weight">
            <ConversionForm type="weight" />
          </TabsContent>
          <TabsContent value="temperature">
            <ConversionForm type="temperature" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
