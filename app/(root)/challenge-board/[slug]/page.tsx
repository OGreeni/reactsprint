import React, { useState } from 'react';

interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  return (
    <section className="flex gap-4">
      <aside className="grow rounded-md bg-white/10">
        <h2>TITLE</h2>
      </aside>
      <div className="grow rounded-md bg-white/10 p-4">
        <iframe
          src="https://codesandbox.io/embed/challenge-1-js-xnnqp5?fontsize=14&hidenavigation=1&theme=dark"
          className="h-full w-full rounded-md border-4 border-[#191919]"
        />
      </div>
    </section>
  );
}
