'use client';

import { Container, Divider, Group, Text } from '@mantine/core';
import { GMProfile } from '@/prisma/generated/client';

export default function GMProfileInfo(props: { profile: GMProfile }) {
  return (
    <Container fluid>
      <Divider label="GM Profile" />
      <Group grow gap="lg" py="1rem">
        <Text ta="center">GM Play Stye: {props.profile.type} </Text>
      </Group>
    </Container>
  );
}
