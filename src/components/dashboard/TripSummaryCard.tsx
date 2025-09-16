import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function TripSummaryCard() {
  return (
    <Card className="bg-blue-50">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-primary">Trip Itinerary</h4>
            <p className="text-sm text-muted-foreground">Delhi, India</p>
            <p className="text-xs text-muted-foreground">15 May - 20 May</p>
          </div>
        </div>
         <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-blue-200">
            <Calendar className="h-4 w-4 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}
