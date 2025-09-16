"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, MapPin, Siren, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const onboardingSlides = [
  {
    icon: QrCode,
    title: "Digital Tourist ID",
    description:
      "Generate and use a secure digital ID for seamless check-ins and verifications.",
  },
  {
    icon: MapPin,
    title: "Geo-fencing Alerts",
    description:
      "Receive real-time safety notifications when you enter or leave designated zones.",
  },
  {
    icon: Siren,
    title: "One-Tap SOS",
    description:
      "Instantly alert emergency services and contacts with a single tap.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security",
    description:
      "Your data is secure. Enjoy multilingual support and control your privacy settings.",
  },
];

export function OnboardingCarousel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {onboardingSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                    <slide.icon className="w-16 h-16 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-muted-foreground">
                      {slide.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
      <Button asChild className="mt-8">
        <Link href="/signup">Get Started</Link>
      </Button>
    </div>
  );
}
