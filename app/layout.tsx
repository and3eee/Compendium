import '@mantine/core/styles.css';
import React, { Suspense } from 'react';
import {
  MantineProvider,
  ColorSchemeScript,
  AppShell,
  Burger,
  Group,
  Skeleton,
  Loader,
  Stack,
  Container,
  Center,
} from '@mantine/core';
import AuthProvider from '@/components/Auth/AuthProvider';
import '@mantine/dates/styles.css';
import { useDisclosure } from '@mantine/hooks';
import NavBar from '@/components/NavBar';

import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compendium',
  description: '',
};

export default async function RootLayout({ children }: { children: any }) {
  const campaigns = await prisma.campaign.findMany();
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: { email: session?.user?.email },
    include: { playerProfile: true },
  });
  return (
    <html lang="en">
      <AuthProvider>
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
        </head>
        <body>
          <MantineProvider defaultColorScheme="dark">
            <Container fluid p={8}>
              <Suspense fallback={<Loader color="orange" type="dots" size="lg" />}>
                <NavBar campaigns={campaigns} user={user} />
              </Suspense>
              <Suspense
                fallback={
                  <Center>
                    <Loader color="orange" type="dots" size="lg" />
                  </Center>
                }
              >
                <Container p={4} fluid>
                  {children}
                </Container>
              </Suspense>
            </Container>
          </MantineProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
