import { useToast } from '@/components/ui/use-toast';
import { ContactFormData, contactFormSchema } from '@/config/zod-schemas/contactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

/**
 * Custom hook `useContactForm` is responsible for handling the contact form submission.
 * It uses `react-hook-form` for form management and validation, and `useToast` for displaying
 * notifications upon form submission.
 *
 *
 * @example
 * const { register, handleSubmit, onSubmit, errors } = useContactForm();
 *
 * @remarks
 * The hook uses `zod` schema for form validation, `react-hook-form` for form management,
 * and `useToast` for displaying success messages.
 */
export const useContactForm = () => {
  // Initialize the form with `react-hook-form` using zod schema for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  // Initialize toast for notifications
  const { toast } = useToast();

  /**
   * Handles the form submission.
   *
   * @param {ContactFormData} data - The contact form data.
   */
  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    toast({
      variant: 'success',
      title: 'Message envoyé',
      description:
        'Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.'
    });
    reset();
  };

  return { register, handleSubmit, onSubmit, errors };
};
