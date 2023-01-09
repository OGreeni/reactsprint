'use client';
import React, { useState } from 'react';

import RedirectToSignInWrapper from './redirect-to-sign-in-wrapper';

// TODO: refactor (current workaround)

export default function LoginButton() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
    // prevent state batching (workround)
    setTimeout(() => {
      setActive(false);
    }, 0);
  };

  return (
    <>
      <button onClick={() => handleClick()}>Login</button>
      {active && <RedirectToSignInWrapper />}
    </>
  );
}
