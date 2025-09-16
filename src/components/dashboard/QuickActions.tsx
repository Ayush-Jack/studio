import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Bell, History } from "lucide-react";
import Link from "next/link";

const actions = [
    { label: "View Alerts", icon: Bell, href: "/alerts" },
    { label: "Share Location", icon: Share2, href: "#!" },
    { label: "Travel History", icon: History, href: "#!" },
];

export function QuickActions() {
  return (
    <div>
        <h2 className="text-lg font-semibold mb-2 text-center">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
            {actions.map((action) => (
                <Link href={action.href} key={action.label} className="block">
                     <Card className="h-full bg-blue-50 hover:bg-blue-100 transition-colors">
                        <CardContent className="flex flex-col items-center justify-center p-4 h-full">
                            <action.icon className="h-6 w-6 text-primary mb-1" />
                            <p className="text-xs text-center text-primary font-medium">{action.label}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    </div>
  );
}
