import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Category({ children, className, ...args }: Props) {
  return (
    <li className="rounded-md bg-purple-900/20 p-2 text-cyan-900 transition-colors hover:bg-purple-900/10 hover:text-purple-500 lg:bg-transparent">
      <button
        className={`h-full w-full whitespace-nowrap p-2  lg:whitespace-normal ${className}`}
        {...args}
      >
        {children}
      </button>
    </li>
  );
}
