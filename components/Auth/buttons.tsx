'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import UserCard from '../User/UserCard';

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return;
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
