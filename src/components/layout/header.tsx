'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Mountain, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const navLinks = [
  { href: '#tours', label: 'Подборка туров' },
  { href: '#about', label: 'О компании' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact-form', label: 'Контакты' },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    
    if (pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash without reload
        window.history.pushState(null, '', href);
      }
    }
  };

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
              href={pathname === '/' ? href : `/${href}`}
              onClick={(e) => handleLinkClick(e, href)}
              className="text-foreground/60 transition-colors hover:text-foreground"
              prefetch={false}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
                <Link href="#contact-form" onClick={(e) => handleLinkClick(e, '#contact-form')}>Связаться</Link>
            </Button>
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full h-full p-0 flex flex-col">
                <div className="container flex h-20 items-center justify-between border-b">
                   <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                      <Mountain className="h-6 w-6 text-primary" />
                      <span className="font-bold text-xl tracking-tighter">Shaffron Tour</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                </div>
                <SheetTitle className="sr-only">Навигация</SheetTitle>
                <div className="flex-grow flex flex-col items-center justify-center gap-8">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={pathname === '/' ? href : `/${href}`}
                      className="text-3xl font-bold transition-colors hover:text-primary"
                      onClick={(e) => handleLinkClick(e, href)}
                    >
                      {label}
                    </Link>
                  ))}
                  <Button asChild size="lg" className="mt-4 text-xl px-12 py-6">
                      <Link href="#contact-form" onClick={(e) => handleLinkClick(e, '#contact-form')}>Связаться</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}