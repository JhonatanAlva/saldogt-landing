export default function Features() {
  const features = [
    {
      icon: "📊",
      title: "Reportes Financieros",
      description:
        "Visualiza tus ingresos y gastos mediante gráficos y reportes claros.",
    },
    {
      icon: "💰",
      title: "Control de Ingresos",
      description:
        "Registra y administra todas tus fuentes de ingresos fácilmente.",
    },
    {
      icon: "🧾",
      title: "Registro de Gastos",
      description:
        "Categoriza y analiza tus gastos para mejorar tus hábitos financieros.",
    },
    {
      icon: "🎯",
      title: "Metas de Ahorro",
      description: "Define objetivos y monitorea tu progreso hacia tus metas.",
    },
    {
      icon: "🤖",
      title: "Asistente IA",
      description:
        "Obtén recomendaciones inteligentes para optimizar tus finanzas.",
    },
    {
      icon: "📷",
      title: "Escaneo Inteligente",
      description:
        "Digitaliza facturas y recibos utilizando reconocimiento automático.",
    },
  ];

  return (
    <section id="caracteristicas" className="mx-auto max-w-7xl px-6 mt-12">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Todo lo que necesitas para controlar tus finanzas
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          SaldoGT reúne las herramientas necesarias para ayudarte a tomar
          mejores decisiones financieras todos los días.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-emerald-400/40 hover:shadow-lg"
          >
            <div className="mb-4 text-4xl">{feature.icon}</div>

            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>

            <p className="mt-3 text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
