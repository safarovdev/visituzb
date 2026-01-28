import type { TeamMember } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id ${id} not found`);
  }
  return image;
};

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Акбар Исламов',
    role: 'Генеральный директор',
    image: getImage('team-director'),
  },
  {
    id: '2',
    name: 'Дильноза Азизова',
    role: 'Руководитель отдела продаж',
    image: getImage('team-manager'),
  },
  {
    id: '3',
    name: 'Алишер Рахмонов',
    role: 'Гид-экскурсовод',
    image: getImage('team-guide-1'),
  },
  {
    id: '4',
    name: 'Тимур Юсупов',
    role: 'Водитель',
    image: getImage('team-driver-1'),
  },
];
