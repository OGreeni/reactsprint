import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function Category({ children }: Props) {
  return (
    <li className="text-cyan-900 transition-colors hover:text-purple-500">
      <button className="h-full w-full p-2">{children}</button>
    </li>
  );
}
