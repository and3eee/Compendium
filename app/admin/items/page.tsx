'use server';

import ItemCard from '@/components/Entities/Items/ItemCard';
import ItemCreator from '@/components/Entities/Items/ItemCreator';
import ItemCreatorCard from '@/components/Entities/Items/ItemCreatorCard';
import { prisma } from '@/lib/prisma';
import { Stack } from '@mantine/core';

export default async function ItemPage() {
  const items = await prisma.gameEntity.findMany({ where: { type: 'item' } });
  console.log(items);
  return (
    <Stack>
      <ItemCreatorCard />
      {items.map((item) => {
        return <ItemCard item={item} />;
      })}
    </Stack>
  );
}
