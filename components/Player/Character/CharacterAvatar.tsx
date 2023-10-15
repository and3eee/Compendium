'use client';

import { Tooltip, Avatar, HoverCard, Text } from '@mantine/core';
import { PlayerCharacter } from '@/prisma/generated/client';
import CharacterCard from './CharacterCard';

export default function CharacterAvatar(props: { pc: any }) {
  return (
    <HoverCard radius={'lg'} width={'30rem'} withArrow>
      <HoverCard.Target>
        <Avatar src={props.pc.owner.image} />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <CharacterCard pc={props.pc} />
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
