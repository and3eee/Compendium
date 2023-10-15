'use client';

import { Grid } from '@mantine/core';
import { GameSession } from '@/prisma/generated/client';
import CharacterControlCard from '../Player/Character/CharacterControlCard';

export default function SessionCharacterControl(props: { session: any }) {
  return (
    <Grid grow gutter="md" justify="center" align="center">
      {props.session.players.map((pc: any) => (
        <Grid.Col key={pc.id} span={6}>
          <CharacterControlCard pc={pc} campaign={props.session.campaignID} maxClasses={2} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
