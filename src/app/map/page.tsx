import { MapComponent } from "@/components/map/MapComponent";
import { Separator } from "@/components/ui/separator";

export default function MapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Live Map</h1>
        <p className="text-muted-foreground">
          Your live location and safety zones.
        </p>
      </div>
      <Separator />
      <MapComponent />
    </div>
  );
}
