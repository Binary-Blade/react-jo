import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue
} from '@/components/ui/select';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import React, { useCallback } from 'react';

interface SelectTypesProps {
  selectedType: PriceFormula;
  onChange: (type: PriceFormula, quantity: number) => void;
}

export const SelectEventTypes: React.FC<SelectTypesProps> = ({ selectedType, onChange }) => {
  const ticketQuantities = {
    [PriceFormula.SOLO]: 1,
    [PriceFormula.DUO]: 2,
    [PriceFormula.FAMILY]: 4
  };

  const handleSelectChange = useCallback(
    (newValue: string) => {
      const newType = newValue as PriceFormula;
      onChange(newType, ticketQuantities[newType]);
    },
    [onChange]
  );

  return (
    <Select value={selectedType} onValueChange={handleSelectChange}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.values(PriceFormula).map(type => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
