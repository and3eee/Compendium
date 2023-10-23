'use client';
import {
  Button,
  Card,
  Group,
  NumberInput,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useForm } from '@mantine/form';
import CreateItem from './ItemControl';
import { useState } from 'react';

export default function ItemCreator() {
  const router = useRouter();
  const [actionList, setActionList] = useState<Map<string, string>>(new Map());
  const [action, setAction] = useState<string>('');
  const [actionDesc, setActionDesc] = useState<string>('');

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

    if (resp == 'Created') router.refresh();
  };
  const handleChange = () => {};

  const ActionListView = () => {
    return (
      <Stack>
        {Array.from(actionList.keys()).map((actionKey) => {
          return <div>{actionKey}</div>;
        })}
      </Stack>
    );
  };

  const ActionEditor = () => {
    return (
      <Card withBorder padding={'md'}>
        <Stack>
          {ActionListView()}
          <TextInput
            label="Action Name"
            value={action}
            onChange={(event) => setAction(event.currentTarget.value)}
          />
          <Textarea
            label="Action Description"
            value={actionDesc}
            onChange={(event) => setActionDesc(event.currentTarget.value)}
          />
          <Group grow gap="xl">
            <Button>Load Action</Button>

            <Button>Submit Action</Button>
          </Group>
        </Stack>
      </Card>
    );
  };

  return (
    <form onSubmit={create}>
      <Title>Create Item</Title>
      <Stack gap="md">
        <TextInput label="Name" {...form.getInputProps('name')} />
        <TextInput label="Description" {...form.getInputProps('description')} />
        <TextInput label="Rarity" {...form.getInputProps('rarity')} />
        <NumberInput label="cost" {...form.getInputProps('cost')} />
        {ActionEditor()}
        {Array.from(actionList.keys()).map((key) => (
          <Stack>
            <Text fw={400}>{key}</Text>
          </Stack>
        ))}
        <Button type="submit">Create</Button>
      </Stack>
    </form>
  );
}
