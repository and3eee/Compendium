'use client';

import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Campaign } from '@/prisma/generated/client';
import CreateSection from './CreateSection';

export default function CreateCharacterModal(props: {
  campaign: Campaign;
  maxLevel: number;
  maxClasses: number;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Create a Character">
        <CreateSection
          campaign={props.campaign}
          maxClasses={props.maxClasses}
          maxLevel={props.maxLevel}
        />
      </Modal>

      <Button onClick={open}>Create a Character</Button>
    </>
  );
}
