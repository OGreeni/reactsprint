'use client';
import React, { useState } from 'react';

import ChallengeCard from '@components/challenge-card';

import Sidebar from './sidebar';

export default function Page() {
  // null --> initial state (nothing selected, everything shown)
  const [filters, setFilters] = useState<{
    categories: {
      useState: boolean;
      customHooks: boolean;
      useEffect: boolean;
      useRef: boolean;
      forms: boolean;
      eventHandling: boolean;
    };
    difficulty: {
      easy: boolean;
      medium: boolean;
      hard: boolean;
    };
  } | null>(null);

  return (
    <section>
      <h1 className="text-center text-5xl text-purple-900">
        Challenge Board 🎯
      </h1>
      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_8fr]">
        <Sidebar />
        <div className="grid grid-rows-4 gap-5 rounded-md bg-white/10 p-5 lg:grid-cols-fill-96">
          <ChallengeCard
            title="test challenge"
            description="lorem lorem lorem lorem orem iermie mroim foiamfiomwoi maio moimiom"
            difficulty="easy"
            slug="test"
          />{' '}
          <ChallengeCard
            title="test challenge"
            description="lorem lorem lorem lorem orem iermie mroim foiamfiomwoi maio moimiom"
            difficulty="easy"
            slug="test"
          />
          <ChallengeCard
            title="test challenge"
            description="lorem lorem lorem lorem orem iermie mroim foiamfiomwoi maio moimiom"
            difficulty="easy"
            slug="test"
          />
          <ChallengeCard
            title="test challenge"
            description="lorem lorem lorem lorem orem iermie mroim foiamfiomwoi maio moimiom"
            difficulty="easy"
            slug="test"
          />
          <ChallengeCard
            title="test challenge"
            description="lorem lorem lorem lorem orem iermie mroim foiamfiomwoi maio moimiom"
            difficulty="easy"
            slug="test"
          />
        </div>
      </div>
    </section>
  );
}
