"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type SafetyScore = "green" | "orange" | "red";

const scoreInfo: Record<SafetyScore, { variant: "default" | "secondary" | "destructive"; text: string; colorClass: string }> = {
  green: { variant: "default", text: "Safe", colorClass: "bg-green-500 hover:bg-green-500" },
  orange: { variant: "secondary", text: "Caution", colorClass: "bg-orange-500 hover:bg-orange-500" },
  red: { variant: "destructive", text: "High Risk", colorClass: "bg-red-500 hover:bg-red-500" },
};

export function SafetyScoreIndicator() {
  const currentScore: SafetyScore = "green"; 
  const { text, colorClass } = scoreInfo[currentScore];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Safety Score</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <Badge className={`px-4 py-1 text-sm text-white ${colorClass}`}>
          {text}
        </Badge>
      </CardContent>
    </Card>
  );
}
