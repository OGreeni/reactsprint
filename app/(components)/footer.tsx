import React from 'react';

import StyledLink from '@components/styled/styled-link';

export default function Footer() {
  return (
    <footer className="text-center text-lg text-purple-900">
      Made with ❤ by <StyledLink href="/">OGreeni</StyledLink> on{' '}
      <StyledLink href="/">GitHub</StyledLink>
    </footer>
  );
}
