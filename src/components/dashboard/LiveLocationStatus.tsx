"use client";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '150px'
};

const defaultCenter = {
  lat: 26.9124,
  lng: 75.7873
};

const userPosition = { lat: 26.915, lng: 75.79 };
const safeZonePosition = { lat: 26.9124, lng: 75.7873 }; 

export function LiveLocationStatus() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-snippet-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  })

  const locationStatus: "Safe Zone" | "Risk Zone" = "Safe Zone";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Location</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="w-full h-[150px] rounded-t-none overflow-hidden">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={userPosition}
              zoom={14}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                zoomControl: false,
                draggable: false,
                scrollwheel: false,
                disableDoubleClickZoom: true,
              }}
            >
              <MarkerF
                position={userPosition}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 7,
                  fillColor: "#007BFF",
                  fillOpacity: 1,
                  strokeWeight: 2,
                  strokeColor: "white"
                }}
              />
              <MarkerF
                position={safeZonePosition}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 150,
                  fillColor: "green",
                  fillOpacity: 0.2,
                  strokeColor: "green",
                  strokeWeight: 1,
                }}
              />
            </GoogleMap>
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </div>
      </CardContent>
       <CardFooter className={`p-3 text-center text-sm font-semibold rounded-b-lg ${locationStatus === "Safe Zone" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
        You are in a {locationStatus}
      </CardFooter>
    </Card>
  );
}
