import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Calendar, Hotel } from "lucide-react";

export function TripSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trip Summary</CardTitle>
        <CardDescription>Your current travel plans.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold">Destination</h4>
            <p className="text-muted-foreground">Jaipur, Rajasthan</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold">Travel Dates</h4>
            <p className="text-muted-foreground">Oct 20 - Oct 26, 2024</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Hotel className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold">Stay</h4>
            <p className="text-muted-foreground">The Royal Heritage</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
