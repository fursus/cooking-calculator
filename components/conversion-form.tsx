import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { convert } from "@/lib/conversion-form-helper";
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
import { ConversionType, Unit } from "@/lib/constants";

const UnitDropdownOptions = ({ units }: { units: ReadonlyArray<Unit> }) => {
  return (
    <>
      {units.map((unit) => (
        <SelectItem key={unit} value={unit}>
          {unit}
        </SelectItem>
      ))}
    </>
  );
};

interface ConversionFormProps {
  type: ConversionType;
  units: ReadonlyArray<Unit>;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export const ConversionForm = ({
  type,
  units,
  input,
  setInput,
}: ConversionFormProps) => {
  const [fromUnit, setFromUnit] = useState(units[0]);
  const [toUnit, setToUnit] = useState(units[1]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);
  const handleFromUnitChange = (value: string) => setFromUnit(value as Unit);
  const handleToUnitChange = (value: string) => setToUnit(value as Unit);

  const result = convert(type, input, fromUnit, toUnit);
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
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`${type}-from`}>From</Label>
          <Select value={fromUnit} onValueChange={handleFromUnitChange}>
            <SelectTrigger id={`${type}-from`}>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              <UnitDropdownOptions units={units} />
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${type}-to`}>To</Label>
          <Select value={toUnit} onValueChange={handleToUnitChange}>
            <SelectTrigger id={`${type}-to`}>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              <UnitDropdownOptions units={units} />
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
