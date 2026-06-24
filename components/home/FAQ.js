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
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="text-center">
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
          FAQ
        </span>

        <h2 className="mt-6 text-5xl font-extrabold text-white">
          Preguntas frecuentes
        </h2>

        <p className="mt-6 text-xl text-slate-400">
          Todo lo que necesitas saber sobre SaldoGT.
        </p>
      </div>

      <div className="mt-16 space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {faq.question}
            </h3>

            <p className="mt-3 text-slate-400">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}