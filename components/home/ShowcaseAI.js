import Image from "next/image";
import { MotionSection, MotionDiv } from "@/components/shared/ui/MotionSection";

export default function ShowcaseAI() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid md:grid-cols-[1fr_1.3fr] items-center gap-12">
        <MotionDiv delay={0.1}>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
            Asistente IA
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white">
            Tu asesor financiero inteligente
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Recibe recomendaciones personalizadas basadas en tus ingresos,
            gastos, presupuestos y hábitos financieros para tomar mejores
            decisiones.
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <div>✓ Recomendaciones automáticas</div>
            <div>✓ Análisis de gastos</div>
            <div>✓ Alertas financieras</div>
            <div>✓ Consejos personalizados</div>
          </div>
        </MotionDiv>

        <MotionDiv delay={0.15} whileHover={{ y: -6 }}>
          <Image
            src="/images/screenshots/asistente-ia.png"
            alt="Asistente IA SaldoGT"
            width={1600}
            height={1000}
            sizes="(max-width: 768px) 100vw, 650px"
            className="w-full rounded-2xl"
          />
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
