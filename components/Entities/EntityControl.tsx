'use server';

import { prisma } from '@/lib/prisma';
import { Field, Stat, Tag } from '@/prisma/generated/client';
import { identity } from '@mantine/core/lib/core/factory/factory';

export async function CreateEntityForceCreate(
  name: string,

  type: string,
  desc?: string,
  tags?: Map<string, any>,
  stats?: Map<string, number>,
  fields?: Map<string, string>
) {
  return CreateEntity(name, type, desc, tags, stats, fields, true, true, true);
}

export async function CreateEntity(
  name: string,
  type: string,
  desc?: string,
  tags?: Map<string, any>,
  stats?: Map<string, number>,
  fields?: Map<string, string>,
  createTags?: boolean,
  createStats?: boolean,
  createFields?: boolean
) {
  let entity = await prisma.gameEntity.create({
    data: {
      name: name,
      desc: desc,
      type: type,
    },
  });

  //Stat check

  if (stats && stats.size > 0) {
    let ids = Array.from(stats.keys());

    if (ids.length > 0) {
      const statExistList = await prisma.stat.findMany({ where: { name: { in: ids } } });
      statExistList.forEach((stat: Stat) => {
        ids = ids.filter((idEntry: string) => idEntry !== stat.name);
        if (stat.min > stats.get(stat.name)! || stats.get(stat.name)! > stat.max) {
          return 'Error: Stat range failure';
        }
      });

      if (createStats)
        ids.forEach(async (missingEntry) => {
          await prisma.stat.create({
            data: {
              name: missingEntry,
              max: stats.get(missingEntry)! * 5,
              min: stats.get(missingEntry)! * -5,
            },
          });
        });
      entity = await prisma.gameEntity.update({
        where: {
          id: entity.id,
        },
        data: { stats: Object.fromEntries(stats) },
      });
    }
  }

  if (fields && fields.size > 0) {
    let ids = Array.from(fields.keys());

    if (ids.length > 0) {
      const fieldExistList = await prisma.field.findMany({ where: { name: { in: ids } } });
      fieldExistList.forEach((field: Field) => {
        ids = ids.filter(
          (idEntry: string) => idEntry != field.name && fields.get(idEntry) != field.data
        );
      });

      if (createFields)
        ids.forEach(async (missingEntry) => {
          await prisma.field.create({
            data: {
              name: missingEntry,
              data: fields.get(missingEntry)!,
            },
          });
        });
      entity = await prisma.gameEntity.update({
        where: {
          id: entity.id,
        },
        data: { fields: Object.fromEntries(fields) },
      });
    }
  }

  if (tags && tags.size > 0) {
    let ids = Array.from(tags.keys());

    if (ids.length > 0) {
      const tagExistList = await prisma.tag.findMany({ where: { name: { in: ids } } });
      tagExistList.forEach((tag: Tag) => {
        ids = ids.filter((idEntry: any) => idEntry !== tag.name);
        if (tag.strict && tag.type !== typeof ids[ids.indexOf(tag.name)]) {
          return 'Error: Tag type error';
        }
      });
      if (createTags)
        ids.forEach(async (missingEntry) => {
          await prisma.tag.create({
            data: {
              name: missingEntry.toString(),
              type: typeof missingEntry,
              strict: false,
              options: [missingEntry.toString()],
            },
          });
        });
    }
    entity = await prisma.gameEntity.update({
      where: {
        id: entity.id,
      },
      data: { tags: Object.fromEntries(tags) },
    });
  }

  console.log(entity);
  return 'Created';
}

