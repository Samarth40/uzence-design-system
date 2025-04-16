import React from 'react';

// Define possible variants and sizes
export type TagVariant = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral';
export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The visual style of the tag.
   */
  variant?: TagVariant;
  /**
   * The size of the tag.
   */
  size?: TagSize;
  /**
   * The content of the tag.
   */
  children: React.ReactNode;
  /**
   * Optional icon to display before the text.
   */
  icon?: React.ReactElement;
  /**
   * Optional handler for when the tag is dismissed (if dismissible).
   */
  onDismiss?: () => void;
  /**
   * If true, the tag can be dismissed.
   */
  dismissible?: boolean;
  /**
   * Additional classes to apply to the tag.
   */
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  variant = 'neutral',
  size = 'md',
  children,
  icon,
  onDismiss,
  dismissible = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all';

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  const variantClasses = {
    primary: 'bg-[--color-primary] text-white hover:bg-[--color-primary-hover]',
    secondary: 'bg-[--color-secondary] text-white hover:bg-[--color-secondary-hover]',
    success: 'bg-[--color-success-bg] text-[--color-success-text] border border-[--color-success-border]',
    info: 'bg-[--color-info-bg] text-[--color-info-text] border border-[--color-info-border]',
    warning: 'bg-[--color-warning-bg] text-[--color-warning-text] border border-[--color-warning-border]',
    error: 'bg-[--color-error-bg] text-[--color-error-text] border border-[--color-error-border]',
    neutral: 'bg-[--color-neutral-gray-100] text-[--color-neutral-gray-700] hover:bg-[--color-neutral-gray-200]',
  };

  const iconClass = 'w-3.5 h-3.5';
  const dismissClass = `
    ml-1.5 -mr-1 hover:bg-black/10 rounded-full p-0.5
    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-current
  `;

  return (
    <span
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `.trim()}
      {...props}
    >
      {icon && (
        <span className={`mr-1 ${iconClass} ${variant === 'primary' || variant === 'secondary' ? 'text-current' : `text-[--color-${variant}-icon]`}`}>
          {icon}
        </span>
      )}
      {children}
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className={dismissClass}
          aria-label="Dismiss"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag; 