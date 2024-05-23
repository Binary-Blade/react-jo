import { FormEvent, useState } from 'react';
import { z } from 'zod';
import { eventSchema } from '@/config/zod-schemas/eventSchema';
import { useEventStore } from '@/stores/useEventStore';
import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';
import { useToast } from '@/components/ui/use-toast';
import { FormErrors } from '@/config/interfaces/form-type.interface';

/**
 * Custom hook `useEventForm` is responsible for handling the event form logic,
 * including form state management, validation, and submission.
 *
 * @param {any} initialData - The initial data for the form.
 * @param {Function} onSuccess - Callback function to be called on successful form submission.
 * @returns An object containing form state, handlers, and errors.
 *
 * @example
 * const { formData, handleChange, handleCategoryChange, handleSubmit, errors } = useEventForm(initialData, onSuccess);
 *
 * @remarks
 * The hook uses `useState` for form state management, `zod` for schema validation,
 * and `useToast` for displaying notifications.
 */
export const useEventForm = (initialData: any, onSuccess: () => void) => {
  // State for managing form data and validation errors
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<FormErrors>({});

  // Extract addEvent function from the event store
  const { addEvent } = useEventStore(state => state);

  // Initialize toast for notifications
  const { toast } = useToast();

  /**
   * Handles changes in form inputs and updates the formData state.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The change event from the input.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  /**
   * Handles changes in the event category and updates the formData state.
   *
   * @param {CategoryEvent} value - The selected event category.
   */
  const handleCategoryChange = (value: CategoryEvent) => {
    setFormData((prev: any) => ({ ...prev, categoryType: value }));
  };

  /**
   * Handles form submission, validates data, and calls the addEvent function.
   *
   * @param {FormEvent} e - The form submission event.
   */
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
