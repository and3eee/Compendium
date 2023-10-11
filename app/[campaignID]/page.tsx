'use server';
import AuthCheck from '@/components/Auth/AuthCheck';
import SessionCalendar from '@/components/Session/SessionCalendar';

import { prisma } from '@/lib/prisma';
import { Stack } from '@mantine/core';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import CampaignPage from '@/components/Campaign/CampaignPage';
import { GMProfile } from '@prisma/client';
import { IconUnderline } from '@tabler/icons-react';
import { isArgumentsObject } from 'util/types';
import { Metadata } from 'next';

export default async function CampaignHomePage({ params }: { params: { campaignID: number } }) {
  const id = await params.campaignID;
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({ where: { email: session?.user?.email } });
  const campaign = await prisma.campaign.findFirst({
    where: { id: 1 },
    include: {
      sessions: { include: { players: { include: { owner: { include: { User: true } } } } } },
      gms: { include: { User: true } },
      players: { include: { owner: { include: { User: true } } } },
      members:{include:{User:true}},
    },
  });

  const isGM: boolean = campaign?.gms.find((gm: GMProfile) => gm.userId == user?.id) != null;

  return (
    <AuthCheck>
      <CampaignPage campaign={campaign!} admin={user?.role == 'ADMIN' || isGM} />
    </AuthCheck>
  );
}
