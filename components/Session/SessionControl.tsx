'use server';

import { prisma } from '@/lib/prisma';
import { Campaign, SessionState } from '@prisma/client';

export async function GetSession(date: Date) {
  return await prisma.gameSession.findFirst({ where: { date: date } });
}

export async function CreateSession(session: {
  date: Date;
  gmID: string;
  description: string;
  notes: string;
  private: boolean;
  duration: number;
  campaignID: number;
}) {
  return await prisma.gameSession.create({
    data: {
      host: { connect: { id: session.gmID } },
      date: session.date,
      duration: session.duration,
      Campaign: { connect: { id: session.campaignID } },
      private: session.private,
      notes: session.notes,
      description: session.description,
    },
  });
}

export async function UpdateSession(session: {
  id: string;
  date: Date;
  gmID: string;
  description: string;
  notes: string;
  private: boolean;
  duration: number;
  platform?: string;
  prework?: string;
  maxPlayers: number;
}) {
  return await prisma.gameSession.update({
    where: { id: session.id },
    data: {
      host: { connect: { id: session.gmID } },
      date: session.date,
      duration: session.duration,
      private: session.private,
      notes: session.notes,
      description: session.description,
      platform: session.platform,
      prework: session.prework,
      maxPlayers: session.maxPlayers,
    },
  });
}

export async function GetSessions(campaign: Campaign) {
  return await prisma.gameSession.findMany({ where: { campaignId: campaign.id } });
}

export async function EnrollInSessionByUserFirstActiveCharacter(sessionID: string, email: string) {
  const playerChar = await prisma.playerCharacter.findFirst({
    where: { active: true, owner: { User: { email: email } } },
  });
  if (playerChar) {
    const out = await prisma.gameSession.update({
      where: { id: sessionID },
      data: { players: { connect: { id: playerChar?.id } } },include:{players:true}
    });
    return out;
  }

}


export async function CompleteSession(sessionId:string){
  return await prisma.gameSession.update({where:{id:sessionId},data:{state:SessionState.COMPLETE}})
}


export async function ActiveSession(sessionId:string){
  return await prisma.gameSession.update({where:{id:sessionId},data:{state:SessionState.ACTIVE}})
}


export async function PlannedSession(sessionId:string){
  return await prisma.gameSession.update({where:{id:sessionId},data:{state:SessionState.PLANNED}})
}
