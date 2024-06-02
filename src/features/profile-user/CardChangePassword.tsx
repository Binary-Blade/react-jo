import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
  ChangePasswordSchema,
  changePasswordSchema
} from '@/config/zod-schemas/changePasswordSchema';
import { EyeOffIcon } from '@/components/ui/IconComponents';
import { EyeIcon } from 'lucide-react';
import { navigate } from 'wouter/use-browser-location';
import { useToast } from '@/components/ui/use-toast';
import { useAuthStore } from '@/stores/useAuthStore';

/**
 * `CardChangePassword` is a component that allows users to change their account password.
 *
 * @component
 * @returns {JSX.Element} The rendered card change password component.
 *
 * @example
 * return <CardChangePassword />;
 *
 * @remarks
 * This component uses `useForm` for form handling and `zodResolver` for form validation.
 * It provides inputs for the old and new passwords, and updates the password upon form submission.
 * A toast notification is displayed upon success or failure, and the user is logged out after a successful password change.
 */
export const CardChangePassword = (): JSX.Element => {
  const { logout, changePassword } = useAuthStore();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema)
  });

  /**
   * Handle changing the password.
   *
   * @param {ChangePasswordSchema} data - The form data.
   */
  const handleChangePassword = async (data: ChangePasswordSchema) => {
    const response = await changePassword(data);
    if (response.success) {
      toast({
        variant: 'success',
        title: 'Votre mot de passe a été mis à jour',
        description: `${response.message}`
      });
      setTimeout(() => {
        logout();
        navigate('/auth');
      }, 2000);
    } else {
      toast({
        variant: 'destructive',
        title: 'Oh non ! Une erreur est survenue.',
        description: `${response.error}`
      });
    }
  };

  /**
   * Handle form submission to change the password.
   *
   * @param {ChangePasswordSchema} data - The form data.
   */
  const onSubmit = (data: ChangePasswordSchema) => {
    handleChangePassword(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Changer le mot de passe</CardTitle>
        <CardDescription>Mettre à jour le mot de passe de votre compte.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Old Password Field */}
          <div className="grid gap-2">
            <Label htmlFor="oldPassword">Ancien mot de passe</Label>
            <div className="relative">
              <Input
                id="oldPassword"
                type={showOldPassword ? 'text' : 'password'}
                {...register('oldPassword')}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.oldPassword && (
              <span className="text-red-500">{errors.oldPassword.message}</span>
            )}
          </div>
          {/* New Password Field */}
          <div className="grid gap-2">
            <Label htmlFor="newPassword">Nouveau mot de passe</Label>
            <div className="relative">
              <Input
                id="newPassword"
                type={showNewPassword ? 'text' : 'password'}
                {...register('newPassword')}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.newPassword && (
              <span className="text-red-500">{errors.newPassword.message}</span>
            )}
          </div>
          {/* Form Actions */}
          <div className="pt-4 space-x-4">
            <Button type="submit">Changer le mot de passe</Button>
            <Button variant="outline" onClick={() => reset()}>
              Réinitialiser
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
