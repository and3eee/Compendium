'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { HostType } from '@/prisma/generated/client';
import { getServerSession } from 'next-auth';

export async function CreateGMProfileFromForm(input: { email: string; type: string }) {
  const email = input.email;
  const type: any = input.type;

  const profile = await prisma.gMProfile.create({
    data: {
      User: { connect: { email: email } },
      type: type,
    },
  });

  await prisma.user.update({ where: { email: email }, data: { gMProfileId: profile.id } });

  return profile;
}

export async function GetUserGMProfile(userId: string) {
  return await prisma.gMProfile.findFirst({ where: { userId: userId } });
}
export async function GetUserByGMID(gmID: string) {
  return await prisma.user.findFirst({ where: { gMProfileId: gmID }, include:{gmProfile:true} });
}

export async function GetUserScopedGMProfile(userId: string) {
  return await prisma.gMProfile.findFirst({ where: { id: userId } ,include:{User:true}});
}
export async function GetUserProfile(email: string) {
  return await prisma.user.findFirst({
    where: { email: email },
    include: { gmProfile: true, playerProfile: true },
  });
}
