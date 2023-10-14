import { Button, Card, Stack, Text, Title } from '@mantine/core';
import { Campaign } from '@/prisma/generated/client';
import { useRouter } from 'next/navigation';

`use client`;

export default function CampaignCard(props: { campaign: any }) {
  const router = useRouter();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder miw="10rem" maw="50rem" mih="10rem" mah="25rem">
      <Stack gap="xl" align='center' >
        <Title>{props.campaign.name}</Title>

        {props.campaign.description && <Text size="sm">{props.campaign.description}</Text>}

        <Button
          onClick={() => {
            router.push(`/${props.campaign.id}`);
          }}
        >
          Go to Campaign Homepage
        </Button>
      </Stack>
    </Card>
  );
}
