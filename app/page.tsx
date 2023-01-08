import React from 'react';

import LottieWrapper from '@components/lottie-wrapper';
import animationData from '@json/92672-animated-shapes.json';

export default function Home() {
  return (
    <>
      <h1 className="text-9xl font-black">ReactSprint</h1>
      <LottieWrapper loop animationData={animationData} play />
    </>
  );
}
