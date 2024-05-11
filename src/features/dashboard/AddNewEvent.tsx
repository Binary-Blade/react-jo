import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const AddNewEvent = () => {
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-lg font-semibold">Add New Event</h2>
      </div>
      <form className="grid gap-4">
        <div className="grid gap-1">
          <Label htmlFor="name">Event Title</Label>
          <Input id="name" placeholder="Enter event name" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Enter location" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="category">Category</Label>
          <Input id="category" placeholder="Enter category" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="price">Base price</Label>
          <Input id="price" placeholder="Enter base price" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="quantity">Quantity</Label>
          <Input id="quantity" placeholder="Enter quantity" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Enter event description" />
        </div>
        <Button type="submit">Add Event</Button>
      </form>
    </>
  );
};
