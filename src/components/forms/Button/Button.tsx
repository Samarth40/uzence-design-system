import React, { forwardRef } from 'react';
// No clsx needed

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    fullWidth = false,
    loading = false,
    disabled,
    className = '',
    children,
    ...props
  },
  ref
) => {
  // Base styles including transitions and focus rings
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Define base variant/size classes - Hover/Focus will be handled in CSS
  const variantStyles = {
    primary:   'bg-[--color-primary] text-[--color-text-on-primary] focus:ring-[--color-primary]/50', // Removed hover:bg
    secondary: 'bg-[--color-secondary] text-[--color-text-on-secondary] focus:ring-[--color-secondary]/50', // Removed hover:bg
    outline:   'border-2 border-[--color-primary] text-[--color-primary] focus:ring-[--color-primary]/50', // Removed hover:bg/text
    ghost:     'text-[--color-primary] focus:ring-[--color-primary]/50', // Removed hover:bg
    danger:    'bg-[--color-error-bg] text-[--color-error-text] dark:text-white border border-[--color-error-border] focus:ring-[--color-error-text]/50' // Removed hover:bg/text
  };

  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 gap-1.5',
    md: 'text-base px-4 py-2 gap-2',
    lg: 'text-lg px-6 py-3 gap-3'
  };

  const iconSizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5', // Default if size is md
    lg: 'w-6 h-6'
  };
  const iconSizeClass = iconSizeStyles[size]; // Get class based on button size

  const Spinner = () => (
     <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Construct class string - let CSS handle hover/focus states
  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  return (
    <button
      ref={ref}
      className={combinedClassName.replace(/\s+/g, ' ').trim()} // Clean up whitespace
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner />}
      {!loading && icon && iconPosition === 'left' && (
        <span className={`flex-shrink-0 ${iconSizeClass}`}>{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className={`flex-shrink-0 ${iconSizeClass}`}>{icon}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button'; // Optional: Set display name for DevTools

export default Button; 