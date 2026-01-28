'use client';

import { useState } from 'react';
import { Loader2, Sparkles, Search } from 'lucide-react';

import { tourSearch, type TourSearchOutput } from '@/ai/flows/tour-search';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TourSearchPage() {
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<TourSearchOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!keywords.trim()) return;

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const searchResult = await tourSearch({ keywords });
      setResults(searchResult);
    } catch (e) {
      console.error(e);
      setError('Произошла ошибка при поиске. Пожалуйста, попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-4xl py-12 md:py-20">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl flex items-center justify-center gap-4">
                <Sparkles className="h-8 w-8 text-primary" />
                Умный подбор тура
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
                Опишите свои пожелания (например, "исторический тур для семьи" или "горы и природа"), и наш ИИ подберет идеальные варианты.
            </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="flex w-full items-center space-x-2 mb-8">
            <Input
                type="text"
                placeholder="Например, гастрономический тур по Бухаре"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                disabled={loading}
                className="text-lg p-6"
            />
            <Button type="submit" size="icon" disabled={loading} className="w-12 h-12 shrink-0">
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
                <span className="sr-only">Искать</span>
            </Button>
            </form>
            <div className="mt-4">
            {loading && (
                <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Подбираем лучшие варианты...</p>
                </div>
            )}
            {error && <p className="text-destructive text-center">{error}</p>}
            {results && (
                <div className="space-y-4">
                {results.tours.length > 0 ? (
                    results.tours.map((tour, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                        <CardTitle className="text-xl">{tour.name}</CardTitle>
                        <CardDescription>Гид: {tour.guide}</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <p className="text-muted-foreground mb-4">{tour.description}</p>
                        <p className="font-medium mb-2">Маршрут:</p>
                        <p className="text-muted-foreground mb-4">{tour.itinerary}</p>
                        <Badge variant="secondary" className="text-lg font-bold">${tour.price}</Badge>
                        </CardContent>
                    </Card>
                    ))
                ) : (
                    <p className="text-center text-muted-foreground py-8">По вашему запросу ничего не найдено. Попробуйте изменить ключевые слова.</p>
                )}
                </div>
            )}
            </div>
        </div>
    </div>
  );
}
