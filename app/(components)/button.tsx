import React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...attrs }: Props) {
  return (
    <button
      {...attrs}
      className={`block rounded-xl border-2 border-white bg-gradient-to-tr from-purple-500 to-teal-500 p-4 font-bold text-white transition-all hover:rounded-2xl hover:border-orange-200 hover:text-orange-200 hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  );
}
