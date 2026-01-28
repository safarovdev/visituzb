import { ScrollAnimation } from '@/components/scroll-animation';
import { reviews } from '@/lib/reviews-data';
import { ReviewCard } from '@/components/review-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ReviewsPage() {
  return (
    <ScrollAnimation>
      <section className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Отзывы наших клиентов</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
            Мы гордимся высоким качеством наших услуг и рады делиться впечатлениями туристов, которые уже открыли для себя Узбекистан вместе с нами.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="mt-16 text-center">
            <Button size="lg" asChild>
                <Link href="/contact">Оставить свой отзыв</Link>
            </Button>
        </div>
      </section>
    </ScrollAnimation>
  );
}
