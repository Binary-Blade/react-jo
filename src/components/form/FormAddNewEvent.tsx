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
import { FC } from 'react';

interface FormAddNewEventProps {
  onSuccess: () => void;
}

export const FormAddNewEvent: FC<FormAddNewEventProps> = ({ onSuccess }) => {
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
          <InputFieldEvent
            id="title"
            label="Titre"
            onChange={handleChange}
            value={formData.title}
            errors={errors.title}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputFieldEvent
              id="startDate"
              label="Date de Début"
              type="date"
              onChange={handleChange}
              value={formData.startDate}
              errors={errors.startDate}
            />
            <InputFieldEvent
              id="endDate"
              label="Date de Fin"
              type="date"
              onChange={handleChange}
              value={formData.endDate}
              errors={errors.endDate}
            />
          </div>
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
            <InputFieldEvent
              id="basePrice"
              label="Prix"
              type="number"
              onChange={handleChange}
              value={formData.basePrice}
              errors={errors.basePrice}
            />
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
          <Button className="w-full" type="submit">
            Enregistrer l'Événement
          </Button>
        </form>
      </div>
    </>
  );
};
