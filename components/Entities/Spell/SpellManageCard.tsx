'use client';

import {
  Card,
  Group,
  NumberInput,
  TextInput,
  Textarea,
  Text,
  Stack,
  Title,
  Button,
  Switch,
  ScrollArea,
  LoadingOverlay,
  Modal,
  Divider,
} from '@mantine/core';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { useForm } from '@mantine/form';
import { isUndefined } from 'util';
import { useDisclosure } from '@mantine/hooks';
import { CreateSpell, UpdateEntity, UpdateSpell } from '../EntityControl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const content =
  '<p>This spell assaults and twists creatures’ minds, spawning delusions and provoking uncontrolled actions. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.</p><p style="text-align: start">An affected target can’t take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn.</p><hr><h4>d10 Behavior</h4><p>1) The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn’t take an action this turn.</p><p>2-6) The creature doesn’t move or take actions this turn.</p><p>7-8) The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn.</p><p>9-10) The creature can act and move normally.</p><hr><p style="text-align: start">At the end of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target.</p>';

export default function SpellManageCard(props: {
  spell: Spell | undefined;
  id?: number;
  createNew: boolean;
  onSubmit?: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>('');
  const [opened, { open, close }] = useDisclosure(false);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });
  const router = useRouter();
  const mode: boolean = props.createNew || props.spell === undefined;

  let form = useForm({
    initialValues: {
      name: mode ? 'Confusion' : props.spell!.name,
      type: mode ? 'enchantment' : props.spell!.type,
      level: mode ? 0 : props.spell!.level,
      components: mode ? undefined : props.spell!.components.join(','),
      duration: mode ? undefined : props.spell!.duration,
      range: mode ? undefined : props.spell!.range,
      materialComponents: mode ? undefined : props.spell!.materialComponents?.join(','),
      concentration: mode ? undefined : props.spell?.concentration,
      description: mode ? content : props.spell!.description,
      levelCondition: mode ? undefined : props.spell!.levelCondition,
      castingTime: mode ? undefined : props.spell!.castingtime,
    },
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    let spell: Spell = {
      name: form.values.name,
      type: form.values.type,
      level: form.values.level,
      components: form.values.components?.split(',') ?? [],
      concentration: form.values.concentration ?? false,
      description: form.values.description,
    };
    if (form.values.range) spell.range = form.values.range;
    if (form.values.duration) spell.duration = form.values.duration;
    if (form.values.materialComponents)
      spell.materialComponents = form.values.materialComponents.split(',');
    if (form.values.levelCondition) spell.levelCondition = form.values.levelCondition;

    if (props.createNew) {
      const resp = await CreateSpell(spell);
      await resp;

      console.log(resp);
      if (resp == 'Created') {
        if (props.onSubmit) props.onSubmit();
        else router.refresh();
      } else {
        setResponse(resp);
        open();
      }
    } else {
      const resp = await UpdateSpell(spell, props.id!);

      if (resp == 'Updated') {
        if (props.onSubmit) props.onSubmit();
        else router.refresh();
      } else {
        setResponse(resp);
        open();
      }
    }
    setLoading(false);
  };

  return (
    <Card withBorder radius={'xl'} miw="60rem" maw="80rem" padding={'lg'}>
      <Card.Section inheritPadding py={8}>
        {!props.createNew && <Title>Editing Spell</Title>}{' '}
        {props.createNew && <Title>Create New Spell</Title>}
        <Divider />
      </Card.Section>
      <Modal opened={opened} onClose={close} title="Error">
        {response}
      </Modal>

      <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
      <form onSubmit={submit}>
        <Stack>
          <TextInput withAsterisk label="Confusion" {...form.getInputProps('name')} />
          <Group grow gap="lg" justify="">
            <NumberInput withAsterisk label="Spell Level" {...form.getInputProps('level')} />
            <TextInput label="Spell Type" {...form.getInputProps('type')} />
            <NumberInput label="Range" {...form.getInputProps('range')} />
            <NumberInput label="Duration" {...form.getInputProps('duration')} />
            <NumberInput label="Casting Time" {...form.getInputProps('castingTime')} />
            <Switch
              label="Concentration"
              defaultChecked={form.values.concentration}
              {...form.getInputProps('concentration')}
            />
          </Group>

          <Group grow gap="lg">
            <Textarea
              withAsterisk
              label="Components Types (seperated by comma)"
              {...form.getInputProps('components')}
            />
            <Textarea
              withAsterisk
              label="Material Components (seperated by comma)"
              {...form.getInputProps('materialComponents')}
            />
          </Group>

          <Textarea
            withAsterisk
            label="Upper Level Info"
            {...form.getInputProps('levelCondition')}
          />

          <Title order={4}>Description</Title>
          <ScrollArea h="30rem">
            <RichTextEditor editor={editor}>
              <RichTextEditor.Toolbar sticky stickyOffset={0}>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Underline />
                  <RichTextEditor.Strikethrough />
                  <RichTextEditor.ClearFormatting />
                  <RichTextEditor.Highlight />
                  <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                  <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Blockquote />
                  <RichTextEditor.Hr />
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                  <RichTextEditor.Subscript />
                  <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.AlignLeft />
                  <RichTextEditor.AlignCenter />
                  <RichTextEditor.AlignJustify />
                  <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>

              <RichTextEditor.Content mih="30rem" />
            </RichTextEditor>
          </ScrollArea>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Card>
  );
}
