'use client';
import React, { useState } from 'react';

interface Props {
  hints: string[];
}

export default function HintsList({ hints }: Props) {
  const [showHints, setShowHints] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);

  const revealHint = () => {
    if (hintIndex < hints.length) {
      setHintIndex((prev) => prev + 1);
    }
  };

  return (
    <div>
      <button
        className="mx-auto rounded-md bg-white/20 p-2 text-lg font-bold text-purple-900 shadow-sm transition-all hover:scale-110 hover:rounded-xl hover:text-purple-700 hover:shadow-md"
        onClick={() => setShowHints(!showHints)}
      >
        {showHints ? 'Hide' : 'Show'} hints{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`h-6 w-6 rotate-90 transition-transform ${
            showHints && 'rotate-180'
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      {showHints && (
        <>
          <button className="text-purple-900" onClick={() => revealHint()}>
            Reveal hint
          </button>
          <ul>
            {hints.slice(0, hintIndex + 1).map((hint, index) => (
              <li key={index}>
                {index + 1}. {hint}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
