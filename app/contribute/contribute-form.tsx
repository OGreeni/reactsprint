'use client';
import React from 'react';

import { StyledButton, StyledInput } from '@components/(styled)';

// TODO: require login to submit

export default function ContributeForm() {
  return (
    <form className="mx-auto flex w-max flex-col items-center gap-2 rounded-md bg-white/10 p-10">
      <div>
        <label htmlFor="">Title</label>
        <StyledInput type="text" />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <StyledInput type="text" />
      </div>
      <div>
        <label htmlFor="">Difficulty</label>
        <StyledInput type="text" />
      </div>
      <div>
        <label htmlFor="">JavaScript codesandbox starter template link</label>
        <StyledInput type="text" />
      </div>
      <div>
        <label htmlFor="">JavaScript codesandbox solution link</label>
        <StyledInput type="text" />
      </div>
      <div>
        <label htmlFor="">TypeScript codesandbox starter template link</label>
        <StyledInput type="text" />
      </div>
      <div>
        <label htmlFor="">TypeScript codesandbox solution link</label>
        <StyledInput type="text" />
      </div>
      <StyledButton>Submit Challenge</StyledButton>
    </form>
  );
}
