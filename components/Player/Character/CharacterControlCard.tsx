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
export default function CharacterControlCard(props: {
  campaign: Campaign;
  maxClasses: number;
  pc: any;
}) {
  const { data: session, status } = useSession();

  //Class Creation

  const [classes, setClassList] = useState<Map<string, number>>(
    new Map(props.pc?.character.classes.map((item: any) => [item.ClassChoice.name, item.Level]))
  );
  const [level, setLevel] = useState<number | string>(1);
  const [classIn, setClass] = useState('');
  const [levelSum, setSum] = useState<number>(() => {
    let sum = 0;
    classes.forEach((entry) => (sum += entry));
    return sum;
  });

  const addClass = () => {
    if (Number.isFinite(level) && classIn.length > 0) {
      let numIn: number = level as number;
      classes.set(classIn, numIn);
      setClassList(classes);
      recalcSum();
      setLevel(0);
      setClass('');
    }
  };
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
    <Pill color="Orange" key={key} withRemoveButton onRemove={() => onClick(key)}>
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
    <Card withBorder shadow="sm" radius={'lg'}  w="50rem" h="50rem" >
      <Grid grow>
        <Grid.Col span={6}>
          <Card withBorder shadow="sm" radius={'lg'} w="20rem" h="20rem">
            <TextInput
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
              required
              label="Name"
            />
            <TextInput
              value={race}
              onChange={(event) => setRace(event.currentTarget.value)}
              label="Race"
            />
            <Textarea
              value={personality}
              onChange={(event) => setPersonality(event.currentTarget.value)}
              label="Personality"
            />{' '}
            <Textarea
              value={backstory}
              onChange={(event) => setBackstory(event.currentTarget.value)}
              label="Backstory"
            />
          </Card>
        </Grid.Col>

        <Grid.Col span={6}>
          <Card withBorder shadow="sm" radius={'lg'} w="20rem" h="20rem">
            <Stack gap="md">
              <NumberInput label="Experience" min={0} value={exp} onChange={setExp} />
              <NumberInput label="Gold" min={0} value={gold} onChange={setGold} />

              <NumberInput label="Level" min={1} max={20 - levelSum} value={levelSum} disabled />
              {Number(exp) >= EXPLevelChart[levelSum] && <Badge>Can Level Up!</Badge>}
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card withBorder shadow="sm" radius={'lg'} w="20rem" h="20rem">
            <Stack gap="md" justify="center">
              <PillsInput mah="10rem" label="Classes">
                <Pill.Group>{values}</Pill.Group>
              </PillsInput>
              <Group>
                <Title order={5} c="dimmed">
                  Add new Class
                </Title>
                <Flex gap="sm">
                  <TextInput
                    label="Class"
                    value={classIn}
                    onChange={(event) => setClass(event.currentTarget.value)}
                  />
                  <NumberInput
                    label="Level"
                    min={1}
                    max={20 - levelSum}
                    value={level}
                    onChange={setLevel}
                  />
                </Flex>
              </Group>

              <Button
                disabled={levelSum >= 20 && classes.size >= props.maxClasses}
                onClick={addClass}
              >
                Add Class
              </Button>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Center>
            <Button
              onClick={() =>
                UpdatePlayerCharacter(
                  props.pc.id,
                  name,
                  backstory,
                  personality,
                  race,
                  classes,
                  Number(levelSum),
                  Number(gold),
                  Number(exp)
                )
              }
            >
              Update Character
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
