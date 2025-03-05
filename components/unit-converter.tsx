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
import { ConversionType } from "@/lib/constants";
import { useConversionType } from "@/contexts/ConversionTypeContext";

export default function UnitConverter() {
  const context = useConversionType();

  if (!context) {
    throw new Error(
      "UnitConverter must be used within a ConversionTypeProvider"
    );
  }

  const { conversionType, handleConversionTypeChange } = context;

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Cooking Unit Converter</CardTitle>
        <CardDescription>
          Convert between common cooking and baking units
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          value={conversionType}
          onValueChange={(value) =>
            handleConversionTypeChange(value as ConversionType)
          }
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value={ConversionType.Volume}>Volume</TabsTrigger>
            <TabsTrigger value={ConversionType.Weight}>Weight</TabsTrigger>
            <TabsTrigger value={ConversionType.Temperature}>
              Temperature
            </TabsTrigger>
          </TabsList>
          <TabsContent value={ConversionType.Volume}>
            <ConversionForm />
          </TabsContent>
          <TabsContent value={ConversionType.Weight}>
            <ConversionForm />
          </TabsContent>
          <TabsContent value={ConversionType.Temperature}>
            <ConversionForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
