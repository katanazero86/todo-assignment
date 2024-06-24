import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextInputProps {
  type?: 'text' | 'number' | 'password';
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  register?: UseFormRegisterReturn;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = 'text', placeholder = '', disabled = false, id = '', register }, ref) => (
    <input
      className="p-4 text-sm font-medium text-gray-900 rounded-md border border-gray-600 disabled:bg-zinc-200"
      ref={ref}
      type={type}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      {...register}
    />
  ),
);

export default TextInput;
