import { FC } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type InputFieldEventProps = {
  id: string;
  label: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  errors?: string[];
};

export const InputFieldEvent: FC<InputFieldEventProps> = ({
  id,
  label,
  type,
  onChange,
  value,
  errors
}) => (
  <div className="space-y-2">
    <Label className="font-medium" htmlFor={id}>
      Event {label}*
    </Label>
    <Input
      className="w-full"
      id={id}
      name={id}
      type={type}
      placeholder={`Enter event ${id}`}
      required
      onChange={onChange}
      value={value}
    />
    {errors && <p className="text-red-500">{errors[0]}</p>}
  </div>
);
