
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

// Константы уведомлений
const TG_BOT_TOKEN = '8845130008:AAF-FhnQs3KYAV-NGbK4hpT-nkMi-TBVMmQ';
const TG_CHAT_ID = '-5186973357';
const ADMIN_EMAIL = 'nigina10.02@gmail.com';

/**
 * Экранирование спецсимволов для корректного отображения в HTML-режиме Telegram
 */
function escapeHtml(unsafe: string) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

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

  const { name, phone, message } = validatedFields.data;

  try {
    // 1. Отправка уведомления в Telegram (с использованием fetch)
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message || '');

    const tgText = `
<b>🚀 Новая заявка на Saffron Tour</b>

👤 <b>Имя:</b> ${safeName}
📞 <b>Телефон:</b> ${safePhone}
💬 <b>Сообщение:</b> ${safeMessage || '—'}
    `.trim();

    try {
      await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: tgText,
          parse_mode: 'HTML',
        }),
      });
    } catch (tgError) {
      console.error('Ошибка уведомления в Telegram:', tgError);
    }

    // 2. Уведомление на почту (Логирование для дальнейшей настройки)
    // Примечание: Для полноценной отправки писем необходимо подключить SMTP (например, nodemailer) 
    // или внешний API (Resend / SendGrid), так как для этого требуются пароли приложения или API ключи.
    console.log(`[Lead Notification] Целевой Email: ${ADMIN_EMAIL}. Заявка от: ${name} (${phone})`);

    return { message: 'Спасибо! Ваша заявка отправлена. Мы скоро с вами свяжемся.' };
  } catch (e) {
    console.error('Ошибка при обработке формы:', e);
    return {
      message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.',
    };
  }
}
