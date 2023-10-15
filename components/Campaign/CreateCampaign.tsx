'use client';

import { Box, Button, Card, NativeSelect, Stack, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useSession } from 'next-auth/react';
import { CreateCampaign } from './CampaignControl';
import { useRouter } from 'next/navigation';

export default function CreateCampaignCard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const form = useForm({
    initialValues: {
      name: 'Campaign',
    },
  });

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = await CreateCampaign(form.values);
    router.refresh();
  };

  return (
    <Card radius="xl" withBorder>
      <form onSubmit={create}>
        <Title>Create Campaign</Title>
        <Stack>
          <TextInput label="Campaign Name" {...form.getInputProps('name')} />

          <Button type="submit">Create Campaign</Button>
        </Stack>
      </form>
    </Card>
  );
}