export async function UpdateEntity(
  id: number,
  name: string,
  type: string,
  desc?: string,
  tags?: Map<string, any>,
  stats?: Map<string, number>,
  fields?: Map<string, string>,
  createTags?: boolean,
  createStats?: boolean,
  createFields?: boolean
) {
  let entity = await prisma.gameEntity.create({
    data: {
      name: name,
      desc: desc,
      type: type,
    },
  });

  //Stat check

  if (stats && stats.size > 0) {
    let ids = Array.from(stats.keys());

    if (ids.length > 0) {
      const statExistList = await prisma.stat.findMany({ where: { name: { in: ids } } });
      statExistList.forEach((stat: Stat) => {
        ids = ids.filter((idEntry: string) => idEntry !== stat.name);
        if (stat.min > stats.get(stat.name)! || stats.get(stat.name)! > stat.max) {
          return 'Error: Stat range failure';
        }
      });

      if (createStats)
        ids.forEach(async (missingEntry) => {
          await prisma.stat.create({
            data: {
              name: missingEntry,
              max: stats.get(missingEntry)! * 5,
              min: stats.get(missingEntry)! * -5,
            },
          });
        });
      entity = await prisma.gameEntity.update({
        where: {
          id: entity.id,
        },
        data: { stats: Object.fromEntries(stats) },
      });
    }
  }

  if (fields && fields.size > 0) {
    let ids = Array.from(fields.keys());

    if (ids.length > 0) {
      const fieldExistList = await prisma.field.findMany({ where: { name: { in: ids } } });
      fieldExistList.forEach((field: Field) => {
        ids = ids.filter(
          (idEntry: string) => idEntry != field.name && fields.get(idEntry) != field.data
        );
      });

      if (createFields)
        ids.forEach(async (missingEntry) => {
          await prisma.field.create({
            data: {
              name: missingEntry,
              data: fields.get(missingEntry)!,
            },
          });
        });
      entity = await prisma.gameEntity.update({
        where: {
          id: entity.id,
        },
        data: { fields: Object.fromEntries(fields) },
      });
    }
  }

  if (tags && tags.size > 0) {
    let ids = Array.from(tags.keys());

    if (ids.length > 0) {
      const tagExistList = await prisma.tag.findMany({ where: { name: { in: ids } } });
      tagExistList.forEach((tag: Tag) => {
        ids = ids.filter((idEntry: any) => idEntry !== tag.name);
        if (tag.strict && tag.type !== typeof ids[ids.indexOf(tag.name)]) {
          return 'Error: Tag type error';
        }
      });
      if (createTags)
        ids.forEach(async (missingEntry) => {
          await prisma.tag.create({
            data: {
              name: missingEntry.toString(),
              type: typeof missingEntry,
              strict: false,
              options: [missingEntry.toString()],
            },
          });
        });
    }
    entity = await prisma.gameEntity.update({
      where: {
        id: entity.id,
      },
      data: { tags: Object.fromEntries(tags) },
    });
  }

  return 'Updated';
}

export async function CreateSpell(input: Spell) {
  //Set up the tags first
  let tags = new Map<string, any>([
    ['components', input.components.join(',')],
    ['spellType', input.type],
  ]);

  //Set up stats
  let stats = new Map<string, number>([['spellLevel', input.level]]);
  if (input.duration) stats.set('duration', input.duration);
  if (input.range) stats.set('range', input.range);

  //Set up Fields
  let fields = new Map<string, string>();
  if (input.levelCondition) fields.set('spellLevelCondition', input.levelCondition);
  if (input.materialComponents)
    fields.set('materialComponents', input.materialComponents!.join(','));
  return await CreateEntity(
    input.name,
    'spell',
    input.description,
    tags,
    stats,
    fields,
    true,
    true,
    false
  );
}

export async function UpdateSpell(input: Spell, id: number) {
  //Set up the tags first
  let tags = new Map<string, any>([
    ['components', input.components.join(',')],
    ['spellType', input.type],
  ]);

  //Set up stats
  let stats = new Map<string, number>([['spellLevel', input.level]]);
  if (input.duration) stats.set('duration', input.duration);
  if (input.range) stats.set('range', input.range);

  //Set up Fields
  let fields = new Map<string, string>();
  if (input.levelCondition) fields.set('spellLevelCondition', input.levelCondition);
  if (input.materialComponents)
    fields.set('materialComponents', input.materialComponents!.join(','));
  return await UpdateEntity(
    id,
    input.name,
    'spell',
    input.description,
    tags,
    stats,
    fields,
    true,
    true,
    false
  );
}
