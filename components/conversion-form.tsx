import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { applyMultiplier, formatNumber } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ConversionType, Unit } from '@/lib/constants';
import { Button } from '@/components/ui/button';

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
  convert: (input: number, from: Unit, to: Unit) => number;
  conversionTable: React.ReactNode;
}

const MULTIPLIERS = [2, 3, 4, 5];
const FRACTIONAL_MULTIPLIERS = [5, 4, 3, 2];

export const ConversionForm = ({ type, units, input, setInput, convert, conversionTable }: ConversionFormProps) => {
  const [fromUnit, setFromUnit] = useState(units[0]);
  const [toUnit, setToUnit] = useState(units[1]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value);
  const handleFromUnitChange = (value: string) => setFromUnit(value as Unit);
  const handleToUnitChange = (value: string) => setToUnit(value as Unit);

  const numericInput = Number(input);
  const result = input !== '' && !isNaN(numericInput) ? convert(numericInput, fromUnit, toUnit) : '';
  const formattedResult = typeof result === 'number' ? formatNumber(result) : result;

  const getHandleMultiplier = (multiplier: number) => () => {
    if (input != '') {
      const multipliedInput = applyMultiplier(input, multiplier);
      setInput(multipliedInput.toString());
    }
  };

  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`${type}-input`}>Value</Label>
          <div className="flex items-center space-x-1">
            {FRACTIONAL_MULTIPLIERS.map((multiplier) => (
              <Button
                variant="secondary"
                key={`multiplier-1/${multiplier}`}
                size="sm"
                onClick={getHandleMultiplier(1 / multiplier)}
              >
                1/{multiplier}
              </Button>
            ))}
            <Input autoFocus id={`${type}-input`} type="number" value={input} onChange={handleInputChange} />
            {MULTIPLIERS.map((multiplier) => (
              <Button
                variant="secondary"
                key={`multiplier-${multiplier}`}
                onClick={getHandleMultiplier(multiplier)}
                size="sm"
              >
                x{multiplier}
              </Button>
            ))}
          </div>
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
          <Input id={`${type}-result`} type="text" value={formattedResult} readOnly />
        </div>
      </div>
      {conversionTable}
    </>
  );
};
