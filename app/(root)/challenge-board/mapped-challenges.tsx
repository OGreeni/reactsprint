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
  tags: Category[];
}

interface Props {
  categoryFilter: Category | null;
  difficultyFilter: 'easy' | 'medium' | 'hard' | null;
  searchQuery: string;
}

export default function MappedChallenges({
  categoryFilter,
  difficultyFilter,
  searchQuery,
}: Props) {
  const getChallenges = async () => {
    const { data } = await axios.get('/api/challenges');
    return data;
  };

  const query = useQuery<{ challenges: ChallengeDocument[] }>({
    queryKey: ['challenges'],
    queryFn: getChallenges,
  });

  const filteredData = query.data?.challenges.filter((challenge) => {
    if (searchQuery) {
      return challenge.title.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  if (categoryFilter && difficultyFilter) {
    return filteredData
      ?.filter(
        (challenge) =>
          challenge.tags.includes(categoryFilter) &&
          challenge.difficulty === difficultyFilter
      )
      .map((challenge) => (
        <Link href={`/challenge-board/${challenge.slug}`} key={challenge.id}>
          <ChallengeCard {...challenge} />
        </Link>
      ));
  } else if (categoryFilter && !difficultyFilter) {
    return filteredData
      ?.filter((challenge) => challenge.tags.includes(categoryFilter))
      .map((challenge) => (
        <Link href={`/challenge-board/${challenge.slug}`} key={challenge.id}>
          <ChallengeCard {...challenge} />
        </Link>
      ));
  } else if (!categoryFilter && difficultyFilter) {
    return filteredData
      ?.filter((challenge) => challenge.difficulty === difficultyFilter)
      .map((challenge) => (
        <Link href={`/challenge-board/${challenge.slug}`} key={challenge.id}>
          <ChallengeCard {...challenge} />
        </Link>
      ));
  } else {
    return filteredData?.map((challenge) => (
      <Link href={`/challenge-board/${challenge.slug}`} key={challenge.id}>
        <ChallengeCard {...challenge} />
      </Link>
    ));
  }
}
