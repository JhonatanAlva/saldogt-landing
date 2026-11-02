import { Plus } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const faqs = [
  {
    question: "¿Qué es SaldoGT?",
    answer:
      "SaldoGT es una plataforma para gestionar ingresos, gastos, presupuestos y metas de ahorro desde un solo lugar, con montos en quetzales.",
  },
  {
    question: "¿SaldoGT es gratuito?",
    answer:
      "Sí. Puedes comenzar a utilizar SaldoGT de forma gratuita y acceder a las principales herramientas de control financiero.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Sí. Tu información financiera es privada y solo tú tienes acceso a tus datos personales. No vendemos tu información a terceros.",
  },
  {
    question: "¿Puedo registrar ingresos y gastos?",
    answer:
      "Sí. SaldoGT permite registrar ingresos, gastos, gastos fijos e ingresos recurrentes para llevar un control completo de tus finanzas.",
  },
  {
    question: "¿Cómo funciona el Asistente IA?",
    answer:
      "El Asistente IA analiza tus movimientos financieros y genera recomendaciones personalizadas para ayudarte a tomar mejores decisiones.",
  },
  {
    question: "¿Puedo establecer metas de ahorro?",
    answer:
      "Sí. Puedes crear metas de ahorro, monitorear tu progreso y visualizar cuánto te falta para alcanzar cada objetivo.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper py-24 md:py-32">
      <Reveal className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p
            data-reveal
            className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700"
          >
            Preguntas frecuentes
          </p>
          <h2
            data-reveal
            className="mt-4 text-4xl font-bold tracking-tight text-text md:text-5xl"
          >
            Resolvemos tus dudas.
          </h2>
          <p data-reveal className="mt-5 max-w-sm leading-7 text-text-muted">
            Todo lo que necesitas saber antes de empezar a usar SaldoGT.
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} data-reveal className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold text-text [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-brand-700 transition-transform duration-300 group-open:rotate-45 group-open:border-brand-500/40 group-open:bg-brand-50">
                  <Plus size={18} aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-14 leading-7 text-text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
