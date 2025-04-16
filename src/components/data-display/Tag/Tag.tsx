import React from 'react';

type TagVariant = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral';

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'primary',
  icon,
  dismissible,
  onDismiss,
}) => {
  const variantStyles = {
    primary: 'bg-[--color-primary] text-[--color-text-on-primary] hover:bg-[--color-primary-hover]',
    secondary: 'bg-[--color-secondary] text-[--color-text-on-secondary] hover:bg-[--color-secondary-hover]',
    success: 'bg-[--color-success-bg] text-[--color-success-text] border border-[--color-success-border] hover:bg-[--color-success-bg]/90',
    info: 'bg-[--color-info-bg] text-[--color-info-text] border border-[--color-info-border] hover:bg-[--color-info-bg]/90',
    warning: 'bg-[--color-warning-bg] text-[--color-warning-text] border border-[--color-warning-border] hover:bg-[--color-warning-bg]/90',
    error: 'bg-[--color-error-bg] text-[--color-error-text] border border-[--color-error-border] hover:bg-[--color-error-bg]/90',
    neutral: 'bg-[--color-neutral-gray-100] text-[--color-neutral-gray-700] border border-[--color-neutral-gray-200] hover:bg-[--color-neutral-gray-200]',
  };

  const iconColor = {
    primary: 'text-[--color-text-on-primary]',
    secondary: 'text-[--color-text-on-secondary]',
    success: 'text-[--color-success-icon]',
    info: 'text-[--color-info-icon]',
    warning: 'text-[--color-warning-icon]',
    error: 'text-[--color-error-icon]',
    neutral: 'text-[--color-neutral-gray-700]',
  };

  return (
    <span 
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-0.5 
        rounded-md text-sm font-medium
        transition-all duration-200 ease-in-out
        shadow-sm hover:shadow-md hover:-translate-y-0.5
        ${variantStyles[variant]}
      `}
    >
      {icon && (
        <span className={`flex-shrink-0 w-4 h-4 ${iconColor[variant]}`}>
          {icon}
        </span>
      )}
      {children}
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className={`
            ml-1.5 -mr-1 p-0.5 
            rounded-sm hover:bg-black/5 
            transition-colors duration-200
            ${iconColor[variant]}
          `}
          aria-label="Dismiss"
        >
          <svg 
            className="w-3 h-3" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag; 