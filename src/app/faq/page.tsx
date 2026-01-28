import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollAnimation } from '@/components/scroll-animation';

const faqs = [
  {
    question: "Какое лучшее время для посещения Узбекистана?",
    answer: "Лучшее время для поездки в Узбекистан - весна (с марта по май) и осень (с сентября по ноябрь). В это время погода наиболее комфортная для экскурсий и прогулок."
  },
  {
    question: "Нужна ли мне виза?",
    answer: "Для граждан многих стран, включая Россию и страны СНГ, действует безвизовый режим. Рекомендуем уточнить информацию для вашего гражданства на сайте МИД Узбекистана."
  },
  {
    question: "Какая валюта используется в Узбекистане?",
    answer: "Национальная валюта - узбекский сум (UZS). Обменять валюту можно в банках и официальных обменных пунктах. В крупных городах также принимают к оплате банковские карты."
  },
  {
    question: "Что входит в стоимость тура?",
    answer: "Обычно в стоимость тура включено проживание, трансферы по программе, услуги гида и завтраки. Конкретный перечень услуг указан в описании каждого тура. Авиабилеты, как правило, приобретаются отдельно."
  }
]

export default function FaqPage() {
  return (
    <ScrollAnimation className="container max-w-4xl py-12 md:py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Часто задаваемые вопросы</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Здесь мы собрали ответы на самые популярные вопросы о путешествиях в Узбекистан.
        </p>
      </div>
      <Accordion type="single" collapsible className="mt-12 w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-left text-xl hover:no-underline">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollAnimation>
  );
}
