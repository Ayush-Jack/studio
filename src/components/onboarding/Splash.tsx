import { ShieldAlertIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Splash() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-4">
      <ShieldAlertIcon className="w-24 h-24 text-primary mb-4 animate-pulse" />
      <h1 className="text-4xl font-bold tracking-tight mb-2">
        SafeTourism
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Your Safety, Our Priority
      </p>
      <Button asChild size="lg">
        <Link href="/onboarding">Get Started</Link>
      </Button>
    </div>
  );
}
