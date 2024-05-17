import { FC } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type InputFieldEventProps = {
  id: string;
  label: string;
  type?: 'text' | 'number' | 'date'; // Specify possible types explicitly
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number; // Keep string or number to support text and date inputs
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
      {label}
    </Label>
    <Input
      className="w-full"
      id={id}
      name={id}
      type={type}
      placeholder={`Enter event ${label.toLowerCase()}`}
      required
      onChange={onChange}
      value={value}
    />
    {errors && <p className="text-red-500">{errors[0]}</p>}
  </div>
);
