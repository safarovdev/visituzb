import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { tours } from '@/lib/tour-data';
import { teamMembers } from '@/lib/team-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TourCard } from '@/components/tour-card';
import { TourSearchDialog } from '@/components/tour-search-dialog';
import { ContactForm } from '@/components/contact-form';

const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id)!;

const advantages = [
  { title: "Эксклюзивные маршруты", description: "Мы создаем уникальные туры, которые вы не найдете больше нигде." },
  { title: "Лучшие гиды", description: "Наши гиды - настоящие профессионалы и знатоки своего дела." },
  { title: "Комфорт и безопасность", description: "Мы заботимся о каждой детали вашего путешествия." },
  { title: "Поддержка 24/7", description: "Всегда на связи, чтобы помочь вам в любой ситуации." },
];

export default function HomePage() {
  const heroImage = getImage('hero-uzbekistan');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <>
      {/* Hero Section */}
      <section className="relative -mt-16 h-[70vh] min-h-[500px] w-full pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">Откройте Сердце Шелкового Пути</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
            Исследуйте древние города, величественную архитектуру и богатое культурное наследие Узбекистана с нашими эксклюзивными турами.
          </p>
          <div className="mt-8">
            <TourSearchDialog />
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="bg-secondary">
        <div className="container">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Готовые туры для идеального путешествия</h2>
              <p className="mt-2 text-muted-foreground">Самые популярные маршруты, проверенные временем и сотнями довольных туристов.</p>
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
      </section>

      {/* Individual Tour Section */}
      <section id="custom-tour" className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Не нашли свой тур?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Мы с радостью создадим для вас индивидуальный маршрут, учитывая все ваши пожелания.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="text-lg">
            <a href="#contact-form">Подобрать индивидуальный тур</a>
          </Button>
        </div>
      </section>

      {/* About in Numbers Section */}
      <section className="bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">О компании в цифрах</h2>
              <p className="mt-4 text-muted-foreground">Наша репутация, подкрепленная фактами и доверием наших клиентов.</p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" variant="outline">Документы и лицензия</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <h3 className="text-sm font-medium">Клиентов в год</h3>
                  <Users className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5,000+</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <h3 className="text-sm font-medium">Рейтинг</h3>
                  <Star className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.9/5.0</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Наша команда</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Профессионалы, которые сделают ваше путешествие незабываемым.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => {
            const memberImage = getImage(member.image.id);
            return (
              <div key={member.id} className="text-center">
                <Avatar className="mx-auto h-32 w-32">
                  <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint}/>
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-secondary">
        <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Почему мы?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Ваше идеальное путешествие - наша работа.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {advantages.map((adv) => (
                    <div key={adv.title}>
                        <CheckCircle className="mx-auto h-10 w-10 text-primary" />
                        <h3 className="mt-4 text-lg font-semibold">{adv.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{adv.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Галерея</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Моменты из путешествий, которые останутся в памяти навсегда.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((img, index) => (
            <div key={img.id} className={`relative aspect-square overflow-hidden rounded-lg ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}>
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
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Нужна консультация?</h2>
              <p className="mt-4 text-muted-foreground">
                Оставьте свои контакты, и наш специалист свяжется с вами, чтобы ответить на все вопросы и помочь с выбором тура.
              </p>
            </div>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Форма обратной связи</h3>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
