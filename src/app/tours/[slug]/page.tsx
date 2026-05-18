import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Check, CalendarDays } from 'lucide-react';
import { tours } from '@/lib/tour-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimation } from '@/components/scroll-animation';
import Link from 'next/link';

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <ScrollAnimation className="bg-background">
      <div className="container max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={tour.image.imageUrl}
                alt={tour.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={tour.image.imageHint}
                sizes="(max-width: 1024px) 100vw, 67vw"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{tour.name}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <span>{tour.itinerary.length} дней</span>
              </div>
            </div>
            <div className="mt-8 prose prose-lg max-w-none text-foreground prose-headings:text-foreground">
              <p>{tour.description}</p>
              
              <h3 className="mt-10 font-semibold">Программа тура:</h3>
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
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Оставьте заявку, и наши специалисты свяжутся с вами для уточнения всех деталей и подбора оптимальных условий.
                  </p>
                  <Button size="lg" className="w-full text-lg" asChild>
                    <Link href="/#contact-form">Оставить заявку</Link>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Мы свяжемся с вами в кратчайшие сроки.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
