import { Button } from "@/components/ui/button";
import React from "react";

interface BuyTicketButtonProps {
    onClick: () => void;
    isLoading: boolean;  // Optional prop if you want to handle loading state
}

export const BuyTicketButton: React.FC<BuyTicketButtonProps> = ({ onClick, isLoading }) => {
    return (
        <Button
            className="w-full"
            variant="default"
            onClick={onClick}
            disabled={isLoading}  // Disable button during loading if applicable
        >
            {isLoading ? 'Processing...' : 'Add Ticket'}
        </Button>
    );
};
