
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  isSOS?: boolean;
}

interface BottomNavBarProps {
  navItems: NavItem[];
}

export function BottomNavBar({ navItems }: BottomNavBarProps) {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <nav className="flex h-16 items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          if (item.isSOS) {
            return (
              <div key={item.label} className="-mt-8">
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-16 w-16 flex-col items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-lg",
                  )}
                >
                  <item.icon className="h-7 w-7" />
                  <span className="text-xs font-bold">{item.label}</span>
                </Link>
              </div>
            );
          }
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-sm font-medium transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <item.icon className="h-6 w-6" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
