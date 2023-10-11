"use server";
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

import UserCard from '@/components/User/UserCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import AuthCheck from '@/components/Auth/AuthCheck';
import AuthProvider from '@/components/Auth/AuthProvider';
import { SignInButton, SignOutButton } from '@/components/Auth/buttons';
import { Group } from '@mantine/core';
import CreateGMProfile from '@/components/GM/CreateGMProfile';
import GMProfile from '@/components/GM/GMProfile';
import CreateCampaign from '@/components/Campaign/CreateCampaign';
import CampaignList from '@/components/Campaign/CampaignList';


export default async function HomePage() {
  return (
    <>
      <ColorSchemeToggle />

        <Group>
          <SignInButton />
          <SignOutButton/>
          <AuthCheck>

            <CampaignList/>
          </AuthCheck>
        </Group>

    </>
  );
}
