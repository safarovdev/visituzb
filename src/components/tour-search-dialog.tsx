'use client';

import { useState } from 'react';
import { useActions, type TourSearchOutput } from 'ai/rsc';
import { Loader2, Sparkles, Search } from 'lucide-react';

import { tourSearch } from '@/ai/flows/tour-search';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function TourSearchDialog() {
  const [open, setOpen] = useState(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="text-lg animate-pulse">Подобрать тур сейчас</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Умный подбор тура
          </DialogTitle>
          <DialogDescription>
            Опишите свои пожелания (например, "исторический тур для семьи" или "горы и природа"), и наш ИИ подберет идеальные варианты.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSearch} className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Например, гастрономический тур по Бухаре"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" size="icon" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            <span className="sr-only">Искать</span>
          </Button>
        </form>
        <div className="mt-4 max-h-[50vh] overflow-y-auto">
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
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{tour.name}</CardTitle>
                      <CardDescription>Гид: {tour.guide}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{tour.description}</p>
                      <p className="text-sm font-medium mb-2">Маршрут:</p>
                      <p className="text-sm text-muted-foreground mb-4">{tour.itinerary}</p>
                       <Badge variant="secondary" className="text-base">${tour.price}</Badge>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-center text-muted-foreground py-8">По вашему запросу ничего не найдено. Попробуйте изменить ключевые слова.</p>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
