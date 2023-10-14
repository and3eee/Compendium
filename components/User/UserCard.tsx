'use client';

import {useMantineColorScheme, Avatar, Burger, Button, Card, Container, Group, Menu, Stack, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { User } from '@/prisma/generated/client';
import {
  IconArrowsLeftRight,
  IconLogout,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconSun,
  IconTrash,
} from '@tabler/icons-react';

import AuthCheck from '../Auth/AuthCheck';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function UserCard(props:{user:User}) {
  const { data: session, status } = useSession()
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure();
  const { toggleColorScheme } = useMantineColorScheme();

if(session?.user){


  return (
    <AuthCheck>
      <Card padding="xs" radius="xl" mih="3rem" mah="10rem" miw="10rem" maw="15rem" withBorder shadow="md" >
        <Group justify="center" gap="0">
        <Avatar src={props.user.image}/>
          <Container >
<Text size="md">{props.user.fName} </Text>
<Text c="dimmed" size="xs">{props.user.name}</Text>
          </Container>

          <Menu shadow="md" width={200}  onClose={toggle}>
            <Menu.Target>
              <Burger opened={opened} onClick={toggle} aria-label="User navigation" />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Account</Menu.Label>
              <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />} onClick={() => router.push("/account")}>
                Settings
              </Menu.Item>
              <Menu.Item leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />} onClick={() => signOut()}>
                Signout
              </Menu.Item>
              <Menu.Item leftSection={<IconSun style={{ width: rem(14), height: rem(14) }} />} onClick={() => toggleColorScheme()}>
                Toggle Color Scheme
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card>
    </AuthCheck>
  );}
 else{
  return (
      <Card padding="xs" radius="xl" mih="3rem" mah="10rem" miw="10rem" maw="15rem" withBorder shadow="md" >
        <Group justify="center" gap="0">
        <Button fullWidth color="orange" variant="outline" radius="xl" size="md" onClick={() => signIn()}>Sign-In</Button>

        
        </Group>
      </Card>

  );
 }
}
