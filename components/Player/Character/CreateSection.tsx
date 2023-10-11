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
} from '@mantine/core';
import { Campaign } from '@prisma/client';
import { useState } from 'react';
import ClassPicker from './ClassPicker';
import { useSession } from 'next-auth/react';
import { CreateCharacterFromUser } from './CharacterControl';
import { useRouter } from 'next/navigation';

export default function CreateSection(props: {
  campaign: Campaign;
  maxLevel: number;
  maxClasses: number;
}) {
  const router = useRouter();

  const { data: session, status } = useSession();
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  //Class Creation
  const [classes, setClassList] = useState<Map<string, number>>(new Map());

  const [level, setLevel] = useState<number | string>(1);
  const [classIn, setClass] = useState('');
  const [levelSum, setSum] = useState<number>(0);

  const addClass = () => {
    if (Number.isFinite(level) && classIn.length > 0) {
      let numIn: number = level as number;
      classes.set(classIn, numIn);
      setClassList(classes);
      setSum(levelSum + numIn);
      setLevel(0);
      setClass('');
    }
  };

  const onClick = (key: string) => {
    classes.delete(key);
    setClassList(classes);
  };

  const values = Array.from(classes.keys()).map((key) => (
    <Pill color="Orange" key={key} withRemoveButton onRemove={() => onClick(key)}>
      {classes.get(key)} lvl {key}
    </Pill>
  ));

  //Character Info
  const [backstory, setBackstory] = useState('');
  const [personality, setPersonality] = useState('');
  const [race, setRace] = useState('');
  const [name, setName] = useState('');

  return (
    <Card maw="25rem">
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Basic Info">
          <Center> Step 1 content: Basic Info</Center>

          <TextInput
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            required
            label="Name"
          />
          <Textarea
            value={backstory}
            onChange={(event) => setBackstory(event.currentTarget.value)}
            label="Backstory"
          />
          <Textarea
            value={personality}
            onChange={(event) => setPersonality(event.currentTarget.value)}
            label="Personality"
          />
          <TextInput
            value={race}
            onChange={(event) => setRace(event.currentTarget.value)}
            label="Race"
          />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Classes">
          Step 2 content: Class Setup
          <Stack gap="md" maw="20rem" justify="center">
            <Title order={6} c="dimmed">
              Classes
            </Title>
            <InputBase component="div" multiline>
              {values}
            </InputBase>
            <Flex gap="sm">
              <TextInput
                label="Class"
                value={classIn}
                onChange={(event) => setClass(event.currentTarget.value)}
              />
              <NumberInput
                label="Level"
                min={1}
                max={props.maxLevel - levelSum}
                value={level}
                onChange={setLevel}
              />
            </Flex>

            <Button
              disabled={levelSum >= props.maxLevel && classes.size >= props.maxClasses}
              onClick={addClass}
            >
              Add Class
            </Button>
          </Stack>
        </Stepper.Step>

        <Stepper.Completed>
          <Center>
            <Button
              onClick={() => {
                CreateCharacterFromUser(
                  props.campaign.id,
                  session?.user?.email!,
                  name,
                  backstory,
                  personality,
                  race,
                  classes
                );
                router.refresh();
              }}
            >
              Submit
            </Button>
          </Center>
        </Stepper.Completed>
      </Stepper>
      <Center>
        <Group align="center" mt="xl">
          {active > 0 && (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active <= 1 && <Button onClick={nextStep}>Next step</Button>}
        </Group>
      </Center>
    </Card>
  );
}
