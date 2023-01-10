import React from 'react';
import Link from 'next/link';

import DifficultyTag from '@components/difficulty-tag';

import { titleCase } from '../utils';

interface Props {
  title: string;
  slug: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  challengeNumber: number;
}

export default function ChallengeCard({
  title,
  slug,
  description,
  difficulty,
}: Props) {
  return (
    <Link href={`/challenge-board/${slug}`}>
      <div className="flex flex-col gap-3 rounded-md bg-white/10 p-2 shadow-sm transition-all hover:scale-110 hover:rounded-xl hover:text-purple-900 hover:shadow-md">
        <h3 className="text-2xl font-bold text-purple-900">
          {titleCase(title)}
        </h3>
        <p>
          <span className="font-bold">Description: </span>
          {description.toLowerCase()}
        </p>
        <p>
          <span className={'font-bold'}>Difficulty: </span>{' '}
          <DifficultyTag difficulty="easy" />
        </p>
      </div>
    </Link>
  );
}
