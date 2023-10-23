'use client';

import { GameEntity } from '@/prisma/generated/client';
import { Card, Stack, Text, Title } from '@mantine/core';
import TagBadge from '../EntityDataComponents/TagBadge';

export default function ItemCard(props: { item: GameEntity }) {
  const item = props.item;

  const tags = new Map(Object.entries(item.tags!));
  const stats = new Map(Object.entries(item.stats!));

  return (
    <Card mih="10rem" miw="10rem" mah="50rem" maw="50rem">
      <Stack gap="md" align="center">
        <Title>{item.name}</Title>
        <Text>{item.desc}</Text>

        {Array.from(tags?.keys()).map((entry: any) => {
          return (
            <TagBadge tagData={tags.get(entry.toString())} tagName={capitalizeFirstLetter(entry)} />
          );
        })}

        {Array.from(stats?.keys()).map((entry: any) => {
          return (
            <Text>
              {capitalizeFirstLetter(entry)} : {stats.get(entry)}
            </Text>
          );
        })}
      </Stack>
    </Card>
  );
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
