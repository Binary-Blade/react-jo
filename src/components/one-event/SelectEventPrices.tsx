import { FC } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';

type SelectEventPricesProps = {
  selectedTicketType: string;
  handleTicketTypeChange: (value: PriceFormula) => void;
};

export const SelectEventPrices: FC<SelectEventPricesProps> = ({
  selectedTicketType,
  handleTicketTypeChange
}) => {
  return (
    <div className="flex gap-2">
      <RadioGroup
        defaultValue={selectedTicketType}
        onValueChange={handleTicketTypeChange}
        name="ticketType"
        className="flex items-center gap-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={PriceFormula.SOLO} id="r1" />
          <Label htmlFor="r1">Solo</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={PriceFormula.DUO} id="r2" />
          <Label htmlFor="r2">Duo</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={PriceFormula.FAMILY} id="r3" />
          <Label htmlFor="r3">Family</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
