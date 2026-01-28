import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimation } from '@/components/scroll-animation';

export default function ContactPage() {
  return (
    <ScrollAnimation as="section" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Свяжитесь с нами
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Мы всегда рады помочь вам спланировать идеальное путешествие. Задайте нам любой вопрос или просто поздоровайтесь!
              </p>
            </div>
            <div className="space-y-6 text-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl">Телефон</h3>
                  <a href="tel:+998901234567" className="text-muted-foreground hover:text-foreground">
                    +998 (90) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground">Доступны с 9:00 до 18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl">Электронная почта</h3>
                  <a href="mailto:info@visituz.com" className="text-muted-foreground hover:text-foreground">
                    info@visituz.com
                  </a>
                   <p className="text-sm text-muted-foreground">Отвечаем в течение 24 часов</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl">Офис</h3>
                  <p className="text-muted-foreground">
                    г. Ташкент, ул. Амира Темура, 1
                  </p>
                   <p className="text-sm text-muted-foreground">Приходите в гости на чашку чая</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md shadow-2xl p-6 md:p-8">
              <CardHeader className="p-0 mb-6 text-center">
                <CardTitle className="text-3xl">Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
