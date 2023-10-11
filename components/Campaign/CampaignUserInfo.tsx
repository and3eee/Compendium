'use client';

import {
  Avatar,
  AvatarGroup,
  Button,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { Campaign, GMProfile } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { RegisterUserFromEmail } from './CampaignControl';
import CreateCharacterModal from '../Player/Character/CreateCharacterModal';

export default function CampaignUserInfo(props: { campaign: any }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isGM: boolean =
    props.campaign.gms.find((gm: any) => gm.User.email == session?.user?.email) != undefined;
  const hasCharacter: boolean =
    props.campaign.players.find((pc: any) => pc.owner.User.email == session?.user?.email) !=
    undefined;
  const isMember: boolean =
    props.campaign.members.find((pc: any) => pc.User.email == session?.user?.email) != undefined;

  const enroll = async () => {
    const resp = await RegisterUserFromEmail(props.campaign.id, session?.user?.email!);

    router.refresh();
  };

  return (
    <Container fluid h="10rem">
      <Divider label="Players and GMS" />{' '}
      <Group grow justify="center">
      <Stack h="5rem" align='center'>
          <Text c="dimmed">GMs</Text>
          <Avatar.Group>
            {props.campaign.gms.map((gm: any) => (
              <Tooltip key={gm.id} label={gm.User.fName + ' ' + gm.User.lName ?? gm.User.name}>
                <Avatar src={gm.User.image} />
              </Tooltip>
            ))}
          </Avatar.Group>
        </Stack>
        <Stack h="5rem" align='center'>
          <Text c="dimmed">Player Characters</Text>
          <Avatar.Group h="4rem">
            {props.campaign.players.map((pc: any) => (
              <Tooltip
                key={pc.id}
                label={pc.name}
              >
                <Avatar src={pc.owner.image} />
              </Tooltip>
            ))}
          </Avatar.Group>
          {!hasCharacter && <CreateCharacterModal campaign={props.campaign} maxLevel={5} maxClasses={2}/>}
        </Stack>
        {isMember && (
           <Stack h="5rem" align='center'>
            <Text c="dimmed">Members</Text>
            <Avatar.Group h="4rem">
              {props.campaign.members.map((pc: any) => (
                <Tooltip
                  key={pc.User.id}
                  label={pc.User.fName + ' ' + pc.User.lName ?? pc.User.name}
                >
                  <Avatar src={pc.User.image} />
                </Tooltip>
              ))}
            </Avatar.Group>
            {!isMember && <Button onClick={enroll}>Join Campaign</Button>}
          </Stack>
        )}
      </Group>
    </Container>
  );
}
