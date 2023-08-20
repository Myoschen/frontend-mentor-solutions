import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/utils/classnames';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  featured?: boolean;
}

export function Button({
  children,
  type = 'button',
  className,
  featured = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex w-full items-center justify-center rounded-lg border border-transparent px-4 py-3 text-xs tracking-widest transition-colors ease-out',
        featured
          ? 'bg-white text-grayish-blue-500 hover:border-white hover:bg-transparent hover:text-white'
          : 'relative isolate text-white before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r before:from-[#a3a8f0] before:to-[#696fdd] before:transition-opacity before:ease-out hover:border-grayish-blue-500 hover:bg-none hover:text-grayish-blue-500 hover:before:opacity-0',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
