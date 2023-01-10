import React from 'react';
import Link from 'next/link';

import DifficultyTag from '@components/difficulty-tag';

import { titleCase } from '../utils';

interface Props {
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  index: number;
}

export default function ChallengeCard({
  title,
  description,
  difficulty,
  index,
}: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-white/10 p-2 shadow-sm transition-all hover:scale-110 hover:rounded-xl hover:text-purple-900 hover:shadow-md">
      <h3 className="text-2xl font-bold text-purple-900">
        {index}. {titleCase(title)}
      </h3>
      <p>
        <span className="font-bold">Description: </span>
        {description.toLowerCase()}
      </p>
      <p>
        <span className={'font-bold'}>Difficulty: </span>{' '}
        <DifficultyTag difficulty={difficulty} />
      </p>
    </div>
  );
}
