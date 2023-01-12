'use client';
import React from 'react';
import Link from 'next/link';
import axios from 'axios';

import ChallengeCard from '@components/challenge-card';
import { useQuery } from '@tanstack/react-query';

import type { Category } from './sidebar';

export interface ChallengeDocument {
  id: string;
  created: string;
  index: number;
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
  likes: number;
  tags: Category;
}

interface Props {
  categoryFilter: Category | null;
  difficultyFilter: 'easy' | 'medium' | 'hard' | null;
}

export default function MappedChallenges({
  categoryFilter,
  difficultyFilter,
}: Props) {
  const getChallenges = async () => {
    const { data } = await axios.get('/api/challenges');
    return data;
  };

  const query = useQuery<{ challenges: ChallengeDocument[] }>({
    queryKey: ['challenges'],
    queryFn: getChallenges,
  });

  if (categoryFilter && difficultyFilter) {
    return query.data?.challenges
      .filter(
        (challenge) =>
          challenge.tags === categoryFilter &&
          challenge.difficulty === difficultyFilter
      )
      .map((challenge) => (
        <Link href={`/challenge-board/${challenge.slug}`} key={challenge.id}>
          <ChallengeCard {...challenge} />
        </Link>
      ));
  } else if (categoryFilter && !difficultyFilter) {
    return query.data?.challenges
      .filter((challenge) => challenge.tags === categoryFilter)
      .map((challenge) => (
        <Link href={`/challenge-board/${challenge.slug}`} key={challenge.id}>
          <ChallengeCard {...challenge} />
        </Link>
      ));
  } else if (!categoryFilter && difficultyFilter) {
    return query.data?.challenges
      .filter((challenge) => challenge.difficulty === difficultyFilter)
      .map((challenge) => (
        <Link href={`/challenge-board/${challenge.slug}`} key={challenge.id}>
          <ChallengeCard {...challenge} />
        </Link>
      ));
  } else {
    return query.data?.challenges.map((challenge) => (
      <Link href={`/challenge-board/${challenge.slug}`} key={challenge.id}>
        <ChallengeCard {...challenge} />
      </Link>
    ));
  }
}
