'use client';
import React from 'react';
import type { LottieProps } from 'react-lottie-player';
import Lottie from 'react-lottie-player';

export default function LottieWrapper(props: LottieProps) {
  return <Lottie {...props} />;
}
