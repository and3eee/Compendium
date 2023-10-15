'use client';

import { useForm } from '@mantine/form';
import { useSession } from 'next-auth/react';
import { CreateSession } from './SessionControl';
import {
  Card,
  Stack,
  TextInput,
  Button,
  ActionIcon,
  rem,
  Switch,
  NumberInput,
  Flex,
  Grid,
  Center,
  Textarea,
  Group,
  Title,
  Divider,
} from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
import { useRef } from 'react';
import { GetUserGMProfile, GetUserProfile } from '../GM/GMProfileControl';
import { Campaign } from '@/prisma/generated/client';
import { useRouter } from 'next/navigation';

export default function CreateSessionCard(props: { date: Date; campaign: Campaign }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  const form = useForm({
    initialValues: {
      date: '12:00',
      description: '',
      notes: '',
      duration: 120,
      private: false,
    },
  });

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = props.date;
    if (date) {
      const time = await form.values.date;
      const newDate: Date = new Date(date.toDateString() + ' ' + time + ':00');
      if (session?.user?.email) {
        const user = await GetUserProfile(session?.user?.email);
        const GMprofile = await user?.gmProfile?.id;
        if (GMprofile) {
          let resp = await CreateSession({
            date: newDate,
            gmID: GMprofile,
            description: form.values.description,
            notes: form.values.notes,
            private: form.values.private,
            duration: form.values.duration,
            campaignID: props.campaign.id,
          });

          router.refresh();
        }
      }
    }
  };

  return (
    <Card radius="md" shadow="xs" padding="1rem" maw="45rem" miw="30rem" h="30rem">
      <Card.Section inheritPadding py="1rem">
        <Center>
          <Title order={4}>New Session</Title>
        </Center>{' '}
        <Divider />
      </Card.Section>
      <form onSubmit={create}>
        <Grid grow align="center">
          <Grid.Col span={12}>
            <Group grow gap="md">
              <Textarea required label="Description" {...form.getInputProps('description')} />
              <Textarea label="Session Notes" {...form.getInputProps('notes')} />
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <TimeInput
              label="Session Time"
              ref={ref}
              rightSection={pickerControl}
              {...form.getInputProps('date')}
            />{' '}
          </Grid.Col>
          <Grid.Col span={6}>
            <Switch
              label="Private Session"
              description="Only Accessible by link"
              {...form.getInputProps('private')}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              label="Duration "
              description="in minutes"
              defaultValue={120}
              {...form.getInputProps('duration')}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              label="Max Players "
              description="in people"
              defaultValue={4}
              {...form.getInputProps('maxPlayers')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Center>
              <Button type="submit">Schedule Session</Button>
            </Center>
          </Grid.Col>
        </Grid>
      </form>
    </Card>
  );
}
