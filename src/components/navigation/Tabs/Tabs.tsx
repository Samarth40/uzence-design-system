import React, { useState } from 'react';

interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
}

const Tabs: React.FC<TabsProps> = ({ items, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  return (
    <div className="tabs-container">
      <div className="border-b border-[--color-border-default]">
        <div className="flex gap-2 px-4">
          {items.map((tab) => (
            <button
              key={tab.id}
              onClick={() => !tab.disabled && setActiveTab(tab.id)}
              className={`
                relative py-4 px-3 -mb-px
                inline-flex items-center gap-2
                text-sm font-medium
                transition-all duration-200
                outline-none
                ${
                  activeTab === tab.id
                    ? 'text-[--color-primary] border-b-2 border-[--color-primary]'
                    : 'text-[--color-text-muted] hover:text-[--color-text-default]'
                }
                ${
                  tab.disabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'cursor-pointer hover:bg-[--color-surface-hover]'
                }
              `}
              disabled={tab.disabled}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.icon && (
                <span className="flex-shrink-0 w-4 h-4">
                  {tab.icon}
                </span>
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="tab-content">
        {items.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs; 