'use server';

import { Group } from '@mantine/core';
import { Campaign, PlayerCharacter } from '@/prisma/generated/client';
import CharacterControlCard from './CharacterControlCard';
import { GetPCClassMap } from './CharacterControl';
import { prisma } from '@/lib/prisma';

export default async function CharacterControlSection(props: {
  campaign: Campaign;
  maxClasses: number;
  pc: PlayerCharacter;
}) {



    const fullChar = await prisma.playerCharacter.findFirst({where:{id:props.pc.id},include:{character:{include:{classes:{include:{ClassChoice:true}}}}}})

  return <Group><CharacterControlCard campaign={props.campaign} maxClasses={props.maxClasses} pc={fullChar!}/></Group>;
}
