import type { Tour } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id ${id} not found`);
  }
  return image;
};

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'sogdian-tale-samarkand',
    name: 'Согдийская сказка: Самарканд',
    description: 'Погрузитесь в величие древней столицы Тамерлана. Посетите площадь Регистан, мавзолей Гур-Эмир и обсерваторию Улугбека.',
    itinerary: ['Площадь Регистан', 'Мавзолей Гур-Эмир', 'Обсерватория Улугбека', 'Рынок Сиаб'],
    price: 450,
    guide: 'Алишер Рахмонов',
    image: getImage('tour-samarkand'),
  },
  {
    id: '2',
    slug: 'sacred-bukhara',
    name: 'Священная Бухара',
    description: 'Откройте для себя духовный центр Великого шелкового пути. Более 140 архитектурных памятников, включая минарет Калян.',
    itinerary: ['Минарет Калян', 'Крепость Арк', 'Мавзолей Саманидов', 'Торговые купола'],
    price: 400,
    guide: 'Зарина Каримова',
    image: getImage('tour-bukhara'),
  },
  {
    id: '3',
    slug: 'khiva-open-air-museum',
    name: 'Хива: Музей под открытым небом',
    description: 'Путешествие во времени в Ичан-Кале, внутреннем городе Хивы, окруженном мощными стенами. Ощутите атмосферу средневекового восточного города.',
    itinerary: ['Ичан-Кала', 'Минарет Кальта-Минар', 'Дворец Таш-Хаули', 'Медресе Мухаммад Амин-хана'],
    price: 380,
    guide: 'Рустам Ибрагимов',
    image: getImage('tour-khiva'),
  },
  {
    id: '4',
    slug: 'pearls-of-uzbekistan',
    name: 'Жемчужины Узбекистана',
    description: 'Большое путешествие по трем великим городам: Ташкент, Самарканд и Бухара. Лучшее из Узбекистана за одну поездку.',
    itinerary: ['Ташкент', 'Самарканд', 'Бухара', 'Переезд на скоростном поезде "Афросиаб"'],
    price: 950,
    guide: 'Елена Пак',
    image: getImage('tour-tashkent'),
  },
];
