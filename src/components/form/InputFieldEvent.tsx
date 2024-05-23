import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface InputFieldEventProps {
  id: string;
  label: string;
  type?: 'text' | 'number' | 'date'; // Specify possible types explicitly
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number; // Keep string or number to support text and date inputs
  errors?: string[];
}

/**
 * `InputFieldEvent` component provides an input field with a label and error message support.
 * It supports text, number, and date input types.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.id - The ID and name of the input field.
 * @param {string} props.label - The label for the input field.
 * @param {'text' | 'number' | 'date'} [props.type='text'] - The type of the input field.
 * @param {Function} props.onChange - The function to call when the input value changes.
 * @param {string | number} props.value - The current value of the input field.
 * @param {string[]} [props.errors] - An array of error messages.
 * @returns {JSX.Element} The rendered InputFieldEvent component.
 *
 * @example
 * return (
 *   <InputFieldEvent
 *     id="title"
 *     label="Title"
 *     type="text"
 *     onChange={handleInputChange}
 *     value={formData.title}
 *     errors={formErrors.title}
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Input` for the input field.
 * - `Label` for the input label.
 */
export const InputFieldEvent = ({
  id,
  label,
  type = 'text',
  onChange,
  value,
  errors
}: InputFieldEventProps): JSX.Element => (
  <div className="space-y-2">
    {/* Input Label */}
    <Label className="font-medium" htmlFor={id}>
      {label}
    </Label>
    {/* Input Field */}
    <Input
      className="w-full"
      id={id}
      name={id}
      type={type}
      placeholder={`Ajouter un ${label.toLowerCase()}`}
      required
      onChange={onChange}
      value={value}
    />
    {/* Error Message */}
    {errors && <p className="text-red-500">{errors[0]}</p>}
  </div>
);
