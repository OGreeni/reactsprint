'use client';

import React, { useState } from 'react';

import { Sandpack } from '@codesandbox/sandpack-react';

export default function SandpackWrapper() {
  const [language, setLanguage] = useState<'javascript' | 'typescript'>(
    'javascript'
  );

  // TODO: toggle between JS & TS versions

  return (
    <div className="shadow-xl">
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
      <Sandpack
        template="react"
        options={{
          externalResources: [
            'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
          ],
          showInlineErrors: true,
          showConsoleButton: true,
          editorHeight: '950px',
          recompileMode: 'delayed',
          recompileDelay: 200,
        }}
        files={{
          '/form.js': {
            active: false,
          },
        }}
      />
    </div>
  );
}
