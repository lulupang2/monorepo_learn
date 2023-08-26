'use client'; // Error components must be Client Components

import { Container } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container w={'100vw'} bg={'palegreen'}>
      <h2>Something went wrong!</h2>
      <h1>
        {error.name}: {error.message}
      </h1>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </Container>
  );
}
