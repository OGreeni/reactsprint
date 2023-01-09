import React from 'react';

import StyledLink from '@app/(components)/(styled)/styled-link';

export default function Footer() {
  return (
    <footer className="p-2 text-center text-lg text-purple-500">
      Made with ♡ by{' '}
      <StyledLink href="/" className="text-purple-900">
        OGreeni
      </StyledLink>{' '}
      on{' '}
      <StyledLink href="/" className="text-purple-900">
        GitHub
      </StyledLink>
    </footer>
  );
}
