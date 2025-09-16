"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { Siren, Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { sendSosAlertAction } from "@/lib/actions";
import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface BottomNavBarProps {
  navItems: NavItem[];
}

export function BottomNavBar({ navItems }: BottomNavBarProps) {
  const pathname = usePathname();
  const { toast } = useToast();
  const [isSosLoading, setIsSosLoading] = useState(false);
  const [isSosDisabled, setIsSosDisabled] = useState(false);

  const handleSos = async () => {
    setIsSosLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const result = await sendSosAlertAction({ latitude, longitude });

        if (result.success) {
          toast({
            title: "🚨 SOS Activated!",
            description: "Your ID and location have been shared with authorities.",
            variant: "destructive",
            duration: 10000,
          });
          setIsSosDisabled(true);
          setTimeout(() => setIsSosDisabled(false), 15000); // Disable for 15 seconds
        } else {
          toast({
            title: "SOS Failed",
            description: result.error || "Could not send alert. Please try again.",
            variant: "destructive",
          });
        }
        setIsSosLoading(false);
      },
      (error) => {
        toast({
          title: "Location Error",
          description: "Unable to retrieve your location. Please grant permission and try again.",
          variant: "destructive",
        });
        setIsSosLoading(false);
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
      <div className="relative grid h-16 grid-cols-5 items-center justify-around">
        {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-sm font-medium transition-colors h-full",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs sr-only">{item.label}</span>
            </Link>
        ))}

        <div />

        {navItems.slice(2).map((item) => (
             <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-sm font-medium transition-colors h-full",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs sr-only">{item.label}</span>
            </Link>
        ))}

         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+8px)]">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <button
                        disabled={isSosDisabled || isSosLoading}
                        className={cn(
                          "flex h-16 w-16 flex-col items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-lg transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                        )}
                    >
                        {isSosLoading ? (
                          <Loader2 className="h-7 w-7 animate-spin" />
                        ) : (
                          <>
                            <Siren className="h-7 w-7" />
                            <span className="text-xs font-bold">SOS</span>
                          </>
                        )}
                    </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm SOS Alert?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will immediately share your ID and live location with emergency services and your registered contacts. Use only in a genuine emergency.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleSos}
                      disabled={isSosLoading}
                      className="bg-destructive hover:bg-destructive/90"
                    >
                       {isSosLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Confirm SOS
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
        </div>
      </div>
    </div>
  );
}
