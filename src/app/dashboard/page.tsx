import { SosButton } from '@/components/dashboard/SosButton';
import { TouristIdCard } from '@/components/dashboard/TouristIdCard';
import { TripSummaryCard } from '@/components/dashboard/TripSummaryCard';
import { SafetyScoreIndicator } from '@/components/dashboard/SafetyScoreIndicator';
import { LiveLocationStatus } from '@/components/dashboard/LiveLocationStatus';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { Separator } from '@/components/ui/separator';
import { ShieldAlertIcon } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="relative pb-24 md:pb-8">
      <header className="text-center mb-8">
        <div className="flex items-center justify-center gap-2">
            <ShieldAlertIcon className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">SafeTourism</h1>
        </div>
        <p className="text-muted-foreground">Your Safety, Our Priority</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left column */}
        <div className="md:col-span-1 space-y-6">
          <SafetyScoreIndicator />
          <TripSummaryCard />
        </div>

        {/* Center column */}
        <div className="md:col-span-1 space-y-6">
          <TouristIdCard />
        </div>

        {/* Right column */}
        <div className="md:col-span-1 space-y-6">
          <LiveLocationStatus />
          <QuickActions />
        </div>
      </div>
      
      <SosButton />
    </div>
  );
}
