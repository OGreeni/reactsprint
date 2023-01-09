import React from 'react';

import LottieWrapper from '@components/lottie-wrapper';
import StyledLink from '@components/styled/styled-link';
import animationData from '@json/92672-animated-shapes.json';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-10 flex w-full justify-between bg-white/10 px-5 text-3xl backdrop-blur">
      <div className="flex items-center gap-3 font-bold">
        <LottieWrapper
          loop
          animationData={animationData}
          play
          className="w-20"
        />
        <StyledLink href="/" className="text-purple-900">
          ReactSprint
        </StyledLink>
      </div>
      <div className="flex items-center gap-5 text-2xl">
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/challenges">Challenges</StyledLink>
        <StyledLink href="/contribute">Contribute</StyledLink>
      </div>
    </nav>
  );
}
