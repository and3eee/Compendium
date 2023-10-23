'use client';
import { ActionIcon, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPencil, IconPlus } from '@tabler/icons-react';
import SpellManageCard from './SpellManageCard';

export default function SpellManageModal(props: {
  spell: Spell | undefined;
  id?: number;
  createNew: boolean;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Modal size="auto" radius={'xl'} opened={opened} onClose={close}>
        <SpellManageCard
          spell={props.spell}
          id={props.id}
          createNew={props.createNew}
          onSubmit={() => {
            close();
          }}
        />
      </Modal>
      {props.createNew && (
        <ActionIcon variant="filled" aria-label="create" onClick={open}>
          <IconPlus />
        </ActionIcon>
      )}
      {!props.createNew && (
        <ActionIcon variant="filled" aria-label="edit" onClick={open}>
          <IconPencil />
        </ActionIcon>
      )}
    </div>
  );
}
