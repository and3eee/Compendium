'use client';

import { Button, Container, Divider, Grid } from '@mantine/core';
import { Campaign, GMProfile } from '@/prisma/generated/client';
import { useSession } from 'next-auth/react';
import { RegisterGMFromEmail } from './CampaignControl';
import { useRouter } from 'next/navigation';
import CharacterControlCard from '../Player/Character/CharacterControlCard';
import CharacterControlSection from '../Player/Character/CharacterControlSection';

export default function CampaignAdminSection(props: { campaign: any }) {
  const { data: session, status } = useSession();
  const isGM: boolean =
    props.campaign?.gms.find((gm: any) => gm.User!.email == session?.user?.email) != null;
  return (
    <Container>
      <Divider label="Game Master Section" />
      <Grid justify="center">
        {!isGM && (
          <Button
            radius="xl"
            size="lg"
            onClick={() => RegisterGMFromEmail(props.campaign.id, session?.user?.email!)}
          >
            Register as GM
          </Button>
        )}
      </Grid>
    </Container>
  );
}
