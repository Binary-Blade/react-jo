import { FormEvent, useState } from 'react';
import { z } from 'zod';
import { FormErrors, eventSchema } from '@/config/zod-schemas/eventSchema';
import { useEventStore } from '@/stores/useEventStore';
import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';
import { useToast } from '@/components/ui/use-toast';

export const useEventForm = (initialData: any, onSuccess: () => void) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const { addEvent } = useEventStore(state => state);
  const { toast } = useToast();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: CategoryEvent) => {
    setFormData((prev: any) => ({ ...prev, categoryType: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = eventSchema.parse({
        ...formData,
        basePrice: Number(formData.basePrice),
        quantityAvailable: Number(formData.quantityAvailable)
      });
      await addEvent(validatedData);
      toast({
        variant: 'success',
        title: 'Evénement ajouté avec succès'
      });
      setErrors({});
      onSuccess();
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors);
      }
    }
  };

  return { formData, handleChange, handleCategoryChange, handleSubmit, errors };
};
