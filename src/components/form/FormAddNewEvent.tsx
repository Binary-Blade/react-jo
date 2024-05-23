import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { CategoryEvent, CategoryEventAdmin } from '@/config/enums/CategoryEvent.enum';
import { useEventForm } from '@/hooks/useEventForm';
import { InputFieldEvent } from './InputFieldEvent';

interface FormAddNewEventProps {
  onSuccess: () => void;
}

/**
 * `FormAddNewEvent` component provides a form to add a new event.
 * It includes fields for event details such as title, dates, category, price, quantity, and descriptions.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Function} props.onSuccess - Callback function to be called upon successful form submission.
 * @returns {JSX.Element} The rendered FormAddNewEvent component.
 *
 * @example
 * return <FormAddNewEvent onSuccess={() => console.log('Event added successfully')} />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `InputFieldEvent` for input fields.
 * - `Select`, `SelectContent`, `SelectGroup`, `SelectItem`, `SelectLabel`, `SelectTrigger`, `SelectValue` for the category selection.
 * - `Button`, `Label`, `Textarea` for other form elements.
 * - `useEventForm` for form handling logic.
 */
export const FormAddNewEvent = ({ onSuccess }: FormAddNewEventProps): JSX.Element => {
  const initialData = {
    title: '',
    startDate: '',
    endDate: '',
    categoryType: CategoryEvent.ARCHERY,
    basePrice: 0,
    quantityAvailable: 0,
    shortDescription: '',
    longDescription: ''
  };

  const { formData, handleChange, handleCategoryChange, handleSubmit, errors } = useEventForm(
    initialData,
    onSuccess
  );

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Ajouter un Nouvel Événement</h2>
        <p>Remplissez le formulaire ci-dessous pour créer un nouvel événement.</p>
      </div>
      <div className="gap-4">
        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Title Field */}
          <InputFieldEvent
            id="title"
            label="Titre"
            onChange={handleChange}
            value={formData.title}
            errors={errors.title}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Start Date Field */}
            <InputFieldEvent
              id="startDate"
              label="Date de Début"
              type="date"
              onChange={handleChange}
              value={formData.startDate}
              errors={errors.startDate}
            />
            {/* End Date Field */}
            <InputFieldEvent
              id="endDate"
              label="Date de Fin"
              type="date"
              onChange={handleChange}
              value={formData.endDate}
              errors={errors.endDate}
            />
          </div>
          {/* Category Field */}
          <div className="space-y-2">
            <Label className="font-medium" htmlFor="categoryType">
              Catégorie d'Événement *
            </Label>
            <Select onValueChange={handleCategoryChange} value={formData.categoryType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez une catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Catégories</SelectLabel>
                  {Object.entries(CategoryEventAdmin).map(([key, value]) => (
                    <SelectItem key={key} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.categoryType && <p className="text-red-500">{errors.categoryType[0]}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Base Price Field */}
            <InputFieldEvent
              id="basePrice"
              label="Prix"
              type="number"
              onChange={handleChange}
              value={formData.basePrice}
              errors={errors.basePrice}
            />
            {/* Quantity Available Field */}
            <InputFieldEvent
              id="quantityAvailable"
              label="Quantité Disponible"
              type="number"
              onChange={handleChange}
              value={formData.quantityAvailable}
              errors={errors.quantityAvailable}
            />
          </div>
          <div className="space-y-2">
            {/* Short Description Field */}
            <Label className="font-medium" htmlFor="shortDescription">
              Courte Description *
            </Label>
            <Textarea
              className="w-full"
              id="shortDescription"
              name="shortDescription"
              placeholder="Entrez une courte description (max 250 caractères)"
              required
              onChange={handleChange}
              value={formData.shortDescription}
            />
            {errors.shortDescription && (
              <p className="text-red-500">{errors.shortDescription[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            {/* Long Description Field */}
            <Label className="font-medium" htmlFor="longDescription">
              Description Longue *
            </Label>
            <Textarea
              className="w-full"
              id="longDescription"
              name="longDescription"
              placeholder="Entrez une description longue (max 500 caractères)"
              required
              onChange={handleChange}
              value={formData.longDescription}
            />
            {errors.longDescription && <p className="text-red-500">{errors.longDescription[0]}</p>}
          </div>
          {/* Submit Button */}
          <Button className="w-full" type="submit">
            Enregistrer l'Événement
          </Button>
        </form>
      </div>
    </>
  );
};
