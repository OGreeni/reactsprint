import React from 'react';

interface DifficultyTagProps {
  difficulty: 'easy' | 'medium' | 'hard';
}

export default function DifficultyTag({ difficulty }: DifficultyTagProps) {
  const difficultyColor =
    difficulty === 'easy'
      ? 'text-green-500'
      : difficulty === 'hard'
      ? 'text-orange-500'
      : 'text-red-500';

  return (
    <span className={`${difficultyColor} font-bold`}>
      {difficulty.toUpperCase()}
    </span>
  );
}
