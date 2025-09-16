import { SosButton } from '@/components/dashboard/SosButton';
import { SafetyScoreIndicator } from '@/components/dashboard/SafetyScoreIndicator';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { DigitalIdSummaryCard } from '@/components/dashboard/DigitalIdSummaryCard';
import { TripSummaryCard } from '@/components/dashboard/TripSummaryCard';

export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-24 md:pb-8">
      <DigitalIdSummaryCard />
      <TripSummaryCard />
      <SafetyScoreIndicator />
      <QuickActions />
      <SosButton />
    </div>
  );
}
