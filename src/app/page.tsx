import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { tours } from '@/lib/tour-data';
import { reviews } from '@/lib/reviews-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TourCard } from '@/components/tour-card';
import { ReviewCard } from '@/components/review-card';
import { ContactForm } from '@/components/contact-form';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
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
  { title: "Уникальные маршруты", description: "Мы разрабатываем туры, которых нет в стандартных предложениях." },
  { title: "Профессиональные гиды", description: "С вами работают опытные специалисты, знающие своё дело." },
  { title: "Комфорт и безопасность", description: "Мы продумываем каждую деталь вашего путешествия." },
  { title: "Поддержка 24/7", description: "Мы всегда на связи и готовы помочь в любой ситуации." },
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
    answer: "Национальная валюта - узбекский сум (UZS). Обменять валюту можно в банках и официальных обменных пунктах."
  },
  {
    question: "Как узнать стоимость тура?",
    answer: "Стоимость каждого тура рассчитывается индивидуально в зависимости от количества человек, выбранных отелей и дополнительных пожеланий. Оставьте заявку, и мы подготовим расчет для вас."
  }
];

export default function HomePage() {
  const heroImage = getImage('hero-uzbekistan');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 8);
  const faqImage = getImage('gallery-3');
  const contactImage1 = getImage('hero-uzbekistan');
  const contactImage2 = getImage('tour-samarkand');

  return (
    <>
      {/* Hero Section */}
      <ScrollAnimation as="section" className="relative h-[90vh] w-full pt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">Shaffron Tour</h1>
          <p className="mt-6 max-w-4xl text-2xl text-white/90 md:text-3xl">
            Исследуйте Узбекистан с нашими эксклюзивными турами. Откройте древние города, величественную архитектуру и богатое культурное наследие.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild className="text-xl px-10 py-8">
              <Link href="/tours">Смотреть туры</Link>
            </Button>
          </div>
        </div>
      </ScrollAnimation>

      {/* Featured Tours Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Популярные туры</h2>
              <p className="mt-2 text-xl text-muted-foreground">Маршруты Shaffron Tour, проверенные временем.</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/tours">
                Все туры <ArrowRight className="ml-2 h-4 w-4" />
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
      <section id="custom-tour" className="container py-20 text-center">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Индивидуальные программы</h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            Если вы не нашли подходящего варианта, мы с радостью составим для вас персональный маршрут по вашим пожеланиям.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="text-lg">
              <a href="#contact-form">Заказать расчет</a>
            </Button>
          </div>
        </ScrollAnimation>
      </section>

      {/* Advantages Section */}
      <section className="bg-secondary py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Почему выбирают нас</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <div key={adv.title} className="p-6 rounded-2xl bg-card shadow-lg transition-transform hover:-translate-y-2">
                <CheckCircle className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{adv.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={faqImage.imageUrl}
              alt={faqImage.description}
              fill
              className="object-cover"
              data-ai-hint={faqImage.imageHint}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left text-xl">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Отзывы наших клиентов</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reviews.slice(0, 2).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/reviews">Читать все отзывы</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Галерея моментов</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((img, index) => (
            <div key={img.id} className={`relative aspect-square overflow-hidden rounded-2xl shadow-lg ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}>
               <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  data-ai-hint={img.imageHint}
                />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/gallery">Вся галерея</Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="bg-secondary py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку, и наш специалист свяжется с вами для подбора идеального тура и индивидуального расчета стоимости.
              </p>
              <div className="relative h-96 w-full max-w-lg lg:h-[450px]">
                <div className="absolute top-0 left-0 w-3/5 h-3/5 -rotate-6">
                  <Image
                    src={contactImage1.imageUrl}
                    alt={contactImage1.description}
                    fill
                    className="rounded-2xl object-cover shadow-2xl"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-4/5 h-4/5 rotate-3">
                  <Image
                    src={contactImage2.imageUrl}
                    alt={contactImage2.description}
                    fill
                    className="rounded-2xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md shadow-2xl p-6 md:p-8">
                <CardHeader className="p-0 mb-6 text-center">
                  <CardTitle className="text-3xl">Форма заявки</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
