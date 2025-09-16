"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LocateIcon, User, MapPin, Share2 } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

export function MapComponent() {
  const { toast } = useToast();

  const handleShareLocation = () => {
    toast({
      title: "Location Sharing Enabled",
      description: "Your live location is now being shared with your emergency contacts.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LocateIcon className="w-6 h-6 text-primary" />
          <span>Real-Time Tracking</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border">
          <Image
            src="https://picsum.photos/seed/map/1200/800"
            alt="Map"
            layout="fill"
            objectFit="cover"
            data-ai-hint="world map"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <User className="w-8 h-8 text-white bg-blue-500 rounded-full p-1 border-2 border-white" />
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping"></div>
              <span className="text-xs font-bold text-white bg-black/50 px-2 py-1 rounded-md mt-1">
                You
              </span>
            </div>
          </div>
          <div className="absolute top-1/4 left-1/4">
             <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-500" />
                <span className="text-xs font-bold text-white bg-green-500/80 px-2 py-1 rounded-md mt-1">
                    Safe Zone
                </span>
            </div>
          </div>
          <div className="absolute bottom-1/4 right-1/4">
             <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-red-500" />
                <span className="text-xs font-bold text-white bg-red-500/80 px-2 py-1 rounded-md mt-1">
                    Risk Zone
                </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
          <Button onClick={handleShareLocation}>
            <Share2 className="mr-2 h-4 w-4" />
            Share Live Location
          </Button>
      </CardFooter>
    </Card>
  );
}
