import Image from 'next/image';
import Link from 'next/link';
import { MapPin, User, Tag, ArrowRight } from 'lucide-react';

import type { Tour } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type TourCardProps = {
  tour: Tour;
};

export function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <Image
            src={tour.image.imageUrl}
            alt={tour.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={tour.image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl font-semibold mb-2">{tour.name}</CardTitle>
        <p className="text-muted-foreground line-clamp-3 text-sm">{tour.description}</p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{tour.itinerary.slice(0, 2).join(', ')}...</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="h-4 w-4 text-primary" />
            <span>Гид: {tour.guide}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6 pt-0">
        {/* <div className="text-2xl font-bold">
          ${tour.price}
          <span className="text-sm font-normal text-muted-foreground">/чел</span>
        </div> */}
        <Button asChild variant="ghost" className="text-primary hover:text-primary">
          <Link href={`/tours/${tour.slug}`}>
            Подробнее <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
