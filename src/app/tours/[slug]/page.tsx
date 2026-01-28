import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Check, User, CalendarDays, Tag } from 'lucide-react';
import { tours } from '@/lib/tour-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = tours.find((t) => t.slug === params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={tour.image.imageUrl}
                alt={tour.name}
                fill
                className="object-cover"
                data-ai-hint={tour.image.imageHint}
                sizes="(max-width: 1024px) 100vw, 67vw"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{tour.name}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <span>Гид: {tour.guide}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <span>{tour.itinerary.length} дней</span>
              </div>
            </div>
            <div className="mt-8 prose prose-lg max-w-none text-foreground prose-headings:text-foreground">
              <p>{tour.description}</p>
              
              <h3 className="mt-10 font-semibold">Маршрут:</h3>
              <ul className="space-y-4">
                {tour.itinerary.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-4 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span><strong>День {index + 1}:</strong> {step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Забронировать тур</CardTitle>
                <div className="pt-2 text-3xl font-bold">
                  ${tour.price}
                  <span className="text-base font-normal text-muted-foreground"> / на человека</span>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    {/* Placeholder for form fields like name, email, number of people */}
                    <div className="h-10 w-full rounded-md bg-secondary animate-pulse" />
                  </div>
                   <div>
                    <div className="h-10 w-full rounded-md bg-secondary animate-pulse" />
                  </div>
                  <Button size="lg" className="w-full text-lg">
                    Отправить заявку
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
