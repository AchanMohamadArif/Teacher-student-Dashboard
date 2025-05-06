// Select.tsx
import React from 'react';

export interface SelectProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: { label: string; value: string }[];
  disabled?: boolean;
  ariaLabel?: string;
  id?: string; 
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  disabled = false,
  ariaLabel = '',
  id,  
}) => {
  return (
    <select
      id={id} 
      value={value}
      onChange={onChange}
      disabled={disabled}
      aria-label={ariaLabel}
      className="w-full p-2 border rounded bg-white focus:outline-none focus:ring focus:border-blue-500 disabled:bg-gray-100"
    >
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
