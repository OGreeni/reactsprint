'server-only';
import React from 'react';

import ChallengeCard from '@components/challenge-card';
import db from '@utils/db';

interface ChallengeDocument {
  created: string;
  title: string;
  description: string;
  javascript: {
    starter: string;
    solution: string;
  };
  typescript: {
    starter: string;
    solution: string;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  slug: string;
}

export default async function MappedChallenges() {
  // const entries = await db.collection('challenges').orderBy('created').get();
  // const entriesData = entries.docs.map((entry, i) => ({
  //   index: i,
  //   id: entry.id,
  //   ...(entry.data() as ChallengeDocument),
  // }));

  // return entriesData.map((entry) => (
  //   <ChallengeCard
  //     challengeNumber={entry.index}
  //     key={entry.id}
  //     difficulty={entry.difficulty}
  //     title={entry.title}
  //     description={entry.description}
  //     slug={entry.slug}
  //   />
  // ));
  return <h1>FIX</h1>;
}
// TODO: incoroprate ReactQuery / SWR
