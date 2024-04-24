import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { FC } from "react";

interface DropDownAccountProps {
    handleLogout: () => any;
}
export const DropDownAccount: FC<DropDownAccountProps> = ({ handleLogout }) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9">
                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                    <span className="sr-only">Toggle user menu</span>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

