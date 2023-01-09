import React from 'react';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function StyledLink({ children, className, ...attrs }: Props) {
  return (
    <Link
      {...attrs}
      className={`relative transition-colors after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-center after:scale-0 after:bg-gradient-to-r after:from-teal-500 after:to-purple-500 after:transition-transform hover:text-purple-500 hover:after:scale-100 ${className}`}
    >
      {children}
    </Link>
  );
}
