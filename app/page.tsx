import React from 'react';

import LottieWrapper from '@components/lottie-wrapper';
import animationData from '@json/92672-animated-shapes.json';

export default function Home() {
  return (
    <>
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-9xl font-black text-transparent">
        ReactSprint
      </h1>
      <LottieWrapper loop animationData={animationData} play />
    </>
  );
}
