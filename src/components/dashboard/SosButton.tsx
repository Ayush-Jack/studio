"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { ShieldAlert } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function SosButton() {
  const { toast } = useToast();

  const handleSos = () => {
    // In a real app, this would send data to a backend (e.g., Firebase)
    // and trigger push notifications.
    console.log("SOS Alert Triggered!");
    toast({
      title: "SOS Alert Sent",
      description: "Emergency services and your contacts have been notified.",
      variant: "destructive",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            className="rounded-full w-20 h-20 shadow-2xl animate-pulse"
            aria-label="SOS Button"
          >
            <div className="flex flex-col items-center">
              <ShieldAlert className="w-8 h-8" />
              <span className="font-bold text-lg">SOS</span>
            </div>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm SOS Alert?</AlertDialogTitle>
            <AlertDialogDescription>
              This will immediately send your location to emergency services and
              your emergency contacts. Are you sure you want to proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSos}
              className="bg-destructive hover:bg-destructive/90"
            >
              Confirm SOS
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
