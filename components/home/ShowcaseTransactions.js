import Image from "next/image";

export default function ShowcaseTransactions() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid md:grid-cols-[0.9fr_1.4fr] items-center gap-12">
        <div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
            Transacciones
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white">
            Gestiona tus transacciones fácilmente
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Registra ingresos y gastos, organiza tus movimientos por categorías
            y mantén un historial financiero completo para tomar mejores
            decisiones.
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <div>✓ Registro rápido de movimientos</div>

            <div>✓ Control de ingresos y gastos</div>

            <div>✓ Historial financiero completo</div>

            <div>✓ Organización por categorías</div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-2 shadow-2xl">
          <Image
            src="/images/screenshots/transacciones.png"
            alt="Transacciones SaldoGT"
            width={1600}
            height={1000}
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
