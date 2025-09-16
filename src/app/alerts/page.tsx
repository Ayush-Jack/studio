import { AlertsList } from "@/components/alerts/AlertsList";
import { Separator } from "@/components/ui/separator";

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground">
          Stay updated with the latest safety alerts and advisories.
        </p>
      </div>
      <Separator />
      <AlertsList />
    </div>
  );
}
