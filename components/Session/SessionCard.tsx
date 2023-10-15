'use client';

import {
  Avatar,
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SessionState } from '@/prisma/generated/client';
import GMUser from '../GM/GMUser';
import { EnrollInSessionByUserFirstActiveCharacter } from './SessionControl';
import CharacterAvatar from '../Player/Character/CharacterAvatar';

export default function SessionCard(props: { session: any; admin: boolean; host?: any }) {
  const router = useRouter();
  const { data: session } = useSession();
  const { players } = props.session;
  console.log(props.session.id);

  const playerSection = () => {
    if (players.length > 0) {
      return (
        <Container fluid h="2rem">
          <Avatar.Group>
            {players.map((pc: any) => (
              <CharacterAvatar key={pc.id} pc={pc} />
            ))}
          </Avatar.Group>
        </Container>
      );
    }
    return (
      <Container fluid h="5rem">
        <Text>No one has signed up yet, be the first!</Text>
      </Container>
    );
  };
  if (props.admin || props.session.state === SessionState.PLANNED) {
    return (
      <Card radius="md" shadow="xs" padding="1rem" maw="45rem" miw="35rem" h="30rem">
        <Card.Section inheritPadding py="8">
          <Group gap="md" py="sm" grow justify="center">
            <Stack>
              {props.session.private && <Badge>Private</Badge>}
              {props.session.state && <Badge>{props.session.state}</Badge>}
            </Stack>
            {props.host && (
              <div>
                <GMUser user={props.host.User} gm={props.host} />
              </div>
            )}
            <Stack gap={0} align="center">
              <Title order={5}> Session at {props.session.date.toLocaleTimeString()} </Title>
              <Text c="dimmed" size="xs">
                {props.session.date.toLocaleDateString()}{' '}
              </Text>
            </Stack>
          </Group>
          <Divider />
        </Card.Section>

        <Grid grow justify="center">
          <Grid.Col span={12}>
            <Group grow gap="md">
              <Text h="5rem">{props.session.description}</Text>
            </Group>
          </Grid.Col>

          <Grid.Col span={4}>
            <Text c="dimmed" size="xs">
              Duration
            </Text>
            <Text>{props.session.duration} min</Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Text c="dimmed" size="xs">
              Capacity
            </Text>
            <Text>
              {players.length}/{props.session.maxPlayers}{' '}
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Text c="dimmed" size="xs">
              Players
            </Text>
            {playerSection()}
          </Grid.Col>
          <Grid.Col span={12}>
            {props.admin && props.session.notes && (
              <div>
                <Text c="dimmed" size="xs">
                  Notes
                </Text>
                <Text>{props.session.notes} </Text>
              </div>
            )}
          </Grid.Col>
          <Grid.Col span={12}>
            <Group gap="md">
              <Button
                onClick={() => {
                  EnrollInSessionByUserFirstActiveCharacter(
                    props.session.id,
                    session?.user?.email!
                  );
                  router.refresh();
                }}
              >
                Join Session
              </Button>
              {props.admin && (
                <Button
                  onClick={() => {
                    router.replace(`${props.session.campaignId}/${props.session.id}`);
                  }}
                >
                  Go to Session Page
                </Button>
              )}
            </Group>
          </Grid.Col>
        </Grid>
      </Card>
    );
  }
}
