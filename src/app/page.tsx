import { SosButton } from '@/components/dashboard/SosButton';
import { ProfileCard } from '@/components/dashboard/ProfileCard';
import { ItineraryCard } from '@/components/dashboard/ItineraryCard';
import { SafetyStatus } from '@/components/dashboard/SafetyStatus';
import { SafetySuggestions } from '@/components/dashboard/SafetySuggestions';

export default function Home() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <SafetyStatus />
          <SafetySuggestions />
        </div>
        <div className="space-y-6">
          <ProfileCard />
          <ItineraryCard />
        </div>
      </div>
      <SosButton />
    </div>
  );
}
