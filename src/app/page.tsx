import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Users, Award, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { tours } from '@/lib/tour-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TourCard } from '@/components/tour-card';
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
    return {
      id,
      imageUrl: '',
      description: '',
      imageHint: ''
    };
  }
  return image;
};

const faqs = [
  {
    question: "Какое лучшее время для посещения Узбекистана?",
    answer: "Лучшее время для поездки в Узбекистан — весна (с марта по май) и осень (с сентября по ноябрь). В это время погода наиболее комфортная для экскурсий и прогулок."
  },
  {
    question: "Нужна ли мне виза?",
    answer: "Для граждан многих стран, включая Россию и страны СНГ, действует безвизовый режим. Рекомендуем уточнить информацию для вашего гражданства на сайте МИД Узбекистана."
  },
  {
    question: "Какая валюта используется в Узбекистане?",
    answer: "Национальная валюта — узбекский сум (UZS). Обменять валюту можно в банках и официальных обменных пунктах."
  },
  {
    question: "Как узнать стоимость тура?",
    answer: "Стоимость каждого тура рассчитывается индивидуально в зависимости от количества человек, выбранных отелей и дополнительных пожеланий. Оставьте заявку, и мы подготовим расчет для вас."
  }
];

export default function HomePage() {
  const heroImage = getImage('hero-uzbekistan');
  const aboutImage = getImage('about-main');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-') || p.id.startsWith('image-')).slice(0, 12);
  const faqImage = getImage('faq-side');
  const contactImage1 = getImage('tour-samarkand');
  const contactImage2 = getImage('tour-bukhara');

  return (
    <>
      {/* Hero Section */}
      <ScrollAnimation as="section" className="relative h-[85vh] md:h-[90vh] w-full pt-0">
        <div className="absolute inset-0 z-0">
          {heroImage.imageUrl && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">Saffron Tour</h1>
          <p className="mt-6 max-w-4xl text-xl text-white/90 md:text-2xl lg:text-3xl">
            Исследуйте Узбекистан с нашими эксклюзивными турами. Откройте древние города, величественную архитектуру и богатое культурное наследие.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild className="text-lg md:text-xl px-8 md:px-10 py-6 md:py-8">
              <Link href="#tours">Смотреть туры</Link>
            </Button>
          </div>
        </div>
      </ScrollAnimation>

      {/* About Section */}
      <section id="about" className="bg-background overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">О компании Saffron Tour</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Ваш надежный проводник в мир древних городов, великолепной архитектуры и несравненного гостеприимства солнечного Узбекистана.
              </p>
              <div className="space-y-4 prose prose-lg text-muted-foreground">
                <p>Мы стремимся не просто организовывать туры, а создавать незабываемые впечатления. Наша цель — показать вам настоящий Узбекистан, его душу и богатое культурное наследие.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                  <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> 10+ лет опыта</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> 5000+ туристов</li>
                  <li className="flex items-center gap-2 sm:col-span-2"><CheckCircle className="h-5 w-5 text-primary" /> Рейтинг 4.9/5 на основе отзывов</li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl lg:order-last order-first">
               {aboutImage.imageUrl && (
                 <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
               )}
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">Почему мы?</h2>
              <p className="text-lg md:text-xl text-muted-foreground">Мы делаем каждое путешествие особенным для вас.</p>
            </ScrollAnimation>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Индивидуальный подход',
                desc: 'Мы создаем туры, которые подходят именно вам и вашим интересам.',
                icon: <Users className="h-10 w-10 text-primary" />
              },
              {
                title: 'Опытные гиды',
                desc: 'Наши эксперты знают все секреты и легенды древних городов.',
                icon: <Award className="h-10 w-10 text-primary" />
              },
              {
                title: 'Гарантия качества',
                desc: 'Мы заботимся о каждой детали, чтобы ваш отдых был безупречным.',
                icon: <ShieldCheck className="h-10 w-10 text-primary" />
              }
            ].map((item, i) => (
              <ScrollAnimation key={i} className="flex flex-col items-center text-center p-6 md:p-8 rounded-[2rem] bg-background border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 p-4 bg-secondary/50 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="tours" className="bg-secondary">
        <div className="container">
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Популярные туры</h2>
            <p className="mt-2 text-lg md:text-xl text-muted-foreground">Маршруты Saffron Tour, проверенные временем.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="bg-background text-center py-16 md:py-24">
        <div className="container px-4">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Не нашли свой тур?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
              Мы с радостью подберём и составим для вас индивидуальное путешествие, полностью учитывая ваши предпочтения.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="text-lg px-8 md:px-10 py-5 md:py-6">
                <Link href="#contact-form">Заказать индивидуальный тур</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-background">
        <div className="container">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Галерея моментов</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-4">
            {galleryImages.map((img, index) => (
              <div key={img.id} className={`relative aspect-square overflow-hidden rounded-xl md:rounded-2xl shadow-lg ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                 {img.imageUrl && (
                   <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      data-ai-hint={img.imageHint}
                    />
                 )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <ScrollAnimation className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl hidden lg:block">
              {faqImage.imageUrl && (
                <Image
                  src={faqImage.imageUrl}
                  alt={faqImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={faqImage.imageHint}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </ScrollAnimation>
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 md:mb-8">Часто задаваемые вопросы</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left text-lg md:text-xl py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="bg-background">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Свяжитесь с нами</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Оставьте заявку, и наш специалист свяжется с вами для подбора идеального тура и составления программы путешествия.
              </p>
              <div className="relative h-64 sm:h-80 md:h-96 w-full max-w-lg lg:h-[450px] mx-auto lg:mx-0">
                <div className="absolute top-0 left-0 w-3/5 h-3/5 -rotate-6 z-10">
                  {contactImage1.imageUrl && (
                    <Image
                      src={contactImage1.imageUrl}
                      alt={contactImage1.description}
                      fill
                      className="rounded-2xl object-cover shadow-2xl"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  )}
                </div>
                <div className="absolute bottom-0 right-0 w-4/5 h-4/5 rotate-3">
                  {contactImage2.imageUrl && (
                    <Image
                      src={contactImage2.imageUrl}
                      alt={contactImage2.description}
                      fill
                      className="rounded-2xl object-cover shadow-2xl"
                      sizes="(max-width: 1024px) 60vw, 30vw"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md shadow-2xl p-4 sm:p-6 md:p-8 rounded-[2rem]">
                <CardHeader className="p-0 mb-6 text-center">
                  <CardTitle className="text-2xl md:text-3xl">Форма заявки</CardTitle>
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