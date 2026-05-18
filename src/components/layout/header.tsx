'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Mountain } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/tours', label: 'Подборка туров' },
  { href: '/#custom-tour', label: 'Мой тур' },
  { href: '/about', label: 'О компании' },
  { href: '/reviews', label: 'Отзывы' },
  { href: '/faq', label: 'FAQ' },
  { href: '#footer', label: 'Контакты' },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tighter">Shaffron Tour</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === href ? 'text-foreground' : 'text-foreground/60'
              )}
              prefetch={false}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
                <Link href="/contact">Связаться</Link>
            </Button>
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <Link href="/" className="flex items-center gap-2 mb-8" prefetch={false} onClick={() => setMenuOpen(false)}>
                  <Mountain className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl tracking-tighter">Shaffron Tour</span>
                </Link>
                <div className="grid gap-4">
                  {[...navLinks, { href: '/contact', label: 'Контакты' }].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setMenuOpen(false)}
                      prefetch={false}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
