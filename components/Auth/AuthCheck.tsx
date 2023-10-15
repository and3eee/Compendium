'use client';

import { Center, Container, Loader } from '@mantine/core';
import { useSession } from 'next-auth/react';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return <>{children}</>;
  } else {
    if (status === 'loading')
      return (
        <Center>
          <Loader color="orange" type="dots" size="lg" />
        </Center>
      );
  }
}
