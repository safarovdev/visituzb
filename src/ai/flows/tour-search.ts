'use server';
/**
 * @fileOverview A tour search AI agent.
 *
 * - tourSearch - A function that handles the tour search process.
 * - TourSearchInput - The input type for the tourSearch function.
 * - TourSearchOutput - The return type for the tourSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TourSearchInputSchema = z.object({
  keywords: z.string().describe('Keywords to search for tours.'),
});
export type TourSearchInput = z.infer<typeof TourSearchInputSchema>;

const TourSearchOutputSchema = z.object({
  tours: z.array(
    z.object({
      name: z.string().describe('The name of the tour.'),
      description: z.string().describe('A brief description of the tour.'),
      itinerary: z.string().describe('The itinerary of the tour.'),
      price: z.number().describe('The price of the tour.'),
      guide: z.string().describe('The name of the tour guide.'),
    })
  ).describe('A list of tours that match the search keywords.'),
});
export type TourSearchOutput = z.infer<typeof TourSearchOutputSchema>;

export async function tourSearch(input: TourSearchInput): Promise<TourSearchOutput> {
  return tourSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tourSearchPrompt',
  input: {schema: TourSearchInputSchema},
  output: {schema: TourSearchOutputSchema},
  prompt: `You are a tour guide expert in Uzbekistan.
  Based on the keywords, find the best tours that match the user's interests.
  Return a list of tours with their name, description, itinerary, price, and guide.

  Keywords: {{{keywords}}}`,
});

const tourSearchFlow = ai.defineFlow(
  {
    name: 'tourSearchFlow',
    inputSchema: TourSearchInputSchema,
    outputSchema: TourSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
