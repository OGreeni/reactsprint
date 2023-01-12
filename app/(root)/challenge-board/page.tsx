'use client';
import React, { useState } from 'react';

import { StyledInput } from '@components/styled';

import MappedChallenges from './mapped-challenges';
import Searchbar from './searchbar';
import type { Category } from './sidebar';
import Sidebar from './sidebar';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    'easy' | 'medium' | 'hard' | null
  >(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <section>
      <h1 className="text-center text-5xl text-purple-900">Challenge Board</h1>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_8fr]">
        <Sidebar
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedCategory={setSelectedCategory}
          setSelectedDifficulty={setSelectedDifficulty}
        />
        <div className="flex flex-col gap-5 bg-white/10 p-5">
          <Searchbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="grid grid-rows-4 gap-5 rounded-md lg:grid-cols-fill-96">
            {/* @ts-ignore */}
            <MappedChallenges
              categoryFilter={selectedCategory}
              difficultyFilter={selectedDifficulty}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
