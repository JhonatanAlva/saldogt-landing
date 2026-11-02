import Reveal from "@/components/shared/Reveal";

const points = [
  {
    title: "Información privada",
    description: "Solo tú tienes acceso a los datos financieros que registras en tu cuenta.",
  },
  {
    title: "Contraseñas protegidas",
    description:
      "Nunca almacenamos contraseñas en texto plano y aplicamos prácticas de seguridad para proteger tu acceso.",
  },
  {
    title: "No vendemos tus datos",
    description:
      "Tu información no se comparte ni se vende a terceros con fines comerciales.",
  },
  {
    title: "Inteligencia artificial con transparencia",
    description:
      "El asistente y el escáner envían a OpenAI solo los datos necesarios para responder. Nunca se envían tu nombre, correo ni contraseña.",
  },
];

export default function Security() {
  return (
    <section id="seguridad" className="bg-ink-950 py-24 text-white md:py-32">
      <Reveal className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p
            data-reveal
            className="text-sm font-semibold uppercase tracking-[0.14em] text-mint-400"
          >
            Seguridad
          </p>
          <h2 data-reveal className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Tu información financiera es solo tuya.
          </h2>
          <p data-reveal className="mt-6 max-w-lg text-lg leading-8 text-white/65">
            Sabemos que tus finanzas son un tema personal. Por eso SaldoGT está construido
            para proteger tus datos desde el primer día.
          </p>
        </div>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {points.map((point) => (
            <li key={point.title} data-reveal className="py-7">
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p className="mt-2 max-w-lg leading-7 text-white/60">{point.description}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
