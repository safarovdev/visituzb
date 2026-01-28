'use server';

import { z } from 'zod';

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    phone?: string[];
    message?: string[];
  };
};

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать не менее 2 символов.' }),
  phone: z.string().min(7, { message: 'Пожалуйста, введите корректный номер телефона.' }),
  message: z.string().optional(),
});

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Пожалуйста, исправьте ошибки в форме.',
    };
  }

  try {
    // Here you would typically send an email, save to a DB, or call an external API
    console.log('New contact submission:', validatedFields.data);

    return { message: 'Спасибо! Ваша заявка отправлена. Мы скоро с вами свяжемся.' };
  } catch (e) {
    return {
      message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.',
    };
  }
}
