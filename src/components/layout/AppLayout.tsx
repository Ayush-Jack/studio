"use client";

import {
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Home, Map, Bell, Settings, User, QrCode, ShieldAlertIcon, LogOut, Siren } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuth } from "@/hooks/use-auth";
import { BottomNavBar } from "./BottomNavBar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect } from "react";

const navItems = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/map", label: "Map", icon: Map },
  { href: "/alerts", label: "Alerts", icon: Bell },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, loading, logout } = useAuth();
  const isMobile = useIsMobile();
  const router = useRouter();
  
  const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname === '/onboarding' || pathname === '/';

  useEffect(() => {
    if (!loading && !user && !isAuthPage) {
      router.push('/');
    }
    if (!loading && user && (isAuthPage || pathname === '/')) {
        if(pathname !== '/dashboard') router.push('/dashboard');
    }
  }, [user, loading, isAuthPage, router, pathname]);

  if (isAuthPage || loading) {
     if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-background">
                <ShieldAlertIcon className="w-12 h-12 text-primary animate-pulse" />
            </div>
        );
     }
    return <div className="bg-background min-h-screen">{children}</div>;
  }

  const Header = () => (
     <header className="flex h-16 items-center justify-between bg-primary px-4 text-primary-foreground">
        <div className="flex items-center gap-2">
            <p className="font-medium">Namaste, {user?.name?.split(' ')[0]}</p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-xl font-bold">SafeTourism</h1>
        </div>
        <div>
            {/* Can add user menu or settings icon here for larger screens */}
        </div>
    </header>
  );

  return (
    <SidebarProvider>
        <div className="flex flex-col min-h-screen bg-stone-50">
            {!isMobile && <Header />}
            <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 max-w-lg mx-auto w-full">
              {children}
            </main>
            <BottomNavBar navItems={navItems} />
        </div>
    </SidebarProvider>
  );
}
