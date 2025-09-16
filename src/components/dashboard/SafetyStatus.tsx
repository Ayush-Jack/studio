import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ShieldAlert } from "lucide-react";

export function SafetyStatus() {
  const safetyScore: "green" | "orange" | "red" = "green";
  const locationStatus: "Safe Zone" | "Risk Zone" = "Safe Zone";

  const scoreInfo = {
    green: { variant: "default", text: "Good" },
    orange: { variant: "secondary", text: "Moderate" },
    red: { variant: "destructive", text: "High Risk" },
  } as const;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Live Safety Status</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
          {locationStatus === "Safe Zone" ? (
            <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0" />
          ) : (
            <ShieldAlert className="w-8 h-8 text-destructive flex-shrink-0" />
          )}
          <div>
            <h4 className="font-semibold font-headline">Location Status</h4>
            <p className="text-muted-foreground">{locationStatus}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <Badge
              variant={scoreInfo[safetyScore].variant}
              className="scale-125"
            >
              {scoreInfo[safetyScore].text}
            </Badge>
          </div>
          <div>
            <h4 className="font-semibold font-headline">Safety Score</h4>
            <p className="text-muted-foreground">Your current safety rating.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
