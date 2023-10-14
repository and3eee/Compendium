'use client';

import { Avatar, Badge, Card, Container, Flex, Group, Text, Title } from '@mantine/core';
import { GMProfile, User } from '@prisma/client';

export default function GMUser(props: { user: User; gm: GMProfile }) {
  return (
    <Card withBorder w="15rem">
      <Flex gap="sm">
        <Avatar size="lg" src={props.user.image} />
        <Container>
          {props.user.fName && (
            <>
              <Text size="xs">Hosted by</Text>
              <Title order={5}>
                {props.user.fName}
              </Title>
            </>
          )}
          <Badge>{props.gm.type ?? 'Unset'}</Badge>
        </Container>
      </Flex>
    </Card>
  );
}
