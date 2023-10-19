'use server';

import { prisma } from '@/lib/prisma';
import CreateEntityForceCreate from '../EntityControl';

export default async function CreateItem(
  name: string,
  desc?: string,
  rarity?: string,
  cost?: number
) {
  return await CreateEntityForceCreate(
    name,
    'item',
    desc,
    new Map([['rarity', rarity]]),
    new Map([['cost', Number(cost)]])
  );
}
