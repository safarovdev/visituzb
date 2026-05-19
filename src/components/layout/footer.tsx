'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';
import { navLinks } from './header';

export function Footer() {
  const pathname = usePathname();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.includes('#')) {
      const targetId = href.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="https://i.postimg.cc/HLNrd3jV/Shaffron-Tour.png" 
                alt="Saffron Tour Logo" 
                width={200} 
                height={60} 
                className="h-14 w-auto object-contain"
              />
            </Link>
              <p className="mt-6 max-w-xs text-muted-foreground text-sm md:text-base">
                Ваш надежный партнер в путешествиях по Узбекистану с Saffron Tour. Откройте для себя магию Востока.
              </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Навигация</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Контакты</h4>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                <a href="tel:+998997032900" className="text-base text-muted-foreground hover:text-foreground transition-colors">+998 (99) 703-29-00</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                <a href="mailto:nigina10.02@gmail.com" className="text-base text-muted-foreground hover:text-foreground transition-colors">nigina10.02@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                <p className="text-base text-muted-foreground leading-relaxed">г. Бухара, ул. Мустакиллик, 46/4</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground text-center sm:text-left">
            <p>&copy; {currentYear || 2025} Saffron Tour. Все права защищены.</p>
            <span className="hidden sm:inline-block text-border">|</span>
            <p>Фотографии: <span className="font-semibold text-foreground">Ника Дмитриева</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}