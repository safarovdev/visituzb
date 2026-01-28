import Image from 'next/image';
import { Star } from 'lucide-react';
import type { Review } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="flex h-full flex-col p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <CardContent className="flex h-full flex-col p-0">
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={review.image.imageUrl} alt={review.name} data-ai-hint={review.image.imageHint} />
            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-lg">{review.name}</p>
            <p className="text-sm text-muted-foreground">{review.location}</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground text-base flex-grow">&ldquo;{review.text}&rdquo;</p>
      </CardContent>
    </Card>
  );
}
