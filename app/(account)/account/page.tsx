import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { Container, Stack } from '@mantine/core';
import { prisma } from '@/lib/prisma';
import UserSection from '@/components/User/UserSection';
import GMProfile from '@/components/GM/GMProfile';
import { ROLE } from '@prisma/client';
import AuthCheck from '@/components/Auth/AuthCheck';
import PlayerProfileSection from '@/components/Player/PlayerProfileSection';

export default async function AccountPage() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({ where: { email: session?.user?.email }, include:{playerProfile:{include:{PlayerCharacter:{include:{owner:{include:{User:true}},character:{include:{classes:{include:{ClassChoice:true}}}}}}}}
  } });

  if (user)
    return (
      <Container fluid>
        <AuthCheck>
          <UserSection user={user!} />
          {user.role != ROLE.USER && <GMProfile />}
          {user.playerProfile && <PlayerProfileSection profile={user.playerProfile}  />}
          
       
        </AuthCheck>
      </Container>
    );
}
