import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function Category({ children }: Props) {
  return (
    <li className="rounded-md bg-purple-900/20 p-2 text-cyan-900 transition-colors hover:bg-purple-900/10 hover:text-purple-500 lg:bg-transparent">
      <button className="h-full w-full whitespace-nowrap p-2  lg:whitespace-normal">
        {children}
      </button>
    </li>
  );
}
