"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { LayoutGrid, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  return (
    <header className="sticky z-10 top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <LayoutGrid className="h-6 w-6" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary hidden sm:block",
              pathname === "/about" ? "text-foreground" : "text-foreground/60"
            )}
          >
            About
          </Link>
        </nav>
        <div className="flex flex-1 justify-end items-center">
          <Sun
            onClick={() => setTheme("light")}
            className="h-6 w-6 hidden dark:block cursor-pointer"
          />
          <Moon
            onClick={() => setTheme("dark")}
            className="h-6 w-6 dark:hidden cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
