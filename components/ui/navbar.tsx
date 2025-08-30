"use client";

import { Menu, School } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Kegiatan', href: '/activities' },
    { label: 'Berita', href: '/news' },
    { label: 'Kontak', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


    return (
<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-10">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <School className="h-6 w-6" />
          <span className="font-bold ">Lorem School</span>
        </Link>
        <div className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="mt-4">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <School className="h-6 w-6" />
                  <span className="font-bold ">Lorem School</span>
                </Link></SheetTitle> 
                <SheetDescription className="sr-only"></SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                      pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
    )
}