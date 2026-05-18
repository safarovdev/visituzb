'use client';

import { use } from 'react';
import Image from 'next/image';
import { tours } from '@/lib/tour-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimation } from '@/components/scroll-animation';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <ScrollAnimation className="bg-background">
      <div className="container max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-start">
          <div className="lg:col-span-2">
            <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={tour.image.imageUrl}
                alt={tour.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                data-ai-hint={tour.image.imageHint}
                sizes="(max-width: 1024px) 100vw, 67vw"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{tour.name}</h1>
            
            <div className="mt-10 space-y-8">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                {tour.description}
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Программа тура:</h3>
                <div className="space-y-4">
                  {tour.itinerary.map((step, index) => (
                    <div key={index} className="flex items-start bg-secondary/30 p-4 rounded-xl border border-border/50">
                      <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-4">
                        {index + 1}
                      </div>
                      <span className="text-lg">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-primary/10 shadow-2xl overflow-hidden rounded-[2rem]">
                <CardHeader className="bg-primary text-primary-foreground p-8">
                  <CardTitle className="text-2xl">Забронировать тур</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Оставьте заявку, и наш специалист свяжется с вами для уточнения деталей и составления идеальной программы вашего путешествия.
                    </p>
                    <Button size="lg" className="w-full text-xl py-8 shadow-xl" asChild>
                      <Link href="/#contact-form">Оставить заявку</Link>
                    </Button>
                    <div className="pt-4 border-t border-border flex flex-col items-center gap-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">Бесплатная консультация</p>
                      <p className="text-sm font-medium">Мы ответим в течение 15 минут</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
