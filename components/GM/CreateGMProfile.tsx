'use client';

import { Box, Button, Card, NativeSelect, Stack, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useSession } from 'next-auth/react';
import { CreateGMProfileFromForm } from './GMProfileControl';

export default function CreateGMProfile() {
  const { data: session, status } = useSession();

  const form = useForm({
    initialValues: {
      email: session?.user?.email!,
      type: 'REMOTE',
    },
  });

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = await CreateGMProfileFromForm(form.values);
  };

  return (
    <form onSubmit={create}>
      <Card w="50rem" shadow="sm" padding="lg" radius="sm" >
        <Title order={2}>Create GM Profile</Title>
        <Stack>
          <NativeSelect
            label="Session Type"
            aria-label="Format Selection"
            {...form.getInputProps('type')}
            data={[
              { label: 'Remote', value: 'REMOTE' },
              { label: 'Hybrid', value: 'HYBRID' },
              { label: 'In Person', value: 'INPERSON' },
            ]}
          />
          <Button type="submit">Create GM Profile</Button>
        </Stack>
      </Card>
    </form>
  );
}
