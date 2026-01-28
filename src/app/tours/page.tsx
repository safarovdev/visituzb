import { tours } from '@/lib/tour-data';
import { TourCard } from '@/components/tour-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ToursPage() {
  return (
    <>
      <div className="bg-secondary">
        <section className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Каталог туров</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              Откройте для себя Узбекистан с нашими эксклюзивными турами. Каждый маршрут тщательно продуман, чтобы вы получили незабываемые впечатления.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>
      </div>
      <section className="container text-center">
        <h2 className="text-5xl font-bold tracking-tight">Не нашли свой тур?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
          Мы с радостью создадим для вас индивидуальный маршрут, учитывая все ваши пожелания.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="text-lg">
            <Link href="/contact">Заказать индивидуальный тур</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
