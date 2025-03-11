
import React, { useState, useEffect } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea?: boolean;
  rows?: number;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  error,
  textarea = false,
  rows = 4,
  required = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!props.value);
  
  useEffect(() => {
    // Update hasValue when the value prop changes
    setHasValue(!!props.value);
  }, [props.value]);
  
  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (props.onFocus) props.onFocus(e as any);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
    if (props.onBlur) props.onBlur(e as any);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasValue(!!e.target.value);
    if (props.onChange) props.onChange(e as any);
  };
  
  const inputClasses = `
    block w-full px-4 pt-5 pb-2 bg-white border rounded-md transition-all duration-200
    focus:outline-none focus:ring-2 focus:border-transparent
    ${isFocused ? 'focus:ring-secondary/30' : ''}
    ${error ? 'border-red-400 focus:ring-red-300' : 'border-neutral-300'}
    ${props.disabled ? 'bg-neutral-100 cursor-not-allowed' : ''}
  `;
  
  return (
    <div className="mb-4">
      <div className="relative">
        {textarea ? (
          <textarea
            id={name}
            name={name}
            rows={rows}
            className={inputClasses}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          />
        ) : (
          <input
            id={name}
            name={name}
            className={inputClasses}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props as React.InputHTMLAttributes<HTMLInputElement>}
          />
        )}
        
        <label
          htmlFor={name}
          className={`
            absolute left-4 transition-all duration-200 pointer-events-none
            ${(isFocused || hasValue) 
              ? 'text-xs text-secondary top-1' 
              : 'text-neutral-500 top-1/2 transform -translate-y-1/2'
            }
            ${error ? 'text-red-400' : ''}
            ${props.disabled ? 'text-neutral-400' : ''}
          `}
        >
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      </div>
      
      {error && (
        <div className="text-red-400 text-xs mt-1 pl-1">{error}</div>
      )}
    </div>
  );
};

export default TextInput;
