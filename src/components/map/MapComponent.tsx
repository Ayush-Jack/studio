"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LocateIcon, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import { Skeleton } from "../ui/skeleton";

const containerStyle = {
  width: '100%',
  height: '100%'
};

// Default center to Jaipur, India as a placeholder
const defaultCenter = {
  lat: 26.9124,
  lng: 75.7873
};

const userPosition = { lat: 26.915, lng: 75.79 };
const safeZonePosition = { lat: 26.9221, lng: 75.7789 }; // Hawa Mahal
const riskZonePosition = { lat: 26.89, lng: 75.81 }; // A less central area

export function MapComponent() {
  const { toast } = useToast();
  const [map, setMap] = useState<google.maps.Map | null>(null)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  })

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null)
  }, [])

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
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={13}
              onUnmount={onUnmount}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              {/* User Marker */}
              <MarkerF
                position={userPosition}
                label={{ text: "You", color: "white", fontWeight: "bold" }}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: "#4285F4",
                  fillOpacity: 1,
                  strokeWeight: 2,
                  strokeColor: "white"
                }}
              />

              {/* Safe Zone Marker */}
              <MarkerF
                position={safeZonePosition}
                title="Safe Zone"
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 200, // Represents a radius
                  fillColor: "green",
                  fillOpacity: 0.2,
                  strokeColor: "green",
                  strokeWeight: 1,
                }}
              />
               <MarkerF
                position={safeZonePosition}
                label="Safe Zone"
                icon={{
                  path: `M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z`,
                  fillColor: "green",
                  fillOpacity: 1.0,
                  strokeWeight: 0,
                  scale: 1.5,
                  anchor: new google.maps.Point(12, 24),
                }}
              />

              {/* Risk Zone Marker */}
              <MarkerF
                position={riskZonePosition}
                title="Risk Zone"
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 250, // Represents a radius
                  fillColor: "red",
                  fillOpacity: 0.2,
                  strokeColor: "red",
                  strokeWeight: 1,
                }}
              />
               <MarkerF
                position={riskZonePosition}
                label="Risk Zone"
                icon={{
                  path: `M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z`,
                  fillColor: "red",
                  fillOpacity: 1.0,
                  strokeWeight: 0,
                  scale: 1.5,
                  anchor: new google.maps.Point(12, 24),
                }}
              />
            </GoogleMap>
          ) : (
            <Skeleton className="w-full h-full" />
          )}
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
