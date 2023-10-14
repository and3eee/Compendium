'use client';

import { DatePicker, DatePickerProps } from '@mantine/dates';
import { Campaign, GameSession, SessionState, User } from '@prisma/client';
import { Suspense, useEffect, useState } from 'react';

import { GetSession, GetSessions } from './SessionControl';
import SessionCard from './SessionCard';
import {
  Indicator,
  Group,
  Loader,
  Container,
  Title,
  Divider,
  Stack,
  Transition,
  Paper,
  Center,
} from '@mantine/core';
import { useSession } from 'next-auth/react';
import {
  GetUserByGMID,
  GetUserGMProfile,
  GetUserProfile,
  GetUserScopedGMProfile,
} from '../GM/GMProfileControl';
import CreateSession from './CreateSessionCard';
import CreateSessionCard from './CreateSessionCard';
import GMCheck from '../GM/GMCheck';

export default function SessionCalendar(props: { campaign: any; GM: boolean }) {
  const [value, setValue] = useState<Date | null>(null);
  const [sessionSelected, setSession] = useState<any | null>(null);
  const [host, setHost] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = async (val: Date | null) => {
    setValue(val);
    if (val) {
      setLoading(true);
      const sessionDay = sessions.get(val.toDateString());
      if (sessionDay) {
        const host = await GetUserScopedGMProfile(sessionDay.gMProfileId);
        setHost(host);
        setSession(sessionDay);
      } else {
        setHost(undefined);
        setSession(undefined);
      }
      setLoading(false);
    }
  };

  const sessions: Map<string, any> = new Map(
    props.campaign.sessions.map((sesh: any) => [sesh.date.toDateString(), sesh])
  );

  const dayRenderer: DatePickerProps['renderDay'] = (date: Date) => {
    const sessionDay = sessions.get(date.toDateString());

    const day = date.getDate();
    return (
      <Indicator
        size={6}
        color="red"
        offset={-5}
        disabled={
          sessionDay == undefined || (sessionDay && sessionDay.state != SessionState.PLANNED)
        }
      >
        <Indicator
          size={6}
          color="blue"
          offset={-5}
          disabled={
            !props.GM ||
            sessionDay == undefined ||
            (sessionDay && props.GM && sessionDay.state != SessionState.ACTIVE)
          }
        >
          <Indicator
            size={6}
            color="green"
            offset={-5}
            disabled={
              !props.GM ||
              sessionDay == undefined ||
              (sessionDay && sessionDay.state != SessionState.COMPLETE)
            }
          >
            <div>{day}</div>
          </Indicator>
        </Indicator>
      </Indicator>
    );
  };

  const sessionDateSection = (transitionStyle: any) => {
    return <Paper style={{ ...transitionStyle, zIndex: 1 }}>{SessionDateInner()}</Paper>;
  };

  const SessionDateInner = () => {
    if (loading)
      return (
        <Center h="30rem" w="30rem">
          <Loader color="orange" type="dots" size="lg" />
        </Center>
      );
    if (value && sessionSelected)
      return (
        <Suspense fallback={<Loader color="orange" type="dots" size="lg" />}>
          <SessionCard session={sessionSelected} admin={props.GM} host={host} />
        </Suspense>
      );

    if (props.GM && value && !sessionSelected)
      return <CreateSessionCard date={value} campaign={props.campaign} />;
  };

  return (
    <Container fluid>
      <Divider label="Sessions" />
      <Group gap="xl" justify="center" py="1rem">
        <DatePicker renderDay={dayRenderer} value={value} onChange={handleChange} size="xl" />
        <Transition
          mounted={value != undefined}
          transition={'scale-x'}
          duration={200}
          timingFunction="ease"
          keepMounted
        >
          {(styles) => sessionDateSection(styles)}
        </Transition>
      </Group>
    </Container>
  );
}
