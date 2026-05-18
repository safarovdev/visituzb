'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { href: '#tours', label: 'Подборка туров' },
  { href: '#about', label: 'О компании' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact-form', label: 'Контакты' },
];

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Telegram', href: '#' },
];

export function Footer() {
  const pathname = usePathname();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="https://i.postimg.cc/HLNrd3jV/Shaffron-Tour.png" 
                alt="Shaffron Tour Logo" 
                width={200} 
                height={60} 
                className="h-14 w-auto object-contain"
              />
            </Link>
              <p className="mt-4 max-w-xs text-muted-foreground">
                Ваш надежный партнер в путешествиях по Узбекистану с Shaffron Tour.
              </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Навигация</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={pathname === '/' ? link.href : `/${link.href}`} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-base text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Контакты</h4>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                <a href="tel:+998997032900" className="text-base text-muted-foreground hover:text-foreground">+998 (99) 703-29-00</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                <a href="mailto:nigina10.02@gmail.com" className="text-base text-muted-foreground hover:text-foreground">nigina10.02@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                <p className="text-base text-muted-foreground">г. Бухара, ул. Мустакиллик, 46/4</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {currentYear || 2025} Shaffron Tour. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">{link.name}</span>
                <div className="h-6 w-6 bg-muted-foreground/20 rounded-full"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
