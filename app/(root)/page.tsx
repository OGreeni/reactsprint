import React from 'react';
import Link from 'next/link';

import LottieWrapper from '@components/lottie-wrapper';
import StyledButton from '@components/styled/styled-button';
import animationData from '@json/92672-animated-shapes.json';

export default function Home() {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-5 lg:flex-row">
      <div>
        <p className="text-lg font-bold text-purple-900 lg:text-xl">
          Hey there 👋 , welcome to
        </p>
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-center text-6xl font-black text-transparent lg:text-9xl">
          ReactSprint
        </h1>
        <p className="text-center text-xl font-bold text-purple-900 lg:text-2xl">
          Level up your React.js skills with free challenges.
        </p>
        <Link href="/challenge-board">
          <StyledButton className="mx-auto mt-10 text-xl">
            Explore Challenges
          </StyledButton>
        </Link>
      </div>
      <LottieWrapper
        loop
        animationData={animationData}
        play
        className=" max-w-[550px]"
      />
    </section>
  );
}
