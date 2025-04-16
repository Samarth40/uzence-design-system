import { useState } from 'react';
import Tag from './components/data-display/Tag/Tag';
import Tabs from './components/navigation/Tabs/Tabs';
import Button from './components/forms/Button/Button';
import Input from './components/forms/Input/Input';
import Tooltip from './components/data-display/Tooltip/Tooltip';
import Breadcrumbs from './components/navigation/Breadcrumbs/Breadcrumbs';

// --- Define Representative Icons ---
const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);

const IconNotification = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const IconChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);
// --- End Icons ---

const tabItems = [
  {
    id: 'profile',
    label: 'Profile',
    icon: <IconUser />,
    content: (
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[--color-primary]/10 text-[--color-primary] rounded-full flex items-center justify-center p-2">
            <IconUser />
          </div>
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-[--color-text-muted]">Product Designer</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag variant="primary">Active User</Tag>
          <Tag variant="success">Verified</Tag>
          <Tag variant="info" icon={<IconUser />}>Pro Member</Tag>
        </div>
        <div className="prose prose-sm max-w-none">
          <p className="text-[--color-text-default]">
            Experienced product designer with a focus on creating beautiful and functional user interfaces.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <IconSettings />,
    content: (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Account Settings</h3>
          <Tag variant="warning" dismissible>Pending Changes</Tag>
        </div>
        <div className="grid gap-4">
          <div className="p-4 rounded-lg bg-[--color-surface-hover] border border-[--color-border-default]">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Beta Features</h4>
                <p className="text-sm text-[--color-text-muted]">Access to upcoming features</p>
              </div>
              <Tag variant="info">Enabled</Tag>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <IconNotification />,
    disabled: true,
    content: <div className="p-6">Notifications Content</div>,
  },
];

const breadcrumbItems = [
  { label: 'Home', href: '#', icon: <IconHome /> },
  { label: 'Settings', href: '#', icon: <IconSettings /> },
  { label: 'Account' },
];

function App() {
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[--color-background-default] text-[--color-text-default] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Design System</h1>
          <p className="text-lg text-[--color-text-muted]">A collection of beautiful and functional UI components</p>
        </header>

        {/* Buttons Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[--color-border-default]">
            <h2 className="text-2xl font-semibold tracking-tight">Buttons</h2>
            <Tag variant="neutral" icon={<IconCode />}>Component</Tag>
          </div>

          <div className="p-8 bg-[--color-surface-default] rounded-xl border border-[--color-border-default] shadow-sm space-y-10">
            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">Variants</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger" icon={<IconSettings />}>Danger</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm" icon={<IconUser />}>Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">With Icons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button icon={<IconUser />}>Left Icon</Button>
                <Button icon={<IconUser />} iconPosition="right">Right Icon</Button>
                <Button icon={<IconSettings />} variant="outline">Outline with Icon</Button>
                <Button loading={loading} onClick={handleLoadingClick} size="md">
                  {loading ? 'Loading...' : 'Click to Load'}
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">States</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button disabled>Disabled</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[--color-border-default]">
            <h2 className="text-2xl font-semibold tracking-tight">Inputs</h2>
            <Tag variant="neutral" icon={<IconCode />}>Component</Tag>
          </div>

          <div className="p-8 bg-[--color-surface-default] rounded-xl border border-[--color-border-default] shadow-sm space-y-10">
            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">Basic & States</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <Input
                  label="Username"
                  placeholder="Enter your username"
                  helperText="This will be your public display name"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  error="Password must be at least 8 characters"
                />
                <Input disabled placeholder="Disabled input" />
                <Input readOnly value="Read only input" />
                <Input fullWidth placeholder="Full width input" className="md:col-span-2" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">With Icons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <Input
                  label="Search"
                  placeholder="Search database..."
                  leftIcon={<IconSearch />}
                />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  rightIcon={<IconMail />}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">Sizes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
                <Input size="sm" placeholder="Small input" leftIcon={<IconSearch />} />
                <Input size="md" placeholder="Medium input" />
                <Input size="lg" placeholder="Large input" />
              </div>
            </div>
          </div>
        </section>

        {/* Tooltips Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[--color-border-default]">
            <h2 className="text-2xl font-semibold tracking-tight">Tooltips</h2>
            <Tag variant="neutral" icon={<IconCode />}>Component</Tag>
          </div>

          <div className="p-8 bg-[--color-surface-default] rounded-xl border border-[--color-border-default] shadow-sm space-y-10">
            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">Positions</h3>
              <div className="flex flex-wrap gap-6 items-center">
                <Tooltip content="Tooltip on top" placement="top">
                  <Button size="sm">Top</Button>
                </Tooltip>
                <Tooltip content="Tooltip on bottom" placement="bottom">
                  <Button size="sm">Bottom</Button>
                </Tooltip>
                <Tooltip content="Tooltip on left" placement="left">
                  <Button size="sm">Left</Button>
                </Tooltip>
                <Tooltip content="Tooltip on right" placement="right">
                  <Button size="sm">Right</Button>
                </Tooltip>
                 <Tooltip content={<span>Rich <b>HTML</b> content</span>} placement="bottom">
                  <Button variant="outline" size="sm">HTML Content</Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </section>
        
        {/* Breadcrumbs Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[--color-border-default]">
            <h2 className="text-2xl font-semibold tracking-tight">Breadcrumbs</h2>
            <Tag variant="neutral" icon={<IconCode />}>Component</Tag>
          </div>

          <div className="p-8 bg-[--color-surface-default] rounded-xl border border-[--color-border-default] shadow-sm space-y-10">
            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">Default</h3>
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">Custom Separator</h3>
              <Breadcrumbs items={breadcrumbItems.slice(0,2)} separator={<IconChevronRight />} />
            </div>
             <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">No Icons</h3>
              <Breadcrumbs items={breadcrumbItems.map(i => ({ label: i.label, href: i.href }))} />
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="space-y-6">
           <div className="flex items-center justify-between pb-2 border-b border-[--color-border-default]">
            <h2 className="text-2xl font-semibold tracking-tight">Tags</h2>
            <Tag variant="neutral" icon={<IconCode />}>Component</Tag>
          </div>

          <div className="p-8 bg-[--color-surface-default] rounded-xl border border-[--color-border-default] shadow-sm space-y-10">
             <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">Basic Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Tag variant="primary">Primary</Tag>
                <Tag variant="secondary">Secondary</Tag>
                <Tag variant="success">Success</Tag>
                <Tag variant="info">Info</Tag>
                <Tag variant="warning">Warning</Tag>
                <Tag variant="error">Error</Tag>
                <Tag variant="neutral">Neutral</Tag>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">With Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Tag variant="primary" icon={<IconUser />}>With Icon</Tag>
                <Tag variant="info" icon={<IconMail />}>With Icon</Tag>
                <Tag variant="success" icon={<IconSettings />}>With Icon</Tag>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium text-[--color-text-muted]">Dismissible</h3>
              <div className="flex flex-wrap gap-3">
                <Tag variant="warning" dismissible>Dismissible</Tag>
                <Tag variant="error" dismissible icon={<IconUser />}>With Icon</Tag>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[--color-border-default]">
            <h2 className="text-2xl font-semibold tracking-tight">Tabs</h2>
            <Tag variant="neutral" icon={<IconCode />}>Component</Tag>
          </div>

          <div className="bg-[--color-surface-default] rounded-xl border border-[--color-border-default] shadow-sm overflow-hidden">
            <Tabs items={tabItems} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
