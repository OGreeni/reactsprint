'use client';
import { useEffect } from 'react';

import { StyledButton } from '@components/styled';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1 className="text-center text-5xl">Something went wrong!</h1>
      <StyledButton onClick={() => reset()}>Try Again</StyledButton>
    </div>
  );
}
