export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] w-full max-w-7xl items-center px-6">
      <div className="flex w-full flex-col items-center">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
            Controla tu dinero.
            <br />
            Toma mejores decisiones.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            SaldoGT te ayuda a registrar ingresos, controlar gastos, crear
            presupuestos y alcanzar tus metas financieras desde un solo lugar.
          </p>

          <div>
            <button>Comenzar gratis</button>
            <button>Ver demostración</button>
          </div>
        </div>

        <div className="mt-16 w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
          Dashboard
        </div>
      </div>
    </section>
  );
}
