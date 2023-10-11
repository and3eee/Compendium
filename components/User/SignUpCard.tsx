'use client';

import {
  Avatar,
  Burger,
  Button,
  Card,
  Container,
  Group,
  Menu,
  Stack,
  Text,
  rem,
} from '@mantine/core';

import { signIn, signOut } from 'next-auth/react';

export default function SignUpCard() {
  return (
    <Card
      padding="xs"
      radius="xl"
      mih="3rem"
      mah="10rem"
      miw="10rem"
      maw="15rem"
      withBorder
      shadow="md"
    >
      <Group justify="center" gap="0">
        <Button onClick={() => signIn()}>Sign-In</Button>
      </Group>
    </Card>
  );
}
