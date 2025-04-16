// Placeholder for Tooltip component
import React, { useState } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  arrow,
  Placement,
} from '@floating-ui/react';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  placement?: Placement; // top, bottom, left, right, etc.
  offsetValue?: number;
}

const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  placement = 'top', 
  offsetValue = 5 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = React.useRef(null);

  const {
    refs,
    floatingStyles,
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }, // Destructure arrow data safely
  } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(offsetValue),
      flip(),
      shift(),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]] ?? 'bottom';

  return (
    <>
      <span ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </span>
      <FloatingPortal>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="z-50 bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900 text-xs font-medium px-2 py-1 rounded-md shadow-sm"
            {...getFloatingProps()}
          >
            {content}
            <div
              ref={arrowRef}
              className="absolute bg-neutral-800 dark:bg-neutral-200 w-2 h-2 rotate-45"
              style={{
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                [staticSide]: '-4px', // Position arrow correctly
              }}
            />
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

export default Tooltip; 