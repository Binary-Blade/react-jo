import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProfileSchema, profileSchema } from '@/config/zod-schemas/profileSchema';
import { FC, useEffect } from 'react';
import { User } from '@/config/types/UserTypes';

interface CardProfileProps {
  selectedUser: User;
  handleUpdate: (data: ProfileSchema) => void;
}

export const CardProfile: FC<CardProfileProps> = ({ selectedUser, handleUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: ''
    }
  });

  useEffect(() => {
    if (selectedUser) {
      setValue('firstName', selectedUser.firstName);
      setValue('lastName', selectedUser.lastName);
      setValue('email', selectedUser.email);
      // You might not want to reset the password fields to avoid security issues
    }
  }, [selectedUser, setValue]);

  const onSubmit = (data: ProfileSchema) => {
    handleUpdate(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Update your profile information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" {...register('firstName')} />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" {...register('lastName')} />
            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="pt-4 space-x-4">
            <Button type="submit">Save Changes</Button>
            <Button variant="outline" onClick={() => reset()}>
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
