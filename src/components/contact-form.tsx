'use client';

import { useFormStatus } from 'react-dom';
import { useEffect, useActionState } from 'react';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { FormState } from '@/lib/actions';
import { submitContactForm } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending} size="lg">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Отправить заявку
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          title: 'Ошибка валидации',
          description: state.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Успешно!',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Ваше имя</Label>
        <Input type="text" id="name" name="name" placeholder="Имя" required />
        {state.errors?.name && <p className="mt-1 text-xs text-destructive">{state.errors.name.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Номер телефона</Label>
        <Input type="tel" id="phone" name="phone" placeholder="+998 (99) 703-29-00" required />
        {state.errors?.phone && <p className="mt-1 text-xs text-destructive">{state.errors.phone.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Ваше сообщение (необязательно)</Label>
        <Textarea id="message" name="message" placeholder="Хочу узнать больше..." rows={4} />
         {state.errors?.message && <p className="mt-1 text-xs text-destructive">{state.errors.message.join(', ')}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
