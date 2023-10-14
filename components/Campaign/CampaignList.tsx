import { prisma } from '@/lib/prisma';
import CampaignListSection from './CampaignListSection';
import GMCheck from '../GM/GMCheck';

export default async function CampaignList() {
  const campaigns = await prisma.campaign.findMany();

  return (
    <div>
      {campaigns && <CampaignListSection campaigns={campaigns} />}
      <GMCheck>Test</GMCheck>
    </div>
  );
}
