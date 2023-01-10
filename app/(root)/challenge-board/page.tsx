import React from 'react';

import ChallengeCard from '@components/challenge-card';

import MappedChallenges from './mapped-challenges';
import Sidebar from './sidebar';

export default function Page() {
  // TODO: filters functionality

  return (
    <section>
      <h1 className="text-center text-5xl text-purple-900">Challenge Board</h1>
      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_8fr]">
        <Sidebar />
        <div className="grid grid-rows-4 gap-5 rounded-md bg-white/10 p-5 lg:grid-cols-fill-96">
          {/* @ts-ignore */}
          <MappedChallenges />
        </div>
      </div>
    </section>
  );
}
