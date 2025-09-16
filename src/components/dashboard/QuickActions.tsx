import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Bell, History } from "lucide-react";
import Link from "next/link";

export function QuickActions() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
            <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" /> Share Location
            </Button>
            <Button variant="outline" asChild>
                <Link href="/alerts">
                    <Bell className="mr-2 h-4 w-4" /> View Alerts
                </Link>
            </Button>
            <Button variant="outline">
                <History className="mr-2 h-4 w-4" /> Travel History
            </Button>
        </CardContent>
    </Card>
  );
}
