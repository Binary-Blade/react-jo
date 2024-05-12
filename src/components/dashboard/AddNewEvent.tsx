import { CardTitle, CardHeader, CardContent, CardDescription } from '@/components/ui/card';
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
import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';
import { useEventForm } from '@/hooks/useEventForm';
import { InputFieldEvent } from '@/components/dashboard/InputFieldEvent';

export const AddNewEvent = () => {
  const { formData, handleChange, handleCategoryChange, handleSubmit, errors } = useEventForm();

  return (
    <>
      <CardHeader>
        <CardTitle>Add New Event</CardTitle>
        <CardDescription> Fill out the form below to create a new event. </CardDescription>
      </CardHeader>
      <CardContent className="gap-4">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <InputFieldEvent
            id="title"
            label="Title"
            onChange={handleChange}
            value={formData.title}
            errors={errors.title}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputFieldEvent
              id="startDate"
              label="Start Date"
              type="date"
              onChange={handleChange}
              value={formData.startDate}
            />
            <InputFieldEvent
              id="endDate"
              label="End Date"
              type="date"
              onChange={handleChange}
              value={formData.endDate}
            />
          </div>
          <div className="space-y-2">
            <Label className="font-medium" htmlFor="categoryType">
              Event Category *
            </Label>
            <Select onValueChange={handleCategoryChange} value={formData.categoryType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {Object.entries(CategoryEvent).map(([key, value]) => (
                    <SelectItem key={key} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputFieldEvent
              id="basePrice"
              label="Price"
              type="number"
              onChange={handleChange}
              value={formData.basePrice}
              errors={errors.basePrice}
            />
            <InputFieldEvent
              id="quantityAvailable"
              label="Quantity Available"
              type="number"
              onChange={handleChange}
              value={formData.quantityAvailable}
              errors={errors.quantityAvailable}
            />
          </div>
          <div className="space-y-2">
            <Label className="font-medium" htmlFor="description">
              Description *
            </Label>
            <Textarea
              className="w-full"
              id="description"
              name="description"
              placeholder="Enter a short description (max 250 characters)"
              required
              onChange={handleChange}
              value={formData.description}
            />
          </div>

          {errors.description && <p className="text-red-500">{errors.description[0]}</p>}
          <Button className="w-full" type="submit">
            Register Event
          </Button>
        </form>
      </CardContent>
    </>
  );
};
