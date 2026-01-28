import type { ImagePlaceholder } from './placeholder-images';

export type Tour = {
  id: string;
  slug: string;
  name: string;
  description: string;
  itinerary: string[];
  price: number;
  guide: string;
  image: ImagePlaceholder;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: ImagePlaceholder;
};

export type Review = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: ImagePlaceholder;
};
