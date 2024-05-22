import { useToast } from '@/components/ui/use-toast';
import { ContactFormData, contactFormSchema } from '@/config/zod-schemas/contactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });
  const { toast } = useToast();

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
