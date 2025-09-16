"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { ChevronRight, QrCode } from "lucide-react";

export function DigitalIdSummaryCard() {
  const { user, loading } = useAuth();

  return (
    <Link href="/digital-id" className="block">
      <Card className="shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {loading ? (
              <Skeleton className="h-12 w-12 rounded-full" />
            ) : (
              <div className="p-2 bg-blue-100 rounded-full">
                <Avatar className="h-10 w-10">
                   <div className="flex items-center justify-center h-full w-full bg-blue-200 rounded-full">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1h-1V6a4 4 0 00-4-4zm0 2a2 2 0 012 2v1H8V6a2 2 0 012-2z"></path></svg>
                   </div>
                </Avatar>
              </div>
            )}
            <div>
              {loading ? (
                <>
                  <Skeleton className="h-5 w-24 mb-1" />
                  <Skeleton className="h-4 w-32" />
                </>
              ) : (
                <>
                  <h3 className="font-semibold text-lg">{user?.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Digital Tourist ID
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <QrCode className="h-8 w-8 text-foreground" />
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
