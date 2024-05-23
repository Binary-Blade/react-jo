import { CardTitle, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card';
import { XIcon } from '@/components/ui/IconComponents';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { EventFormData } from '@/config/zod-schemas/eventSchema';

interface EditEventSidebarProps {
  event: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

/**
 * `EditEventSidebar` component provides a sidebar for editing an event's details.
 * It includes input fields for event attributes and buttons to save or cancel changes.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {any} props.event - The event data to be edited.
 * @param {function} props.onClose - The function to close the sidebar.
 * @param {function} props.onSave - The function to save the edited event data.
 * @returns {JSX.Element} The rendered edit event sidebar component.
 *
 * @example
 * const event = { title: 'Event 1', startDate: '2023-01-01', endDate: '2023-01-02', basePrice: 100, quantityAvailable: 50, shortDescription: 'Short desc', longDescription: 'Long desc' };
 * return <EditEventSidebar event={event} onClose={() => {}} onSave={(data) => console.log(data)} />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Card`, `CardHeader`, `CardContent`, `CardFooter`, `CardTitle` for card layout.
 * - `Button` for the action buttons.
 * - `Input` for the text and date inputs.
 * - `Label` for input labels.
 * - `Textarea` for the description fields.
 * - `XIcon` for the close button icon.
 * - `useState` for managing the form state.
 */
export const EditEventSidebar = ({
  event,
  onClose,
  onSave
}: EditEventSidebarProps): JSX.Element => {
  // Initialize form data state with the event data
  const [formData, setFormData] = useState<EventFormData>({
    ...event
  });

  /**
   * Handle change in input fields and update the form data state.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The change event from the input field.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;
    if (type === 'number') {
      setFormData(prev => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <>
      <div className="fixed top-0 right-0 z-50 h-full w-[480px] overflow-y-auto bg-white p-4 transition-all duration-300 dark:bg-gray-800">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Edit Event</CardTitle>
              <Button size="icon" variant="outline" onClick={onClose}>
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="basePrice">Base Price</Label>
                <Input
                  id="basePrice"
                  name="basePrice"
                  type="number"
                  value={formData.basePrice}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantityAvailable">Quantity</Label>
                <Input
                  id="quantityAvailable"
                  name="quantityAvailable"
                  type="number"
                  value={formData.quantityAvailable}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="font-medium" htmlFor="shortDescription">
                Courte présentation *
              </Label>
              <Textarea
                rows={3}
                id="shortDescription"
                name="shortDescription"
                placeholder="Enter a short description (max 250 characters)"
                required
                onChange={handleChange}
                value={formData.shortDescription}
              />
            </div>
            <div className="space-y-2">
              <Label className="font-medium" htmlFor="longDescription">
                Longue description *
              </Label>
              <Textarea
                rows={3}
                id="longDescription"
                name="longDescription"
                placeholder="Enter a long description"
                required
                onChange={handleChange}
                value={formData.longDescription}
              />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-end">
              <Button className="mr-2" variant="outline" onClick={onClose}>
                Annuler
              </Button>
              <Button onClick={() => onSave(formData)}>Save Changes</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
