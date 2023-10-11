'use client';

import {
  Button,
  Card,
  Center,
  Grid,
  Group,
  NumberInput,
  Stack,
  Switch,
  TextInput,
  Textarea,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { create } from 'domain';

import { useRouter } from 'next/navigation';
import { GetUserProfile } from '../GM/GMProfileControl';
import { UpdateSession } from '../Session/SessionControl';

import { UpdateUser } from './UserControl';

export default function UserEdit(props: { user: any }) {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      name: props.user.fName! + " "+ props.user.lName! ?? '',
      bio: props.user.bio ,
      email: props.user.email,
      age: props.user.age,
    },
  });

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let resp = await UpdateUser(
      props.user.email!,
      Number(form.values.age),
      form.values.name ?? undefined,
      form.values.bio
    );
    router.push("/account");
  };
  if(props.user)
  return (
    <Card withBorder radius="xl">

      <form onSubmit={create}>
        <Grid grow align="center">
          <Grid.Col span={12}>
            <Stack  gap="md">
              <TextInput required label=" Name" {...form.getInputProps('name')} />
              <TextInput label="Email" {...form.getInputProps('email')} />
              <TextInput label="Bio" {...form.getInputProps('bio')} />
              <NumberInput label="Age" {...form.getInputProps('age')} />
            </Stack>
          </Grid.Col>

          <Grid.Col span={12}>
            <Center>
              <Button type="submit">Update User Profile</Button>
            </Center>
          </Grid.Col>
        </Grid>
      </form>
    </Card>
  );
}
