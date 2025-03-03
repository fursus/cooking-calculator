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
        <Tabs defaultValue={ConversionType.Volume} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value={ConversionType.Volume}>Volume</TabsTrigger>
            <TabsTrigger value={ConversionType.Weight}>Weight</TabsTrigger>
            <TabsTrigger value={ConversionType.Temperature}>
              Temperature
            </TabsTrigger>
          </TabsList>
          <TabsContent value={ConversionType.Volume}>
            <ConversionForm type={ConversionType.Volume} />
          </TabsContent>
          <TabsContent value={ConversionType.Weight}>
            <ConversionForm type={ConversionType.Weight} />
          </TabsContent>
          <TabsContent value={ConversionType.Temperature}>
            <ConversionForm type={ConversionType.Temperature} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
