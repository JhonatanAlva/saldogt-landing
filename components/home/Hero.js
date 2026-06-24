import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto flex min-h-[90vh] w-full max-w-7xl items-center px-6"
    >
      <div className="flex w-full flex-col items-center">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
            Controla tu dinero.
            <br />
            Toma mejores decisiones.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Registra ingresos, controla gastos, crea presupuestos y alcanza tus
            metas financieras desde un solo lugar.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://www.misaldo.lat/registro"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-emerald-300"
            >
              Comenzar gratis
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span>✓ Controla ingresos</span>

            <span>✓ Analiza gastos</span>

            <span>✓ Cumple tus metas</span>
          </div>
        </div>

        <div className="mt-16 w-full max-w-7xl rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/screenshots/dashboard.png"
              alt="Dashboard SaldoGT"
              width={1400}
              height={900}
              className="w-full h-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
