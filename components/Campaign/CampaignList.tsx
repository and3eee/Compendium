import { prisma } from '@/lib/prisma';
import CampaignListSection from './CampaignListSection';

export default async function CampaignList() {
  const campaigns = await prisma.campaign.findMany();

  return (<div>{campaigns && <CampaignListSection campaigns={campaigns} />}</div>);
}
