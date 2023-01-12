'use client';

import React, { useState } from 'react';

import { Sandpack } from '@codesandbox/sandpack-react';
import { aquaBlue } from '@codesandbox/sandpack-themes';

interface Props {
  javascript: {
    starter: string;
    solution: string;
  };
  typescript: {
    starter: string;
    solution: string;
  };
}

export default function SandpackWrapper({ javascript, typescript }: Props) {
  const [language, setLanguage] = useState<'javascript' | 'typescript'>(
    'javascript'
  );
  const [showSolution, setShowSolution] = useState(false);

  const starter =
    language === 'javascript' ? javascript.starter : typescript.starter;
  const solution =
    language === 'javascript' ? javascript.solution : typescript.solution;

  return (
    <div className="relative shadow-xl">
      <button
        onClick={() => setLanguage('javascript')}
        className={`rounded-tl-lg border-2 border-white/20 bg-white/30 p-2 text-purple-900 transition-colors ${
          language === 'javascript' && 'border-[#ffe923]'
        }`}
      >
        JavaScript
      </button>
      <button
        onClick={() => setLanguage('typescript')}
        className={`rounded-tr-lg border-2 border-white/20 bg-white/30 p-2 text-purple-900 transition-colors ${
          language === 'typescript' && 'border-[#007acc]'
        }`}
      >
        TypeScript
      </button>

      <div className="relative">
        <Sandpack
          template={language === 'javascript' ? 'react' : 'react-ts'}
          options={{
            externalResources: [
              'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
            ],
            showInlineErrors: true,
            showTabs: true,
            showConsoleButton: true,
            editorHeight: '950px',
            recompileMode: 'delayed',
            recompileDelay: 200,
          }}
          files={
            language === 'javascript'
              ? {
                  '/App.js': starter,
                }
              : {
                  '/App.tsx': starter,
                }
          }
        />
        <div
          className={`absolute inset-0 origin-right scale-0 transition-transform ${
            showSolution && 'scale-100'
          }`}
        >
          <Sandpack
            template={language === 'javascript' ? 'react' : 'react-ts'}
            theme={aquaBlue}
            options={{
              externalResources: [
                'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
              ],
              readOnly: true,
              showInlineErrors: true,
              showTabs: true,
              showConsoleButton: true,
              editorHeight: '950px',
              recompileMode: 'delayed',
              recompileDelay: 200,
            }}
            files={
              language === 'javascript'
                ? {
                    '/App.js': solution,
                  }
                : {
                    '/App.tsx': solution,
                  }
            }
          />
        </div>
      </div>
      <button
        onClick={() => setShowSolution(!showSolution)}
        className="absolute top-1/2 right-0 z-10 flex origin-right flex-col items-center justify-center rounded-l-xl bg-purple-500/30 p-1 text-purple-900 shadow-md transition-all hover:scale-110 hover:opacity-80"
      >
        {showSolution ? 'Hide' : 'View'} Solution
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`h-6 w-6 transition-transform ${
            showSolution && 'rotate-180'
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
