"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";
import { Skeleton } from "../ui/skeleton";

export function TouristIdCard() {
  const { user, loading } = useAuth();

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {loading ? (
            <Skeleton className="h-20 w-20 rounded-full" />
          ) : user ? (
            <Avatar className="h-20 w-20 border-2 border-primary">
              <AvatarImage
                src={user.avatarUrl}
                alt={user.name || "User"}
                data-ai-hint="person avatar"
              />
              <AvatarFallback>{user.fallback}</AvatarFallback>
            </Avatar>
          ) : null}
          <div className="flex-1 space-y-1">
            {loading ? (
              <>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </>
            ) : user ? (
              <>
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p className="text-sm text-muted-foreground">Indian</p>
              </>
            ) : null}
             <p className="text-xs text-muted-foreground pt-2">
                Passport: ****1234
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center my-4">
            <Image
                src="https://storage.googleapis.com/studio-ux-for-ds-assets/qr-code-68a7f932.png"
                width={160}
                height={160}
                alt="QR Code"
                className="rounded-lg border p-1"
                data-ai-hint="qr code"
            />
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-3 text-center text-xs text-muted-foreground rounded-b-lg">
        Valid till: 26 October, 2024
      </CardFooter>
    </Card>
  );
}
