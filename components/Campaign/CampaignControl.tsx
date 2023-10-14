'use server';
import { prisma } from "@/lib/prisma";
import { em } from "@mantine/core";
import { GMProfile, PlayerProfile } from "@/prisma/generated/client";

import { connect } from "http2";

export async function CreateCampaign(input:{name:string}){
    return await prisma.campaign.create({data:{name:input.name}})
}


export async function RegisterGMFromEmail(campaignID:number, email:string){

    const gmProfile = await prisma.gMProfile.findFirst({where:{User:{email:email}}})
    if(!gmProfile) return "No GM Profile Found"
    const gms:GMProfile[] = (await prisma.campaign.findFirstOrThrow({where:{id:campaignID},include:{gms:true}}))?.gms
    const gmIds:{id:string}[] = gms.map((gm:GMProfile) => { return {id:gm.id}} )
    gmIds.push({id:gmProfile!.id})
    return await prisma.campaign.update({where:{id:campaignID},data:{gms:{connect:gmIds}}})
}


export async function RegisterUserFromEmail(campaignID:number, email:string){
    const PlayerProfile = await prisma.playerProfile.findFirst({where:{User:{email:email}}})
    if(!PlayerProfile) return "No Player Profile Found"
    const members:PlayerProfile[] = (await prisma.campaign.findFirstOrThrow({where:{id:campaignID},include:{members:true}}))?.members
    const memberIds:{id:string}[] = members.map((gm:PlayerProfile) => { return {id:gm.id}} )
    memberIds.push({id:PlayerProfile!.id})
    return await prisma.campaign.update({where:{id:campaignID},data:{members:{connect:memberIds}}})
}
