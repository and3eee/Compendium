'use server';

import { prisma } from '@/lib/prisma';
import { Class } from '@/prisma/generated/client';

export async function CreateCharacterFromUser(
  campaignID: number,
  email: string,
  name: string,
  backstory: string,
  personality: string,
  race: string,
  classes: Map<string, number>
) {
  let playerID = await prisma.playerProfile.findFirst({ where: { User: { email: email } } });
  if (!playerID) {
    playerID = await prisma.playerProfile.create({
      data: { User: { connect: { email: email } }, Campaign: { connect: { id: campaignID } } },
    });
  }
  return await CreateSimpleCharacter(
    campaignID,
    playerID!.id,
    name,
    backstory,
    personality,
    race,
    classes
  );
}
export async function CreateSimpleCharacter(
  campaignID: number,
  playerID: string,
  name: string,
  backstory: string,
  personality: string,
  race: string,
  classes: Map<string, number>
) {
  const keys: string[] = await Array.from(classes.keys());
  const ids: string[] = [];


  const user = await prisma.user.findFirst({ where: { email: playerID } });

  let level = 0;

  const idMap: Map<string, number> = new Map<string, number>();

  for (var key in keys) {
    let entry = await prisma.class.findFirst({ where: { name: keys[key] } });
    if (entry == undefined) entry = await prisma.class.create({ data: { name: keys[key] } });

    ids.push(entry.id);
    idMap.set(entry.id, classes.get(keys[key])!);
    level += classes.get(keys[key])!
  }

  return await prisma.playerCharacter.create({
    data: {
      name: name,
      owner: {
        connect: {
          id: playerID,
        },
      },
      Campaign: { connect: { id: campaignID } },
      personality: personality,
      race: race,
      backStory: backstory,
      level: level,
      character: {
        create: {
          classes: {
            createMany: {
              data: ids.map((id: string) => {
                return { classId: id, Level: idMap.get(id) };
              }),
            },
          },
        },
      },
    },
  });
}

export async function GetPCClassMap(pcId: string) {
  const classes = prisma.playerCharacter.findFirst({
    where: { id: pcId },
    include: { character: { include: { classes: true } } },
  });

  return new Map<string, number>();
}

export async function UpdatePlayerCharacter(
  pcId: string,
  name: string,
  backstory: string,
  personality: string,
  race: string,
  classes: Map<string, number>,
  level: number,
  gold: number,
  experience: number
) {
  const keys: string[] = await Array.from(classes.keys());
  const ids: string[] = [];

  const idMap: Map<string, number> = new Map<string, number>();

  for (var key in keys) {
    let entry = await prisma.class.findFirst({ where: { name: keys[key] } });
    if (entry == undefined) entry = await prisma.class.create({ data: { name: keys[key] } });

    ids.push(entry.id);
    idMap.set(entry.id, classes.get(keys[key])!);
  }

  return await prisma.playerCharacter.update({
    where: { id: pcId },
    data: {
      name: name,
      personality: personality,
      race: race,
      gold: gold,
      experience: experience,
      backStory: backstory,
      level: level,
      character: {
        create: {
          classes: {
            createMany: {
              data: ids.map((id: string) => {
                return { classId: id, Level: idMap.get(id) };
              }),
            },
          },
        },
      },
    },
  });
}
