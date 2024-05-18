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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import {
  ChangePasswordSchema,
  changePasswordSchema
} from '@/config/zod-schemas/changePasswordSchema';

interface CardChangePasswordProps {
  handleChangePassword: (data: ChangePasswordSchema) => Promise<void>;
}

export const CardChangePassword: FC<CardChangePasswordProps> = ({ handleChangePassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema)
  });

  const onSubmit = (data: ChangePasswordSchema) => {
    handleChangePassword(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>Update your account password.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="oldPassword">Old Password</Label>
            <Input id="oldPassword" type="password" {...register('oldPassword')} />
            {errors.oldPassword && (
              <span className="text-red-500">{errors.oldPassword.message}</span>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" {...register('newPassword')} />
            {errors.newPassword && (
              <span className="text-red-500">{errors.newPassword.message}</span>
            )}
          </div>
          <CardFooter className="gap-4">
            <Button type="submit">Change Password</Button>
            <Button variant="outline" onClick={() => reset()}>
              Reset
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};
