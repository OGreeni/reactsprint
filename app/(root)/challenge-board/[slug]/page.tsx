import React from 'react';

import DifficultyTag from '@components/difficulty-tag';
import { StyledAnchor, StyledButton } from '@components/styled';

interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  return (
    <section className="flex gap-4 shadow-md">
      <aside className="flex basis-72 flex-col justify-between rounded-md bg-white/10 p-2 text-purple-900">
        <div className="flex flex-col gap-5">
          <h2 className="pt-5 text-center text-3xl font-bold">
            <span className="whitespace-nowrap">Challenge #1:</span> Controlled
            Input
          </h2>
          <div className="my-2 block h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-500" />
          <p className="text-xl">
            <span className="font-bold">Created at:</span> 1/1/2022
          </p>
          <p className="text-xl">
            <span className="font-bold">Difficulty: </span>
            <DifficultyTag difficulty="easy" />
          </p>
          <p className="text-lg">
            <span className="text-xl font-bold">Tags: </span>
            {/* TODO: tags link to challenge board with tag as selected filter */}
            <button>#useState</button> <button>#Event-Handling</button>{' '}
            <button>#Forms</button>
          </p>
          <p className="text-xl">
            <span className="font-bold">Description:</span> Use state to capture
            the value of the following email input and display it in the alert
            on submit.
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
          <StyledButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
          </StyledButton>
          <span className="text-3xl font-bold">0</span>
        </div>
      </aside>
      <div className="grow rounded-md bg-white/10 p-4">
        <iframe
          src="https://codesandbox.io/embed/challenge-1-js-xnnqp5?fontsize=14&hidenavigation=1&theme=dark"
          className="h-full w-full rounded-md border-4 border-white/40 shadow-xl"
        />
      </div>
    </section>
  );
}
