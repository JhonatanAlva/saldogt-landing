import Image from "next/image";

export default function ShowcaseSavings() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid md:grid-cols-[1fr_1.3fr] items-center gap-12">

        <div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
            Metas de ahorro
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white">
            Alcanza tus objetivos financieros
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Define metas de ahorro, monitorea tu progreso y visualiza tu avance
            para alcanzar tus objetivos financieros de forma organizada.
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <div>✓ Metas personalizadas</div>
            <div>✓ Seguimiento en tiempo real</div>
            <div>✓ Porcentaje de avance</div>
            <div>✓ Motivación visual</div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-2 shadow-2xl">
          <Image
            src="/images/screenshots/metas-ahorro.png"
            alt="Metas de ahorro SaldoGT"
            width={1800}
            height={1200}
            className="w-full rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}