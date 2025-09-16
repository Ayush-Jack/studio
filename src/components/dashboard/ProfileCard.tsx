"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { QrCode } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Skeleton } from "../ui/skeleton";

export function ProfileCard() {
  const { user, loading } = useAuth();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center gap-4">
        {loading ? (
          <>
            <Skeleton className="h-24 w-24 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          </>
        ) : user ? (
          <>
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user.avatarUrl}
                alt={user.name || "User"}
                data-ai-hint="person avatar"
              />
              <AvatarFallback>{user.fallback}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-headline">{user.name}</h3>
              <p className="text-sm text-muted-foreground">
                Passport: ****1234
              </p>
            </div>
          </>
        ) : null}
        <div className="rounded-lg border p-4 bg-secondary/30">
          <p className="text-sm font-medium mb-2 flex items-center justify-center gap-2">
            <QrCode size={16} /> Digital Tourist ID
          </p>
          <Image
            src="https://picsum.photos/seed/qr-code/200/200"
            width={150}
            height={150}
            alt="QR Code"
            className="rounded-md mx-auto"
            data-ai-hint="qr code"
          />
        </div>
      </CardContent>
    </Card>
  );
}
