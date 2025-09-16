"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getSafetySuggestionsAction } from "@/lib/actions";
import type { RealTimeSafetySuggestionsOutput } from "@/ai/flows/real-time-safety-suggestions";
import {
  Loader2,
  LocateFixed,
  TriangleAlert,
  Route,
  ShieldCheck,
  Siren,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

export function SafetySuggestions() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [suggestions, setSuggestions] =
    useState<RealTimeSafetySuggestionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    handleGetLocation();
  }, []);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      const errorMsg = "Geolocation is not supported by your browser.";
      setError(errorMsg);
      toast({
        variant: "destructive",
        title: "Geolocation Error",
        description: errorMsg,
      });
      return;
    }

    // Set loading true only for location, not for AI suggestions
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
        toast({
          title: "Location Acquired",
          description: "Your current location has been updated.",
        });
      },
      () => {
        const errorMsg = "Unable to retrieve your location. Please grant permission.";
        setError(errorMsg);
        toast({
          variant: "destructive",
          title: "Location Error",
          description: errorMsg,
        });
      }
    );
  };

  const handleGetSuggestions = async () => {
    if (!location) {
      toast({
        variant: "destructive",
        title: "Location Missing",
        description: "Please acquire your location first.",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuggestions(null);

    const res = await getSafetySuggestionsAction({
      latitude: location.latitude,
      longitude: location.longitude,
      nearbyAccidentLocations: "Crossroad near City Palace",
      weatherInformation: "Clear skies, 32°C",
    });

    if (res.success && res.data) {
      setSuggestions(res.data);
    } else {
      const errorMsg = res.error || "An unknown error occurred.";
      setError(errorMsg);
      toast({
        variant: "destructive",
        title: "AI Error",
        description: errorMsg,
      });
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-Time Safety Suggestions</CardTitle>
        <CardDescription>
          Get AI-powered safety advice for your current location.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && !suggestions && (
          <Alert variant="destructive">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {location && (
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <LocateFixed className="w-4 h-4 text-primary" />
            <span>
              Location: {location.latitude.toFixed(4)},{" "}
              {location.longitude.toFixed(4)}
            </span>
          </div>
        )}

        {isLoading && (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="ml-2">Fetching suggestions...</p>
          </div>
        )}

        {suggestions && (
          <div className="space-y-4">
            <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                    <Siren className="w-5 h-5 text-primary" />
                    Safety Advice
                </h4>
                <p className="text-foreground/90">{suggestions.safetyAdvice}</p>
            </div>
            
            {suggestions.safeRoutePlanning && (
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  <Route className="w-5 h-5 text-primary" />
                  Safe Route Planning
                </h4>
                <p className="text-foreground/90">{suggestions.safeRoutePlanning}</p>
              </div>
            )}

            {suggestions.dangerZoneAvoidance && (
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  <TriangleAlert className="w-5 h-5 text-primary" />
                  Danger Zone Avoidance
                </h4>
                <p className="text-foreground/90">{suggestions.dangerZoneAvoidance}</p>
              </div>
            )}

            {suggestions.preventiveMeasures && (
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Preventive Measures
                </h4>
                <p className="text-foreground/90">{suggestions.preventiveMeasures}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleGetSuggestions} disabled={isLoading || !location}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {suggestions ? "Refresh Suggestions" : "Get Safety Suggestions"}
        </Button>
      </CardFooter>
    </Card>
  );
}
