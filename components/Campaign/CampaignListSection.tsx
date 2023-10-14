"use client"

import { Campaign } from "@/prisma/generated/client"
import CampaignList from "./CampaignList"
import { Stack } from "@mantine/core"
import CampaignCard from "./CampaignCard"

import CreateCampaignCard from "./CreateCampaign"


export default function CampaignListSection(props: {campaigns:Campaign[]}){

    return(<Stack>
        <CreateCampaignCard/>
        {props.campaigns.map((camp) => { return (<CampaignCard key={camp.id} campaign={camp}/>)})}
    </Stack>)
}