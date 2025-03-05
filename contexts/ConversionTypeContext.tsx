"use client";

import { ConversionType } from "@/lib/constants";
import { createContext, useContext, useState } from "react";

export const ConversionTypeContext =
  createContext<ConversionTypeContextType | null>(null);

interface ConversionTypeContextType {
  conversionType: ConversionType;
  handleConversionTypeChange: (type: ConversionType) => void;
}

export const useConversionType = () => {
  return useContext(ConversionTypeContext);
};

export const ConversionTypeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [conversionType, setConversionType] = useState<ConversionType>(
    ConversionType.Volume
  );

  const handleConversionTypeChange = (type: ConversionType) => {
    setConversionType(type);
  };

  return (
    <ConversionTypeContext.Provider
      value={{ conversionType, handleConversionTypeChange }}
    >
      {children}
    </ConversionTypeContext.Provider>
  );
};
