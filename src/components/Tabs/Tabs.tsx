import React, { useState } from 'react';

export type TabSize = 'sm' | 'md' | 'lg';
export type TabVariant = 'primary' | 'secondary' | 'neutral';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactElement;
}

export interface TabsProps {
  /**
   * Array of tab items
   */
  items: TabItem[];
  /**
   * The size of the tabs
   */
  size?: TabSize;
  /**
   * The visual style of the tabs
   */
  variant?: TabVariant;
  /**
   * Optional callback when active tab changes
   */
  onChange?: (activeTabId: string) => void;
  /**
   * Optional default active tab ID
   */
  defaultActiveTabId?: string;
  /**
   * Optional class name for the tabs container
   */
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  size = 'md',
  variant = 'primary',
  onChange,
  defaultActiveTabId,
  className = '',
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    defaultActiveTabId || items[0]?.id || ''
  );

  const handleTabClick = (tabId: string) => {
    if (items.find(item => item.id === tabId)?.disabled) return;
    setActiveTabId(tabId);
    onChange?.(tabId);
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2.5',
  };

  const baseTabClasses = `
    flex items-center gap-2 font-medium transition-all
    focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-50
  `;

  const variantClasses = {
    primary: {
      list: 'border-b border-[--color-border-default]',
      tab: {
        active: 'text-[--color-primary] border-b-2 border-[--color-primary] -mb-px',
        inactive: 'text-[--color-text-muted] hover:text-[--color-text-default] hover:bg-[--color-neutral-gray-50]',
      },
    },
    secondary: {
      list: 'bg-[--color-neutral-gray-100] p-1 rounded-lg',
      tab: {
        active: 'bg-white text-[--color-text-default] shadow-sm rounded-md',
        inactive: 'text-[--color-text-muted] hover:text-[--color-text-default] rounded-md',
      },
    },
    neutral: {
      list: 'border-b border-[--color-border-default]',
      tab: {
        active: 'bg-[--color-neutral-gray-100] text-[--color-text-default] border-b-2 border-[--color-neutral-gray-300] -mb-px',
        inactive: 'text-[--color-text-muted] hover:text-[--color-text-default] hover:bg-[--color-neutral-gray-50]',
      },
    },
  };

  return (
    <div className={className}>
      <div role="tablist" className={`flex ${variantClasses[variant].list}`}>
        {items.map((tab) => {
          const isActive = tab.id === activeTabId;
          const isDisabled = tab.disabled;
          
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-disabled={isDisabled}
              disabled={isDisabled}
              onClick={() => handleTabClick(tab.id)}
              className={`
                ${baseTabClasses}
                ${sizeClasses[size]}
                ${isActive 
                  ? variantClasses[variant].tab.active 
                  : variantClasses[variant].tab.inactive}
              `}
            >
              {tab.icon && (
                <span className={`w-4 h-4 ${isActive ? 'text-[--color-primary]' : 'text-[--color-text-muted]'}`}>
                  {tab.icon}
                </span>
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
      <div 
        role="tabpanel" 
        className="p-4 bg-[--color-surface-default] rounded-b-lg"
      >
        {items.find(tab => tab.id === activeTabId)?.content}
      </div>
    </div>
  );
};

export default Tabs; 