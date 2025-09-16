"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BellRing,
  TriangleAlert,
  ShieldCheck,
  Megaphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Alert = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "high-risk" | "advisory" | "broadcast" | "safe-zone";
};

const alertIcons: { [key in Alert["type"]]: LucideIcon } = {
  "high-risk": TriangleAlert,
  advisory: BellRing,
  broadcast: Megaphone,
  "safe-zone": ShieldCheck,
};

const alertColors: { [key in Alert["type"]]: "destructive" | "secondary" | "default" } = {
    "high-risk": "destructive",
    "advisory": "secondary",
    "broadcast": "default",
    "safe-zone": "default",
};

const mockAlerts: Alert[] = [
  {
    id: "1",
    title: "High-Risk Zone Entry",
    description: "You have entered a restricted area near the old market. Please be cautious.",
    time: "2 mins ago",
    type: "high-risk",
  },
  {
    id: "2",
    title: "Weather Advisory",
    description: "Heavy rainfall is expected in your area for the next 3 hours. Plan your travel accordingly.",
    time: "15 mins ago",
    type: "advisory",
  },
  {
    id: "3",
    title: "Official Broadcast",
    description: "A local festival will cause road closures from 4 PM to 8 PM today.",
    time: "1 hour ago",
    type: "broadcast",
  },
  {
    id: "4",
    title: "You've Entered a Safe Zone",
    description: "Welcome to the city center. This area is monitored and considered safe.",
    time: "3 hours ago",
    type: "safe-zone",
  },
];

export function AlertsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
        <CardDescription>
          Here are your most recent notifications.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAlerts.map((alert) => {
            const Icon = alertIcons[alert.type];
            return (
              <div
                key={alert.id}
                className="flex items-start gap-4 p-4 rounded-lg border bg-secondary/30"
              >
                <div className="flex-shrink-0">
                    <Badge variant={alertColors[alert.type]} className="p-2">
                        <Icon className="h-5 w-5" />
                    </Badge>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{alert.title}</h4>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {alert.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
