'use server';

import { prisma } from '@/lib/prisma';
import { Field, Stat, Tag } from '@/prisma/generated/client';
import { identity } from '@mantine/core/lib/core/factory/factory';

export default async function CreateEntityForceCreate(
  name: string,

  type: string,
  desc?: string,
  tags?: Map<string, any>,
  stats?: Map<string, number>,
  fields?: Map<string, string>
) {
  const stat = await prisma.gameEntity.create({
    data: {
      name: name,
      desc: desc,
      type: type,
    },
  });

  //Stat check

  if (stats && stats.size > 0) {
    let ids = Array.from(stats.keys());
    console.log(ids);
    if (ids.length > 0) {
      const statExistList = await prisma.stat.findMany({ where: { name: { in: ids } } });
      statExistList.forEach((stat: Stat) => {
        ids = ids.filter((idEntry: string) => idEntry !== stat.name);
        if (stat.min > stats.get(stat.name)! || stats.get(stat.name)! > stat.max) {
          return 'Error: Stat range failure';
        }
      });
      ids.forEach(async (missingEntry) => {
        await prisma.stat.create({
          data: {
            name: missingEntry,
            max: stats.get(missingEntry)! * 5,
            min: stats.get(missingEntry)! * -5,
          },
        });
      });
      await prisma.gameEntity.update({
        where: {
          id: stat.id,
        },
        data: { stats: Object.fromEntries(stats) },
      });
    }
  }

  if (fields && fields.size > 0) {
    let ids = Array.from(fields.keys());
    console.log(ids);
    if (ids.length > 0) {
      const fieldExistList = await prisma.field.findMany({ where: { name: { in: ids } } });
      fieldExistList.forEach((field: Field) => {
        ids = ids.filter(
          (idEntry: string) => idEntry != field.name && fields.get(idEntry) != field.data
        );
      });
      ids.forEach(async (missingEntry) => {
        await prisma.field.create({
          data: {
            name: missingEntry,
            data: fields.get(missingEntry)!,
          },
        });
      });
      await prisma.gameEntity.update({
        where: {
          id: stat.id,
        },
        data: { fields: Object.fromEntries(fields) },
      });
    }
  }

  if (tags && tags.size > 0) {
    let ids = Array.from(tags.keys());
    console.log(ids);
    if (ids.length > 0) {
      const tagExistList = await prisma.tag.findMany({ where: { name: { in: ids } } });
      tagExistList.forEach((tag: Tag) => {
        ids = ids.filter((idEntry: any) => idEntry !== tag.name);
        if (tag.strict && tag.type !== typeof ids[ids.indexOf(tag.name)]) {
          return 'Error: Tag type error';
        }
      });
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
    await prisma.gameEntity.update({
      where: {
        id: stat.id,
      },
      data: { tags: Object.fromEntries(tags) },
    });
  }

  return 'Created';
}
