'use client';
import { Campaign, GameSession } from '@prisma/client';
import SessionList from './SessionList';
import SessionCalendar from './SessionCalendar';
import SessionCard from './SessionCard';
import { Group } from '@mantine/core';

export default function SessionSection(props: { session: any; admin: boolean }) {

  return (
    <Group grow maw="33%">
      <SessionCard session={props.session} admin={props.admin} host={props.session.host} />
    </Group>
  );
}
