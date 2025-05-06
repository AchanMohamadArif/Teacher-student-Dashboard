// Input.tsx
import React from 'react';

export interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  ariaLabel?: string;
  id?: string;  
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = '',
  disabled = false,
  type = 'text',
  ariaLabel = '',
  id,  
}) => {
  return (
    <input
      id={id}  
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      className="border rounded p-2 w-full focus:outline-none"
    />
  );
};

export default Input;
