'use client';

import {
  Container,
  Stepper,
  Group,
  Button,
  Center,
  TextInput,
  Textarea,
  Text,
  Pill,
  Flex,
  InputBase,
  NumberInput,
  Stack,
  Title,
  Card,
  PillsInput,
  Grid,
  Badge,
} from '@mantine/core';
import { Campaign, PlayerCharacter } from '@prisma/client';
import { useState } from 'react';
import ClassPicker from './ClassPicker';
import { useSession } from 'next-auth/react';
import { CreateCharacterFromUser, GetPCClassMap, UpdatePlayerCharacter } from './CharacterControl';

const EXPLevelChart = [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000,
  195000, 225000, 265000, 305000, 355000,
];
export default function CharacterCard(props: { pc: any }) {
  //Class Creation

  const [classes, setClassList] = useState<Map<string, number>>(
    props.pc.character && props.pc.character.classes
      ? new Map(props.pc?.character.classes.map((item: any) => [item.ClassChoice.name, item.Level]))
      : new Map()
  );

  const [levelSum, setSum] = useState<number>(() => {
    let sum = 0;
    classes.forEach((entry) => (sum += entry));
    return sum;
  });

  const recalcSum = () => {
    let sum = 0;
    classes.forEach((entry) => (sum += entry));
    setSum(sum);
  };

  const onClick = (key: string) => {
    const lvl = classes.get(key);
    const removed = classes.delete(key);
    if (removed) {
      recalcSum();
      setClassList(classes);
    }
  };

  const values = Array.from(classes.keys()).map((key) => (
    <Pill color="Orange" key={key} >
      {key} - lvl {classes.get(key)}
    </Pill>
  ));

  //Character Info
  const [backstory, setBackstory] = useState<string>(props.pc.backStory ?? '');
  const [personality, setPersonality] = useState<string>(props.pc.personality ?? '');
  const [race, setRace] = useState<string>(props.pc.race);
  const [name, setName] = useState<string>(props.pc.name);

  //Character Stats
  const [exp, setExp] = useState<number | string>(props.pc.experience);
  const [gold, setGold] = useState<number | string>(props.pc.gold);

  return (
    <>
      <Grid justify='space-between' align='flex-start'>
        <Grid.Col span={8}>
          <Text c="dimmed" size="sm">
            Name
          </Text>
          <Text>{name}</Text>{' '}
        </Grid.Col>
        <Grid.Col span={4}>
          <Text c="dimmed" size="sm">
            Owner
          </Text>
          <Text>
            {props.pc.owner.User.fName} {props.pc.owner.User.lName}
          </Text>{' '}
        </Grid.Col>
        <Grid.Col span={12}>
          <Text c="dimmed" size="sm">
            Backstory
          </Text>
          <Text>{backstory}</Text>
        </Grid.Col>{' '}
        <Grid.Col span={4}>
          <Text c="dimmed" size="sm">
            Personality
          </Text>
          <Text>{personality}</Text>{' '}
        </Grid.Col>
        <Grid.Col span={4}>
          <Text c="dimmed" size="sm">
            Race
          </Text>
          <Text>{race}</Text>{' '}
        </Grid.Col>
        <Grid.Col span={4}>
          <Text c="dimmed" size="sm">
            Gold
          </Text>
          <Text>{gold}</Text>{' '}
        </Grid.Col>
        <Grid.Col span={4}>
          <Text c="dimmed" size="sm">
            Level
          </Text>
          <Text>{props.pc.level}</Text>{' '}
        </Grid.Col>
        <Grid.Col span={4}>
          <Text c="dimmed" size="sm">
            Experience
          </Text>
          <Text>{exp}</Text>{' '}
        </Grid.Col>
        {props.pc.character && (
          <Grid.Col span={8}>
            <PillsInput mah="10rem" label="Classes">
              <Pill.Group>{values}</Pill.Group>
            </PillsInput>
          </Grid.Col>
        )}
        {Number(exp) >= EXPLevelChart[props.pc.level] && <Badge>Can Level Up!</Badge>}
      </Grid>
    </>
  );
}
