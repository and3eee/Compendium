'use client';

import {
  Button,
  Group,
  NumberInput,
  TextInput,
  Text,
  Pill,
  PillGroup,
  InputBase,
  Container,
  Title,
  Stack,
  Flex,
} from '@mantine/core';
import { useState } from 'react';

export default function ClassPicker(props: { maxLevel: number; maxClasses: number }) {
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
  return (
    <Stack gap="md" maw="20rem">
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
  );
}
