import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimation } from '@/components/scroll-animation';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <ScrollAnimation as="section" className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Галерея</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Моменты из путешествий, которые останутся в памяти навсегда.
        </p>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((img) => (
          <div key={img.id} className="relative break-inside-avoid overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={img.imageUrl}
              alt={img.description}
              width={500}
              height={500}
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
              data-ai-hint={img.imageHint}
            />
          </div>
        ))}
      </div>
    </ScrollAnimation>
  );
}
