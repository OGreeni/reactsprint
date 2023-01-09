import React from 'react';

import ContributeForm from './contribute-form';

export default function Page() {
  return (
    <section className="flex flex-col gap-4 text-purple-900">
      <h1 className="text-center text-5xl">
        Contribute to <span className="font-bold">ReactSprint</span>
      </h1>
      <p className="text-center">
        We appreciate your interest in contributing! Please enter your challenge
        details below:
      </p>
      <ContributeForm />
    </section>
  );
}
