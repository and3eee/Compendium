"use server"
import { prisma } from '@/lib/prisma';

export async function UpdateUser(email: string, age: number, name: string, bio: string) {
  return await prisma.user.update({
    where: { email: email },
    data: {
      age: age,
      bio: bio,
      fName: name.split(' ')[0],
      lName: name.split(' ').length > 0 ? name.split(' ')[name.split(' ').length - 1] : undefined,
    },
  });
}
