import React from 'react';
import RedirectToSignInWrapper from 'components/auth/redirect-to-sign-in-wrapper';

import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta';
import { StyledAnchor } from '@components/styled';

import ContributeForm from './contribute-form';

export default function Page() {
  return (
    <>
      <SignedIn>
        <section className="flex flex-col gap-4 text-purple-900">
          <h1 className="text-center text-5xl">
            Contribute to <span className="font-bold">ReactSprint</span>
          </h1>
          <p className="text-center text-lg">
            We appreciate your interest in contributing! Please enter your
            challenge details below:
          </p>
          <ContributeForm />
          <p className="text-center text-lg">
            Alternatively, open an issue in our{' '}
            <StyledAnchor
              href="https://github.com/ogreeni/reactsprint"
              className="font-bold"
              target="_blank"
            >
              GitHub repo
            </StyledAnchor>
          </p>
        </section>
      </SignedIn>
      <SignedOut>
        <RedirectToSignInWrapper />
      </SignedOut>
    </>
  );
}
