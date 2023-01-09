import React from 'react';

import StyledLink from '@app/(components)/(styled)/styled-link';

export default function Footer() {
  return (
    <footer className="p-2 text-center text-lg font-bold">
      Made with ❤ by <StyledLink href="/">OGreeni</StyledLink> on{' '}
      <StyledLink href="/">GitHub</StyledLink>
    </footer>
  );
}
