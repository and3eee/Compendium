'use client';

import { Box, Button, Card, NativeSelect, Stack, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useSession } from 'next-auth/react';
import { CreatePlayerProfileFromForm } from './PlayerControl';

export default function CreatePlayerProfile() {
  const { data: session, status } = useSession();

  const form = useForm({
    initialValues: {
      email: session?.user?.email!,
    },
  });

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = await CreatePlayerProfileFromForm(form.values);
  };

  return (
    <form onSubmit={create}>
      <Card w="50rem" shadow="sm" padding="lg" radius="sm">
        <Title order={2}>Create Player Profile</Title>
        <Stack>
          <Button type="submit">Create Player Profile</Button>
        </Stack>
      </Card>
    </form>
  );
}
