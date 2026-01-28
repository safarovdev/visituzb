import type { Review } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id ${id} not found`);
  }
  return image;
};

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Алексей Воробьев',
    location: 'Самарканд',
    rating: 5,
    text: 'Незабываемое путешествие! Организация на высшем уровне. Гид Алишер - настоящий профессионал своего дела. Увидели все, что планировали и даже больше. Однозначно рекомендую!',
    image: getImage('review-avatar-1'),
  },
  {
    id: '2',
    name: 'Елена Смирнова',
    location: 'Бухара и Хива',
    rating: 5,
    text: 'Это было волшебно! Бухара и Хива - города-сказки. Спасибо компании за безупречный сервис, комфортные отели и интереснейшие экскурсии. Вернусь сюда снова!',
    image: getImage('review-avatar-2'),
  },
  {
    id: '3',
    name: 'Иван Петров',
    location: 'Тур по всему Узбекистану',
    rating: 4,
    text: 'Отличный тур, очень насыщенная программа. Единственный минус - хотелось бы больше свободного времени в Самарканде. В остальном все прекрасно, особенно впечатлила еда!',
    image: getImage('review-avatar-3'),
  },
  {
    id: '4',
    name: 'Мария Кузнецова',
    location: 'Самарканд',
    rating: 5,
    text: 'Поездка превзошла все ожидания! Красота архитектуры просто завораживает. Отдельное спасибо нашему гиду за увлекательные рассказы и отличное настроение.',
    image: getImage('review-avatar-4'),
  },
];
