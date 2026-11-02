import Reveal from "@/components/shared/Reveal";

const steps = [
  {
    title: "Crea tu cuenta",
    description: "Regístrate gratis y configura tu perfil desde el navegador.",
  },
  {
    title: "Registra tus movimientos",
    description:
      "Anota ingresos y gastos, o escanea tus facturas para registrarlas automáticamente.",
  },
  {
    title: "Toma mejores decisiones",
    description:
      "Consulta tus reportes, revisa tus metas y recibe recomendaciones del asistente.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paper py-24 md:py-32">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
            Cómo funciona
          </p>
          <h2
            data-reveal
            className="mt-4 text-4xl font-bold tracking-tight text-text md:text-5xl"
          >
            Ordenar tus finanzas toma tres pasos.
          </h2>
        </div>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} data-reveal className="relative">
              <div className="flex items-center gap-4">
                <span className="font-display text-6xl font-bold leading-none tracking-tight text-brand-600 tabular-nums">
                  {index + 1}
                </span>
                <span
                  className={`h-px flex-1 ${index === steps.length - 1 ? "bg-transparent" : "bg-line"}`}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-text">{step.title}</h3>
              <p className="mt-2 max-w-xs leading-7 text-text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
