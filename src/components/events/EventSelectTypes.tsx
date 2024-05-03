import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "@/components/ui/select";
import { TicketType } from "@/enums/TicketType.enum";
import React, { useCallback } from "react";

interface SelectTypesProps {
    selectedType: TicketType;
    onChange: (type: TicketType, quantity: number) => void;
}

export const EventSelectTypes: React.FC<SelectTypesProps> = ({ selectedType, onChange }) => {

    const ticketQuantities = {
        [TicketType.SOLO]: 1,
        [TicketType.DUO]: 2,
        [TicketType.FAMILY]: 4
    };

    const handleSelectChange = useCallback((newValue: string) => {
        const newType = newValue as TicketType;
        onChange(newType, ticketQuantities[newType]);
    }, [onChange]);

    return (
        <Select value={selectedType} onValueChange={handleSelectChange}>
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {Object.values(TicketType).map(type => (
                    <SelectItem
                        key={type}
                        value={type}>
                        {type}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
