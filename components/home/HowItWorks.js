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
    <section id="como-funciona" className="bg-canvas py-24 md:py-32">
      <Reveal className="mx-auto max-w-6xl px-5 md:px-8">
        <p data-reveal className="text-[21px] font-semibold text-ink">
          Cómo funciona
        </p>
        <h2
          data-reveal
          className="mt-2 max-w-3xl text-[2.5rem] leading-[1.08] tracking-[-0.01em] text-ink md:text-5xl"
        >
          Ordenar tus finanzas toma tres pasos.
        </h2>

        <ol className="mt-16 grid gap-12 border-t border-hairline pt-12 md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <li key={step.title} data-reveal>
              <span className="text-5xl font-semibold leading-none tracking-[-0.02em] text-brand-700 tabular-nums">
                {index + 1}
              </span>
              <h3 className="mt-6 text-2xl tracking-[-0.01em] text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-slate">{step.description}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
