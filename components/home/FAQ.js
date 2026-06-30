import { MotionSection, MotionDiv, MotionStagger } from "@/components/shared/ui/MotionSection";

export default function FAQ() {
  const faqs = [
    {
      question: "¿Qué es SaldoGT?",
      answer:
        "SaldoGT es una plataforma para gestionar ingresos, gastos, presupuestos y metas de ahorro desde un solo lugar.",
    },
    {
      question: "¿SaldoGT es gratuito?",
      answer:
        "Sí. Puedes comenzar a utilizar SaldoGT de forma gratuita y acceder a las principales herramientas de control financiero.",
    },
    {
      question: "¿Mis datos están seguros?",
      answer:
        "Sí. Tu información financiera es privada y solo tú tienes acceso a tus datos personales.",
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

  return (
    <MotionSection id="faq" className="mx-auto max-w-5xl px-6 py-12">
      <MotionDiv className="text-center" delay={0.1}>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
          FAQ
        </span>

        <h2 className="mt-6 text-5xl font-extrabold text-white">
          Preguntas frecuentes
        </h2>

        <p className="mt-6 text-xl text-slate-400">
          Todo lo que necesitas saber sobre SaldoGT.
        </p>
      </MotionDiv>

      <MotionStagger className="mt-16 space-y-6">
        {faqs.map((faq, index) => (
          <MotionDiv
            key={index}
            className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6"
            delay={0.15 + index * 0.05}
          >
            <details>
              <summary className="cursor-pointer text-xl font-semibold text-white [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>

              <p className="mt-3 text-slate-400">
                {faq.answer}
              </p>
            </details>
          </MotionDiv>
        ))}
      </MotionStagger>
    </MotionSection>
  );
}