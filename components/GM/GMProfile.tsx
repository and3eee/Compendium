import { prisma } from '@/lib/prisma';
import CreateGMProfile from './CreateGMProfile';
import GMProfileInfo from './GMProfileInfo';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function GMProfile() {
  const session = await getServerSession(authOptions);

  const GMProfile = await prisma.gMProfile.findFirst({
    where: { User: { email: session?.user?.email } },
  });

  return (
    <>
      {GMProfile && <GMProfileInfo profile={GMProfile} />}
      {!GMProfile && <CreateGMProfile />}
    </>
  );
}
