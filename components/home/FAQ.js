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
    <section id="faq" className="bg-canvas py-24 md:py-32">
      <Reveal className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p data-reveal className="text-[21px] font-semibold text-ink">
            Preguntas frecuentes
          </p>
          <h2
            data-reveal
            className="mt-2 text-[2.5rem] leading-[1.08] tracking-[-0.01em] text-ink md:text-5xl"
          >
            Resolvemos tus dudas.
          </h2>
        </div>

        <div className="divide-y divide-hairline border-y border-hairline">
          {faqs.map((faq) => (
            <details key={faq.question} data-reveal className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-[19px] font-semibold tracking-[-0.01em] text-ink [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-slate transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-2xl pb-6 pr-10 text-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
