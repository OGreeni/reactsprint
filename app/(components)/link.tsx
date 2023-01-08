import React from 'react';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({ children, className, ...attrs }: Props) {
  return (
    <a
      {...attrs}
      className={`relative transition-colors after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-center after:scale-0 after:bg-gradient-to-r after:from-teal-500 after:to-purple-500 after:transition-transform hover:text-purple-500 hover:after:scale-100 ${className}`}
    >
      {children}
    </a>
  );
}
