import React from 'react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  size = 'md',
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  className = '',
  ...props
}) => {
  const baseInputStyles = 'block rounded-md border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };

  const stateStyles = error
    ? 'border-[--color-error-border] text-[--color-error-text] focus:border-[--color-error-text] focus:ring-[--color-error-text]/50'
    : 'border-[--color-border-default] text-[--color-text-default] focus:border-[--color-primary] focus:ring-[--color-primary]/50';

  const iconSizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-sm font-medium text-[--color-text-default] mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className={`absolute left-0 inset-y-0 pl-3 flex items-center pointer-events-none text-[--color-text-muted]`}>
            <span className={iconSizeStyles[size]}>{leftIcon}</span>
          </div>
        )}
        <input
          className={`
            ${baseInputStyles}
            ${sizeStyles[size]}
            ${stateStyles}
            ${leftIcon ? 'pl-10' : ''}
            ${rightIcon ? 'pr-10' : ''}
            ${fullWidth ? 'w-full' : ''}
            ${className}
          `}
          disabled={disabled}
          {...props}
        />
        {rightIcon && (
          <div className={`absolute right-0 inset-y-0 pr-3 flex items-center pointer-events-none text-[--color-text-muted]`}>
            <span className={iconSizeStyles[size]}>{rightIcon}</span>
          </div>
        )}
      </div>
      {(helperText || error) && (
        <p className={`mt-1 text-sm ${error ? 'text-[--color-error-text]' : 'text-[--color-text-muted]'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Input; 