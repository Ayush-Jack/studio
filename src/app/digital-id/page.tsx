import { TouristIdCard } from "@/components/dashboard/TouristIdCard";
import { Separator } from "@/components/ui/separator";

export default function DigitalIdPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Digital ID</h1>
        <p className="text-muted-foreground">
          Your secure digital identification card.
        </p>
      </div>
      <Separator />
      <div className="flex justify-center">
        <div className="w-full max-w-md">
            <TouristIdCard />
        </div>
      </div>
    </div>
  );
}
