'use server';
import { Title, Text, Stack } from '@mantine/core';

export default async function HomePage() {
  return (
    <>
      <Stack align="center">
        <Title>Welcome to Compendium</Title>
        <Text>A NextJS TTRPG management tool. To get started, click the menu in the top right to select a campaign.</Text>
      </Stack>
    </>
  );
}
