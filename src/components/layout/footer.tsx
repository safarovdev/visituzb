import Link from 'next/link';
import { Mail, Phone, MapPin, Mountain } from 'lucide-react';

const navLinks = [
  { href: '#tours', label: 'Подборка туров' },
  { href: '#custom-tour', label: 'Мой тур' },
  { href: '#about', label: 'О компании' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact-form', label: 'Контакты' },
];

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Telegram', href: '#' },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold tracking-tighter">Shaffron Tour</span>
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
                  <Link href={link.href} className="text-base text-muted-foreground hover:text-foreground">
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
                <a href="tel:+998901234567" className="text-base text-muted-foreground hover:text-foreground">+998 (90) 123-45-67</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                <a href="mailto:info@visituz.com" className="text-base text-muted-foreground hover:text-foreground">info@visituz.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                <p className="text-base text-muted-foreground">г. Ташкент, ул. Амира Темура, 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Shaffron Tour. Все права защищены.</p>
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
