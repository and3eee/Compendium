'use client';


import { Box, Button, Card, NativeSelect, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useSession } from 'next-auth/react';
import { CreateCampaign } from './CampaignControl';


export default function CreateCampaignCard() {
  const { data: session, status } = useSession();

  const form = useForm({
    initialValues: {
      name: 'Campaign',
    },
  });

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = await CreateCampaign(form.values);
  };

  return (
    <Card>
      <form onSubmit={create}>
        <Stack>

          <TextInput label="Campaign Name"   {...form.getInputProps('name')}/>

          <Button type="submit">Create Campaign</Button>
        </Stack>
      </form>
    </Card>
  );
}
