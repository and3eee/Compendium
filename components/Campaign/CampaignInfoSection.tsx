'use client';

import { Stack, Text, Title } from '@mantine/core';
import { Campaign } from '@prisma/client';

export default function CampaignInfoSection(props: { campaign: Campaign }) {
  const campaign = props.campaign;

  return (
    <Stack align="center">
      <Title>{campaign.name}</Title>
      <Text>{campaign.description}</Text>
    </Stack>
  );
}
