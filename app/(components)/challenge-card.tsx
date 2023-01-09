import React from 'react';
import Link from 'next/link';

import { titleCase } from '../../utils';

interface Props {
  title: string;
  slug: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export default function ChallengeCard({
  title,
  slug,
  description,
  difficulty,
}: Props) {
  const difficultyColor =
    difficulty === 'easy'
      ? 'text-green-500'
      : difficulty === 'hard'
      ? 'text-orange-500'
      : 'text-red-500';

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
          <span className={`${difficultyColor} font-bold`}>
            {difficulty.toUpperCase()}
          </span>
        </p>
      </div>
    </Link>
  );
}
