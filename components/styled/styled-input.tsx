import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function StyledInput({ className, ...attrs }: Props) {
  return (
    <input
      {...attrs}
      className={`block w-[70vw] max-w-[40rem] rounded-md border-2 border-white/40 bg-white/40 p-2 shadow-sm outline-none transition-all focus:scale-105 focus:border-purple-500 focus:shadow-md ${className}`}
    />
  );
}
