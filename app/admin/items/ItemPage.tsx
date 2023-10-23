'use server';
import ItemCard from '@/components/Entities/Items/ItemCard';
import ItemCreatorCard from '@/components/Entities/Items/ItemCreatorCard';
import SpellManageCard from '@/components/Entities/Spell/SpellManageCard';
import { prisma } from '@/lib/prisma';
import { Stack } from '@mantine/core';

export default async function ItemPage() {
  const items = await prisma.gameEntity.findMany({ where: { type: 'item' } });

  return (
    <Stack>
      <ItemCreatorCard />
      {items.map((item) => {
        return <ItemCard item={item} />;
      })}

      <SpellManageCard />
    </Stack>
  );
}
