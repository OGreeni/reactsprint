import React from 'react';
import Link from 'next/link';

import LottieWrapper from '@components/lottie-wrapper';
import StyledButton from '@components/styled/styled-button';
import animationData from '@json/92672-animated-shapes.json';

export default function Home() {
  return (
    <section className="flex h-full items-center justify-center gap-5">
      <div>
        <p className="text-xl font-bold text-purple-900">
          Hey there 👋 , welcome to
        </p>
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-center text-9xl font-black text-transparent">
          ReactSprint
        </h1>
        <p className="text-center text-2xl font-bold text-purple-900">
          Level up your React.js knowledge with free challenges.
        </p>
        <Link href="/challenges">
          <StyledButton className="mx-auto mt-10 text-xl">
            Explore Challenges
          </StyledButton>
        </Link>
      </div>
      <LottieWrapper
        loop
        animationData={animationData}
        play
        className="w-[550px]"
      />
    </section>
  );
}
