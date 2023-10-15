'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { HostType } from '@/prisma/generated/client';
import { getServerSession } from 'next-auth';

export async function CreatePlayerProfileFromForm(input: { email: string }) {
  const email = input.email;

  const profile = await prisma.playerProfile.create({
    data: {
      User: { connect: { email: email } },
    },
  });

  return profile;
}

export async function GetPlayerProfile(userId: string) {
  return await prisma.playerProfile.findFirst({ where: { userId: userId } });
}
