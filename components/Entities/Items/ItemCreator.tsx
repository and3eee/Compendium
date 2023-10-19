'use client';

import { Button, NumberInput, Stack, Text, TextInput } from '@mantine/core';
import CreateEntityForceNew from '../EntityControl';
import { useRouter } from 'next/navigation';
import { useForm } from '@mantine/form';
import CreateItem from './ItemControl';
import { useState } from 'react';

export default function ItemCreator() {
  const router = useRouter();
  const [actionList, setACtionList] = useState<Map<string, string>>(new Map());
  const form = useForm({
    initialValues: {
      name: '',
      desc: '',
      cost: 0,
      rarity: '',
    },
  });

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let resp = await CreateItem(
      form.values.name,
      form.values.desc,
      form.values.rarity,
      form.values.cost
    );

    const ActionEditor = () => {
      <Stack>
        <TextInput label="Action Name" />
        <TextInput label="Action Name" />
      </Stack>;
    };

    console.log(resp);
    if (resp == 'Created') router.refresh();
  };

  return (
    <form onSubmit={create}>
      <TextInput label="Name" {...form.getInputProps('name')} />
      <TextInput label="Description" {...form.getInputProps('description')} />
      <TextInput label="Rarity" {...form.getInputProps('rarity')} />
      <NumberInput label="cost" {...form.getInputProps('cost')} />
      {Array.from(actionList.keys()).map((key) => (
        <Stack>
          <Text fw={400}>{key}</Text>
        </Stack>
      ))}
      <Button type="submit">Create</Button>
    </form>
  );
}
