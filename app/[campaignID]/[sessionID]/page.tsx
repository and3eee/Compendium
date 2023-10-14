'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import CreateSection from '@/components/Player/Character/CreateSection';
import SessionCharacterControl from '@/components/Session/SessionCharacterControl';
import SessionEditor from '@/components/Session/SessionEditor';
import SessionSection from '@/components/Session/SessionSection';
import { prisma } from '@/lib/prisma';
import { Container, Flex, Group, Stack } from '@mantine/core';
import { GMProfile } from '@/prisma/generated/client';

import { getServerSession } from 'next-auth';


 
export default async function ({ params }: { params: { campaignID: number; sessionId: string } }) {
  const session = await getServerSession(authOptions);
  const campaign: any = await prisma.campaign.findFirst({
    where: { id: Number(params.campaignID) },
    include: {
      gms: { include: { User: true } },
      players: { include: { owner: { include: { User: true } } } },
      members: true,
    },
  });
  const user = await prisma.user.findFirst({ where: { email: session?.user?.email } });
  const gameSession: any = await prisma.gameSession.findFirst({
    where: { id: params.sessionId },
    include: {
      players: {
        include: {
          owner: { include: { User: true } },
          character: { include: { classes: { include: { ClassChoice: true } } } },
        },
      },
      host: { include: { User: true } },
    },
  });

  let isGM: boolean = campaign?.gms.find((gm: GMProfile) => gm.userId == user?.id) != null;
  return (
    <Stack align='center'>
      <Group grow gap={'md'} p={'1rem'} justify="center">
        <SessionSection session={gameSession} admin={isGM} />
        {isGM && <SessionEditor session={gameSession} />}
      </Group>
   {isGM &&  <SessionCharacterControl session={gameSession}/>}
    </Stack>
  );
}
