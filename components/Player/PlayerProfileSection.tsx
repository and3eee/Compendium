'use client';

import { Card, Container, Divider, Grid } from '@mantine/core';
import CharacterCard from './Character/CharacterCard';

export default function PlayerProfileSection(props: { profile: any }) {
  const player = props.profile;

  if (player) {
    return (
      <Container fluid p="1rem">
        <Divider label="Characters" />

        <Grid
          justify="space-between
        "
        >
          {player.PlayerCharacter.map((pc: any) => (
            <Grid.Col span={4} key={pc.id}>
              <Card maw="25rem" variant="" shadow="xs" radius="xl">
                <CharacterCard pc={pc} />
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    );
  }
}
