import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const CardProfile = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Update your profile information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="profile-picture">Profile Picture</Label>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <Button variant="outline">Change</Button>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">First Name</Label>
          <Input defaultValue="Jared" id="firstName" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Last Name</Label>
          <Input defaultValue="Palmer" id="lastName" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input defaultValue="jared@example.com" id="email" type="email" />
        </div>
      </CardContent>
      <CardFooter className="gap-4">
        <Button>Save Changes</Button>
        <Button variant="outline">Reset Password</Button>
      </CardFooter>
    </Card>
  );
};
