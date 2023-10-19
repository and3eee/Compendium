'use client';

import { prisma } from '@/lib/prisma';
import {
  Burger,
  Card,
  Container,
  Drawer,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Campaign, User } from '@/prisma/generated/client';
import CampaignCard from './Campaign/CampaignCard';
import UserSection from './User/UserSection';
import { useSession } from 'next-auth/react';
import UserCard from './User/UserCard';
import AuthCheck from './Auth/AuthCheck';
import { IconBooks, IconBrandStorybook } from '@tabler/icons-react';
import GMCheck from './GM/GMCheck';
import CreateCampaignCard from './Campaign/CreateCampaign';

export default function NavBar(props: { campaigns: Campaign[]; user: any }) {
  const [opened, { open, close }] = useDisclosure();
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-gray-9) 0%, var(--mantine-color-gray-8) 30%,var(--mantine-color-blue-filled) 60%, var(--mantine-color-orange-filled) 90%)';

  return (
    <div>
      <Drawer opened={opened} onClose={close} title="Campaigns">
        <Stack gap="md">
          {props.campaigns.map((camp) => (
            <CampaignCard key={camp.id} campaign={camp} />
          ))}
          {props.user && props.user.role != 'user' && <CreateCampaignCard />}
        </Stack>
      </Drawer>
      <Card radius="xl" bg={gradient} w="100%" p="8">
        <Group justify="space-between">
          <Flex align={'center'} justify={'center'} gap="xs">
            <Burger
              px={8}
              color="white"
              opened={opened}
              onClick={open}
              aria-label="Toggle navigation"
            />
            <IconBooks stroke={1} color="white" size="3rem" />
            <Text size="2rem" fw={350} lts="2px" ff="inherit" c="white">
              Compendium
            </Text>
          </Flex>

          <UserCard user={props.user} />
        </Group>
      </Card>
    </div>
  );
}
