import React from 'react';

import { Sandpack } from '@codesandbox/sandpack-react';
import DifficultyTag from '@components/difficulty-tag';
import SandpackWrapper from '@components/sandpack-wrapper';
import { StyledAnchor } from '@components/styled';
import db from '@utils/db';

import type { ChallengeDocument } from '../mapped-challenges';

import LikeCounter from './like-counter';
interface Props {
  params: { slug: string };
}

export default async function Page({ params }: Props) {
  const entry = await db
    .collection('challenges')
    .where('slug', '==', params.slug)
    .get();
  const entryData = entry.docs.map((entry) => ({
    ...(entry.data() as ChallengeDocument),
    id: entry.id,
  }))[0];

  return (
    <section className="flex gap-4 shadow-md">
      <aside className="flex basis-72 flex-col justify-between rounded-md bg-white/10 p-2 text-purple-900">
        <div className="flex flex-col gap-5">
          <h2 className="pt-5 text-center text-3xl font-bold">
            <span className="whitespace-nowrap">
              Challenge &#35;{entryData.index}:
            </span>{' '}
            {entryData.title}
          </h2>
          <div className="my-2 block h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-500" />
          <p className="text-xl">
            <span className="font-bold">Created at:</span>{' '}
            {new Date(entryData.created).toDateString()}
          </p>
          <p className="text-xl">
            <span className="font-bold">Difficulty: </span>
            <DifficultyTag difficulty={entryData.difficulty} />
          </p>
          <p className="text-lg">
            <span className="text-xl font-bold">Tags: </span>
            {/* TODO: tags link to challenge board with tag as selected filter */}
            <button>#useState</button> <button>#Event-Handling</button>{' '}
            <button>#Forms</button>
          </p>
          <p className="text-xl">
            <span className="font-bold">Description:</span>{' '}
            {entryData.description}
          </p>
          <StyledAnchor
            href="/"
            className="block text-center text-xl font-bold"
            target="_blank"
          >
            View Solution
          </StyledAnchor>
        </div>
        <div className="flex items-center justify-center gap-5">
          <LikeCounter challengeId={entryData.id} />
        </div>
      </aside>
      <div className="grow rounded-md bg-white/10 p-4">
        {/* <iframe
          src="https://codesandbox.io/embed/challenge-1-js-xnnqp5?fontsize=14&hidenavigation=1&theme=dark"
          className="h-full w-full rounded-md border-4 border-white/40 shadow-xl"
        /> */}
        <SandpackWrapper />
      </div>
    </section>
  );
}
