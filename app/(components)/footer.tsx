import React from 'react';

import { StyledAnchor } from './(styled)';

export default function Footer() {
  return (
    <footer className="p-2 text-center text-lg text-purple-500">
      Made with ♡ by{' '}
      <StyledAnchor
        href="https://github.com/ogreeni"
        className="text-purple-900"
        target="_blank"
      >
        OGreeni
      </StyledAnchor>{' '}
      on{' '}
      <StyledAnchor
        href="https://github.com/ogreeni/reactsprint"
        className="text-purple-900"
        target="_blank"
      >
        GitHub
      </StyledAnchor>
    </footer>
  );
}
