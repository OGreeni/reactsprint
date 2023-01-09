import React from 'react';

import Category from './category';

const categories = [
  'useState',
  'Custom hooks',
  'useEffect',
  'useRef',
  'forms',
  'Event handling',
];

export default function Sidebar() {
  return (
    <aside className="mx-auto flex h-full w-full flex-col items-center justify-center gap-4 rounded-md bg-white/10 py-2 px-4 backdrop-blur lg:block lg:flex-row lg:gap-0">
      <div>
        <p className="text-center text-xl font-bold text-purple-900">
          Categories
        </p>
        <div className="hidden h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-500 lg:block" />
        <ul className="flex flex-wrap justify-center gap-2 lg:block lg:gap-0">
          {categories.map((category) => (
            <Category key={category}>{category}</Category>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-center text-xl font-bold text-purple-900">
          Difficulty
        </p>
        <div className="hidden h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-500 lg:block" />
        <ul className="flex gap-2 lg:block lg:gap-0">
          <Category>Easy</Category>
          <Category>Medium</Category>
          <Category>Hard</Category>
        </ul>
      </div>
    </aside>
  );
}
