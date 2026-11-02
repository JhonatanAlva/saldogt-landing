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
    <section id="seguridad" className="bg-mist py-24 md:py-32">
      <Reveal className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="rounded-card bg-canvas px-7 py-12 md:px-14 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p data-reveal className="text-[21px] font-semibold text-ink">
                Seguridad
              </p>
              <h2
                data-reveal
                className="mt-2 text-[2.5rem] leading-[1.08] tracking-[-0.01em] text-ink md:text-5xl"
              >
                Tu información financiera es solo tuya.
              </h2>
              <p data-reveal className="mt-6 max-w-md text-slate">
                Sabemos que tus finanzas son un tema personal. Por eso SaldoGT está
                construido para proteger tus datos desde el primer día.
              </p>
            </div>

            <ul className="divide-y divide-hairline">
              {points.map((point) => (
                <li key={point.title} data-reveal className="py-6 first:pt-0 last:pb-0">
                  <h3 className="text-[19px] tracking-[-0.01em] text-ink">{point.title}</h3>
                  <p className="mt-1.5 text-slate">{point.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
