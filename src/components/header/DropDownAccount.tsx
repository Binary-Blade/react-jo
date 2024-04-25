import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { useAuthStore } from "@/stores/useAuthStore";
import { useLocation } from "wouter";

export const DropDownAccount = () => {
    const logout = useAuthStore((state) => state.logout);
    const [, navigate] = useLocation();

    const handleLogout = async () => {
        try {
            await logout();
            console.log('Logout successful');
            navigate('/');
        } catch (error: any) {
            const errorMessage = error.message || "Logout failed due to an unexpected error";
            console.error('Logout failed:', errorMessage);
            alert(errorMessage);
        }
    };

    const handleSettings = () => {
        navigate('/profile')
    }

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
                <DropdownMenuItem onClick={handleSettings}>My Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

