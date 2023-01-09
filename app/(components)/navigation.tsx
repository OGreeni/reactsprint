'use client';
import React, { useState } from 'react';

import StyledLink from '@app/(components)/(styled)/styled-link';
import LottieWrapper from '@components/lottie-wrapper';
import animationData from '@json/92672-animated-shapes.json';

import Hamburger from './hamburger';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 z-10 flex w-full justify-between bg-white/10 px-5 text-3xl text-purple-900 backdrop-blur">
      <div className="flex items-center gap-3 font-bold">
        <LottieWrapper
          loop
          animationData={animationData}
          play
          className="w-20"
        />
        <StyledLink href="/">ReactSprint</StyledLink>
      </div>
      <div className="hidden items-center gap-5 text-2xl lg:flex">
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/challenge-board">Challenge Board</StyledLink>
        <StyledLink href="/contribute">Contribute</StyledLink>
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div
        className={`${
          !isOpen && 'pointer-events-none opacity-0'
        } fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-32 bg-white/90 transition-opacity`}
      >
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/challenge-board">Challenge Board</StyledLink>
        <StyledLink href="/contribute">Contribute</StyledLink>
      </div>
    </nav>
  );
}
