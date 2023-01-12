'use client';
import React, { useState } from 'react';

import MappedChallenges from './mapped-challenges';
import type { Category } from './sidebar';
import Sidebar from './sidebar';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    'easy' | 'medium' | 'hard' | null
  >(null);

  return (
    <section>
      <h1 className="text-center text-5xl text-purple-900">Challenge Board</h1>
      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_8fr]">
        <Sidebar
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedCategory={setSelectedCategory}
          setSelectedDifficulty={setSelectedDifficulty}
        />
        <div className="grid grid-rows-4 gap-5 rounded-md bg-white/10 p-5 lg:grid-cols-fill-96">
          {/* @ts-ignore */}
          <MappedChallenges
            categoryFilter={selectedCategory}
            difficultyFilter={selectedDifficulty}
          />
        </div>
      </div>
    </section>
  );
}
