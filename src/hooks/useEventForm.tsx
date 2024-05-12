import { FormEvent, useState } from 'react';
import { z } from 'zod';
import { FormErrors, eventSchema } from '@/config/zod-schemas/eventSchema';
import { useEventStore } from '@/stores/useEventStore';
import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';

export const useEventForm = () => {
  const initialData = {
    title: '',
    startDate: '',
    endDate: '',
    categoryType: '',
    basePrice: '',
    quantityAvailable: '',
    description: ''
  };
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const { addEvent } = useEventStore(state => state);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: CategoryEvent) => {
    setFormData(prev => ({ ...prev, categoryType: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = eventSchema.parse({
        ...formData,
        basePrice: parseFloat(formData.basePrice),
        quantityAvailable: parseInt(formData.quantityAvailable)
      });
      await addEvent(validatedData);
      console.log('Event added successfully');
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors);
      }
    }
  };

  return { formData, handleChange, handleCategoryChange, handleSubmit, errors };
};
