import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...attrs }: Props) {
  return (
    <button
      {...attrs}
      className={`block rounded-xl border-2 border-white bg-gradient-to-tr from-purple-500 to-teal-500 p-4 font-bold text-white transition-all hover:scale-110 hover:rounded-2xl hover:opacity-75 hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  );
}
