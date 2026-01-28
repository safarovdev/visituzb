import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { tours } from '@/lib/tour-data';
import { teamMembers } from '@/lib/team-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TourCard } from '@/components/tour-card';
import { ContactForm } from '@/components/contact-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimation } from '@/components/scroll-animation';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id ${id} not found`);
  }
  return image;
};

const advantages = [
  { title: "Эксклюзивные маршруты", description: "Мы создаем уникальные туры, которые вы не найдете больше нигде." },
  { title: "Лучшие гиды", description: "Наши гиды - настоящие профессионалы и знатоки своего дела." },
  { title: "Комфорт и безопасность", description: "Мы заботимся о каждой детали вашего путешествия." },
  { title: "Поддержка 24/7", description: "Всегда на связи, чтобы помочь вам в любой ситуации." },
];

const faqs = [
  {
    question: "Какое лучшее время для посещения Узбекистана?",
    answer: "Лучшее время для поездки в Узбекистан - весна (с марта по май) и осень (с сентября по ноябрь). В это время погода наиболее комфортная для экскурсий и прогулок."
  },
  {
    question: "Нужна ли мне виза?",
    answer: "Для граждан многих стран, включая Россию и страны СНГ, действует безвизовый режим. Рекомендуем уточнить информацию для вашего гражданства на сайте МИД Узбекистана."
  },
  {
    question: "Какая валюта используется в Узбекистане?",
    answer: "Национальная валюта - узбекский сум (UZS). Обменять валюту можно в банках и официальных обменных пунктах. В крупных городах также принимают к оплате банковские карты."
  },
  {
    question: "Что входит в стоимость тура?",
    answer: "Обычно в стоимость тура включено проживание, трансферы по программе, услуги гида и завтраки. Конкретный перечень услуг указан в описании каждого тура. Авиабилеты, как правило, приобретаются отдельно."
  }
]

export default function HomePage() {
  const heroImage = getImage('hero-uzbekistan');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 8);
  const faqImage = getImage('gallery-3');

  return (
    <>
      {/* Hero Section */}
      <ScrollAnimation as="section" className="relative h-[95vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">Откройте Сердце Шелкового Пути</h1>
          <p className="mt-6 max-w-4xl text-2xl text-white/90 md:text-3xl">
            Исследуйте древние города, величественную архитектуру и богатое культурное наследие Узбекистана с нашими эксклюзивными турами.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild className="text-xl px-10 py-8">
              <Link href="/tours">Подобрать тур сейчас</Link>
            </Button>
          </div>
        </div>
      </ScrollAnimation>

      {/* Featured Tours Section */}
      <ScrollAnimation as="section" className="bg-secondary">
        <div className="container">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-5xl font-bold tracking-tight">Готовые туры</h2>
              <p className="mt-2 text-xl text-muted-foreground">Самые популярные маршруты, проверенные временем.</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/tours">
                Посмотреть все туры <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.slice(0, 3).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Individual Tour Section */}
      <ScrollAnimation as="section" id="custom-tour" className="container text-center">
        <h2 className="text-5xl font-bold tracking-tight">Не нашли свой тур?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
          Мы с радостью создадим для вас индивидуальный маршрут, учитывая все ваши пожелания.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="text-lg">
            <a href="#contact-form">Подобрать индивидуальный тур</a>
          </Button>
        </div>
      </ScrollAnimation>

      {/* About in Numbers Section */}
      <ScrollAnimation as="section" className="bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-5xl font-bold tracking-tight">О нас в цифрах</h2>
              <p className="mt-4 text-xl text-muted-foreground">Наша репутация, подкрепленная фактами.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <h3 className="text-sm font-medium">Клиентов в год</h3>
                  <Users className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5,000+</div>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <h3 className="text-sm font-medium">Рейтинг</h3>
                  <Star className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">4.9/5.0</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Our Team Section */}
      <ScrollAnimation as="section" className="container">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight">Наша команда</h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            Профессионалы, которые сделают ваше путешествие незабываемым.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => {
            const memberImage = getImage(member.image.id);
            return (
              <div key={member.id} className="text-center">
                <Avatar className="mx-auto h-32 w-32 shadow-lg">
                  <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint}/>
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/team">Вся наша команда</Link>
          </Button>
        </div>
      </ScrollAnimation>

      {/* Advantages Section */}
      <ScrollAnimation as="section" className="bg-secondary">
        <div className="container text-center">
            <h2 className="text-5xl font-bold tracking-tight">Почему мы?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
                Ваше идеальное путешествие - наша работа.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {advantages.map((adv) => (
                    <div key={adv.title}>
                        <CheckCircle className="mx-auto h-12 w-12 text-primary" />
                        <h3 className="mt-4 text-xl font-semibold">{adv.title}</h3>
                        <p className="mt-2 text-base text-muted-foreground">{adv.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation as="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold tracking-tight">Часто задаваемые вопросы</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              Ответы на самые популярные вопросы о путешествиях в Узбекистан.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square w-full h-full min-h-[400px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={faqImage.imageUrl}
                  alt={faqImage.description}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={faqImage.imageHint}
                />
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-b-2">
                  <AccordionTrigger className="text-left text-2xl hover:no-underline font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </ScrollAnimation>


      {/* Gallery Section */}
      <ScrollAnimation as="section" className="container">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight">Галерея</h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            Моменты из путешествий, которые останутся в памяти навсегда.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((img, index) => (
            <div key={img.id} className={`relative aspect-square overflow-hidden rounded-2xl shadow-lg ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}>
               <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  data-ai-hint={img.imageHint}
                />
            </div>
          ))}
        </div>
         <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/gallery">Смотреть всю галерею</Link>
          </Button>
        </div>
      </ScrollAnimation>

      {/* Contact Section */}
      <ScrollAnimation as="section" id="contact-form" className="bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Нужна консультация?</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Оставьте свои контакты, и наш специалист свяжется с вами, чтобы ответить на все вопросы и помочь с выбором тура.
              </p>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-2xl font-semibold">Форма обратной связи</h3>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}
