import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue
} from '@/components/ui/select';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { useCallback } from 'react';

interface SelectTypesProps {
  selectedType: PriceFormula;
  onChange: (type: PriceFormula, quantity: number) => void;
}

/**
 * `SelectEventTypes` component provides a dropdown for selecting event types.
 * It updates the quantity based on the selected event type.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {PriceFormula} props.selectedType - The currently selected event type.
 * @param {Function} props.onChange - The function to handle changes to the selected event type and quantity.
 * @returns {JSX.Element} The rendered SelectEventTypes component.
 *
 * @example
 * return <SelectEventTypes selectedType={PriceFormula.SOLO} onChange={(type, quantity) => console.log(type, quantity)} />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `Select`, `SelectTrigger`, `SelectItem`, `SelectContent`, `SelectValue` for the dropdown functionality.
 * - `PriceFormula` enum for the event types.
 */
export const SelectEventTypes = ({ selectedType, onChange }: SelectTypesProps): JSX.Element => {
  const ticketQuantities = {
    [PriceFormula.SOLO]: 1,
    [PriceFormula.DUO]: 2,
    [PriceFormula.FAMILY]: 4
  };

  /**
   * Handle change event for the select dropdown.
   * Updates the selected event type and corresponding quantity.
   *
   * @param {string} newValue - The new selected event type.
   */
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
        {/* Render event type options */}
        {Object.values(PriceFormula).map(type => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
