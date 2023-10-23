'use client';

import { useForm } from '@mantine/form';
import { useSession } from 'next-auth/react';
import {
  ActiveSession,
  CompleteSession,
  CreateSession,
  PlannedSession,
  UpdateSession,
} from './SessionControl';
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
import { DateTimePicker, TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
import { useRef } from 'react';
import { GetUserGMProfile, GetUserProfile } from '../GM/GMProfileControl';
import { Campaign, GameSession, SessionState } from '@/prisma/generated/client';
import { useRouter } from 'next/navigation';

export default function CreateSessionCard(props: { session: GameSession }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const date = props.session.date;

  const form = useForm({
    initialValues: {
      date: props.session.date,
      description: props.session.description ?? '',
      notes: props.session.notes ?? '',
      duration: props.session.duration,
      private: props.session.private,
      prework: props.session.prework ?? '',
      platform: props.session.platform ?? '',
      maxPlayers: props.session.maxPlayers,
    },
  });

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (date) {
      const newDate: Date = new Date();
      if (session?.user?.email) {
        const user = await GetUserProfile(session?.user?.email);
        const GMprofile = await user?.gmProfile?.id;
        if (GMprofile) {
          let resp = await UpdateSession({
            date: form.values.date,
            gmID: GMprofile,
            description: form.values.description ?? '',
            notes: form.values.notes ?? '',
            private: form.values.private,
            duration: form.values.duration,
            id: props.session.id,
            prework: form.values.prework ?? '',
            platform: form.values.platform ?? '',
            maxPlayers: form.values.maxPlayers,
          });

          if (resp) router.refresh();
        }
      }
    }
  };

  return (
    <Card radius="md" shadow="xs" padding="1rem" w="66%" h="25em">
      <Card.Section inheritPadding py="1rem">
        <Center>
          <Title order={4}>Editing Session {props.session.id}</Title>
        </Center>{' '}
        <Divider />
      </Card.Section>
      <form onSubmit={create}>
        <Grid grow align="center">
          <Grid.Col span={12}>
            <Group grow gap="md">
              <Textarea required label="Description" {...form.getInputProps('description')} />
              <Textarea label="Session Notes" {...form.getInputProps('notes')} />
              <TextInput label="Platform" {...form.getInputProps('platform')} />
              <Textarea label="Prework" {...form.getInputProps('prework')} />
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <DateTimePicker
              withSeconds
              label="Session Time"
              placeholder="Pick date and time"
              {...form.getInputProps('date')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack align="flex-start">
              <Switch
                label="Private Session"
                description="Only Accessible by link"
                {...form.getInputProps('private')}
              />
              <Group>
                {props.session.state != SessionState.PLANNED && (
                  <Button
                    color="blue"
                    onClick={() => {
                      PlannedSession(props.session.id);
                      router.refresh();
                    }}
                  >
                    Set to Planned
                  </Button>
                )}
                {props.session.state != SessionState.ACTIVE && (
                  <Button
                    color="orange"
                    onClick={() => {
                      ActiveSession(props.session.id);
                      router.refresh();
                    }}
                  >
                    Set to Active
                  </Button>
                )}
                {props.session.state != SessionState.COMPLETE && (
                  <Button
                    color="green"
                    onClick={() => {
                      CompleteSession(props.session.id);
                      router.refresh();
                    }}
                  >
                    Complete Session
                  </Button>
                )}
              </Group>
            </Stack>
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
              <Button type="submit">Update Session</Button>
            </Center>
          </Grid.Col>
        </Grid>
      </form>
    </Card>
  );
}
