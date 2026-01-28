import { ScrollAnimation } from '@/components/scroll-animation';
import { Star, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'gallery-5');

  return (
    <ScrollAnimation>
      <div className="container max-w-6xl py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">О компании "Visit Uzbekistan"</h1>
          <p className="mt-6 mx-auto max-w-3xl text-xl text-muted-foreground">
            Ваш надежный проводник в мир древних городов, великолепной архитектуры и несравненного гостеприимства солнечного Узбекистана.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="prose prose-lg max-w-none text-foreground prose-headings:font-semibold prose-headings:text-foreground">
                <h2>Наша миссия</h2>
                <p>
                    Мы стремимся не просто организовывать туры, а создавать незабываемые впечатления, которые остаются в сердце на всю жизнь. Наша цель — показать вам настоящий Узбекистан, его душу, его богатое культурное наследие и современных, открытых людей. Мы хотим, чтобы каждое путешествие с нами было открытием.
                </p>
                <h2>Наше видение</h2>
                <p>
                    Стать ведущим туроператором по Узбекистану, известным своим безупречным сервисом, уникальными маршрутами и индивидуальным подходом к каждому клиенту. Мы верим, что путешествия обогащают, и стремимся сделать их максимально комфортными, безопасными и насыщенными.
                </p>
                 <h2>Наши ценности</h2>
                <ul>
                    <li><strong>Качество:</strong> Мы уделяем внимание каждой детали, от выбора отелей до квалификации гидов.</li>
                    <li><strong>Аутентичность:</strong> Мы предлагаем маршруты, которые позволяют глубоко погрузиться в культуру и быт страны.</li>
                    <li><strong>Забота о клиенте:</strong> Ваше удобство и безопасность — наш главный приоритет 24/7.</li>
                    <li><strong>Страсть к путешествиям:</strong> Мы любим Узбекистан и хотим разделить эту любовь с вами.</li>
                </ul>
            </div>
             <div className="relative aspect-[4/3] w-full h-full min-h-[400px] overflow-hidden rounded-2xl shadow-lg">
                {aboutImage && <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={aboutImage.imageHint}
                />}
            </div>
        </div>

        <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Почему выбирают нас?</h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <Briefcase className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">10+ лет опыта</h3>
                    <p className="text-muted-foreground mt-2">Мы досконально знаем Узбекистан и туристический рынок.</p>
                </div>
                <div className="flex flex-col items-center">
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">5000+ довольных туристов</h3>
                    <p className="text-muted-foreground mt-2">Ежегодно нам доверяют свой отдых тысячи путешественников.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <Star className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">Рейтинг 4.9/5</h3>
                    <p className="text-muted-foreground mt-2">Высокие оценки подтверждают качество нашей работы.</p>
                </div>
            </div>
        </div>

      </div>
    </ScrollAnimation>
  );
}