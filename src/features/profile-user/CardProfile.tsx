import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProfileSchema, profileSchema } from '@/config/zod-schemas/profileSchema';
import { useEffect } from 'react';
import { User } from '@/config/interfaces/user/user-type.interface';
import { useToast } from '@/components/ui/use-toast';
import { useUserStore } from '@/stores/useUserStore';

interface CardProfileProps {
  selectedUser: User;
  userId: number | null;
}

/**
 * `CardProfile` is a component that displays and allows updating the user's profile information.
 *
 * @component
 * @param {CardProfileProps} props - The properties object.
 * @param {User} props.selectedUser - The selected user's data.
 * @param {number | null} props.userId - The ID of the user.
 * @returns {JSX.Element} The rendered card profile component.
 *
 * @example
 * return <CardProfile selectedUser={user} userId={1} />;
 *
 * @remarks
 * This component uses `useForm` for form handling and `zodResolver` for form validation.
 * It fetches and sets the user data when the component mounts or when the selected user changes.
 * The form submission updates the user's profile information and displays a toast notification.
 */
export const CardProfile = ({ selectedUser, userId }: CardProfileProps): JSX.Element => {
  const { updateUser } = useUserStore();
  const { toast } = useToast();
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

  /**
   * Set form values based on the selected user when the component mounts or when the selected user changes.
   */
  useEffect(() => {
    if (selectedUser) {
      setValue('firstName', selectedUser.firstName);
      setValue('lastName', selectedUser.lastName);
      setValue('email', selectedUser.email);
      // You might not want to reset the password fields to avoid security issues
    }
  }, [selectedUser, setValue]);

  /**
   * Handle updating the user profile.
   *
   * @param {ProfileSchema} data - The form data.
   */
  const handleUpdate = async (data: ProfileSchema) => {
    if (!userId) return;
    const response = await updateUser(userId, data);
    if (response.success) {
      toast({
        variant: 'success',
        title: 'Profil mis à jour',
        description: `${response.message}`
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Oh non ! Une erreur est survenue.',
        description: `${response.message}`
      });
    }
  };

  /**
   * Handle form submission to update the profile.
   *
   * @param {ProfileSchema} data - The form data.
   */
  const onSubmit = (data: ProfileSchema) => {
    handleUpdate(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profil</CardTitle>
        <CardDescription>Mettre à jour les informations de votre profil.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First Name Field */}
          <div className="grid gap-2">
            <Label htmlFor="firstName">Prénom</Label>
            <Input id="firstName" {...register('firstName')} />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
          </div>
          {/* Last Name Field */}
          <div className="grid gap-2">
            <Label htmlFor="lastName">Nom</Label>
            <Input id="lastName" {...register('lastName')} />
            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
          </div>
          {/* Email Field */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          {/* Form Actions */}
          <div className="pt-4 space-x-4">
            <Button type="submit">Enregistrer les modifications</Button>
            <Button variant="outline" onClick={() => reset()}>
              Réinitialiser
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
