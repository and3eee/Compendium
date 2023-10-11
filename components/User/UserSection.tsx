'use client';

import { ActionIcon, Avatar, Container, Flex, Group, Loader, Modal, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAdjustments, IconPencil } from '@tabler/icons-react';

import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import UserEdit from './UserEdit';

export default function UserSection(props: { user: any }) {
  const user: any = props.user;
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  return (
 
      <Flex justify="center"p="1rem" >
        <Container>
          <Flex gap="md" align="center">
            <Stack gap={0}>
              <Title size="xs">
                {user.fName} {user.lName}
              </Title>
              <Text >{user.name}</Text>
              <Flex gap="md" align="center">
                <Text fw={500}>Email:</Text>
                <Text>{user.email}</Text>
              </Flex>
              <Flex gap="md" align="center">
                <Text fw={500}>Bio:</Text>
                <Text>{user.bio}</Text>
              </Flex>
            </Stack>
            <Avatar src={user.image} radius="sm" size="8rem" />
          </Flex>
        </Container>
        <Modal radius="xl" opened={opened} onClose={close} title="Edit Account">
    <UserEdit user={user}/>
      </Modal>

        <ActionIcon variant="filled" color="orange" aria-label="Edit Profile" onClick={open}>
          <IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Flex>

  );
}
