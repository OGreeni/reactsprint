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
    <aside className="mx-auto h-full w-full rounded-md bg-white/10 py-2 px-4 backdrop-blur">
      <p className="text-center font-bold text-purple-900">Categories</p>
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-500" />
      <ul>
        {categories.map((category) => (
          <Category key={category}>{category}</Category>
        ))}
      </ul>
      <p className="text-center font-bold text-purple-900">Difficulty</p>
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-500" />
      <ul>
        <Category>Easy</Category>
        <Category>Medium</Category>
        <Category>Hard</Category>
      </ul>
    </aside>
  );
}
