import React from 'react';

import ChallengeCard from '@components/challenge-card';

import Sidebar from './sidebar';

export default function Page() {
  return (
    <section>
      <h1 className="text-center text-5xl text-purple-900">
        Challenge Board 🎯
      </h1>
      <div className="mt-10 grid grid-cols-[1fr_8fr] gap-5">
        <Sidebar />
        <div className="grid grid-cols-3 grid-rows-4 gap-5 rounded-md bg-white/10 p-5">
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
