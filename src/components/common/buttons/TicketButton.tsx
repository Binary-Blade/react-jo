import { Button } from "@/components/ui/button";
import React from "react";

interface BuyTicketButtonProps {
    onClick: () => void;
    className?: string;
    isLoading: boolean;
    variant: any;
    text: string;
}

export const TicketButton: React.FC<BuyTicketButtonProps> = ({ onClick, isLoading, variant, text, className }) => {
    return (
        <Button
            className={className}
            variant={variant}
            onClick={onClick}
            disabled={isLoading}  // Disable button during loading if applicable
        >
            {isLoading ? 'Processing...' : `${text}`}
        </Button>
    );
};
