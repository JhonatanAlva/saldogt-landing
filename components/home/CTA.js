import { MotionSection, MotionDiv } from "@/components/shared/ui/MotionSection";

export default function CTA() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-24">
      <MotionDiv className="rounded-3xl border border-white/10 bg-slate-900 p-12 text-center" delay={0.1}>
        <h2 className="text-5xl font-extrabold text-white">
          ¿Listo para tomar el control de tus finanzas?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Comienza a registrar tus ingresos, gastos y metas de ahorro hoy mismo
          con SaldoGT.
        </p>

        <div className="mt-10">
          <a
            href="https://app.misaldo.lat/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-emerald-400 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:scale-105"
          >
            Comenzar gratis
          </a>
        </div>
      </MotionDiv>
    </MotionSection>
  );
}
