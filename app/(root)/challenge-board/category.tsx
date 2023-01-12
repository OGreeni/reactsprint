'use client';
import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export default function Category({
  children,
  className,
  active,
  ...attrs
}: Props) {
  return (
    <li
      className={`h-max rounded-md bg-purple-900/20 p-2 text-cyan-900 transition-colors hover:bg-purple-900/10 hover:text-purple-500 lg:bg-transparent ${
        active && 'text-purple-500'
      }`}
    >
      <button
        className={`h-full w-full whitespace-nowrap p-2  lg:whitespace-normal ${className}`}
        {...attrs}
      >
        {children}
      </button>
    </li>
  );
}
