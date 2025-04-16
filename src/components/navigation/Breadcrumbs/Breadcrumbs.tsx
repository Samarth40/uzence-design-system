// Placeholder for Breadcrumbs component
import React from 'react';

interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  // Add other props as needed
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  separator = '>' // Changed default separator for visibility
}) => {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[--color-text-muted]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const hasHref = !!item.href;

          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="select-none" aria-hidden="true">
                  {separator}
                </span>
              )}
              <div className="flex items-center gap-1.5">
                {item.icon && <span className="w-4 h-4 flex-shrink-0">{item.icon}</span>}
                {hasHref && !isLast ? (
                  <a 
                    href={item.href} 
                    className="hover:text-[--color-text-default] hover:underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span 
                    className={`${isLast ? 'text-[--color-text-default] font-medium' : ''}`}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 