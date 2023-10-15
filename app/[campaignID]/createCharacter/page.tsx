'use server';

import CreateSection from '@/components/Player/Character/CreateSection';
import { prisma } from '@/lib/prisma';

import { Container } from '@mantine/core';

export default async function ({ params }: { params: { campaignID: number } }) {
  const id = await params.campaignID;
  const campaign: any = await prisma.campaign.findFirst({
    where: { id: Number(params.campaignID) },
    include: {
      sessions: { include: { players: { include: { owner: { include: { User: true } } } } } },
      gms: { include: { User: true } },
      players: { include: { owner: { include: { User: true } } } },
      members: true,
    },
  });
  return (
    <Container fluid>
      <CreateSection maxLevel={5} maxClasses={1} campaign={campaign} />
    </Container>
  );
}
