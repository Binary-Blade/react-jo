import { CardTitle, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card';
import { XIcon } from '@/components/ui/IconComponents';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FC, useState } from 'react';
import { EventFormData } from '@/config/zod-schemas/eventSchema';

interface EditEventSidebarProps {
  event: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

export const EditEventSidebar: FC<EditEventSidebarProps> = ({ event, onClose, onSave }) => {
  const [formData, setFormData] = useState<EventFormData>({
    ...event
  });

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
      <div className="fixed top-0 right-0 z-50 h-full w-[480px] overflow-y-auto bg-white p-4 transition-all duration-300  dark:bg-gray-800">
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
                <Label htmlFor="basePrice">BasePrice</Label>
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
              <Label className="font-medium" htmlFor="description">
                Description *
              </Label>
              <Textarea
                rows={3}
                id="description"
                name="description"
                placeholder="Enter a short description (max 250 characters)"
                required
                onChange={handleChange}
                value={formData.description}
              />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-end">
              <Button className="mr-2" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={() => onSave(formData)}>Save Changes</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
