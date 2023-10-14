`use server`

import { Campaign } from '@/prisma/generated/client';
import CampaignInfoSection from './CampaignInfoSection';
import SessionCalendar from '../Session/SessionCalendar';
import { Container, Stack } from '@mantine/core';
import CampaignUserInfo from './CampaignUserInfo';
import CampaignAdminSection from './CampaignAdminSection';

export default function CampaignPage(props: { campaign: any, admin:boolean}) {

    return (
      <Container fluid>
        <CampaignInfoSection campaign={props.campaign} />
        <CampaignUserInfo campaign={props.campaign}/>
        <SessionCalendar campaign={props.campaign} GM={props.admin}/>
        {props.admin && <CampaignAdminSection campaign={props.campaign}/>}
      </Container>
    );

}
