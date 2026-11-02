"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PhoneFrame from "@/components/shared/PhoneFrame";
import Reveal from "@/components/shared/Reveal";

gsap.registerPlugin(useGSAP);

const features = [
  {
    id: "transacciones",
    title: "Transacciones",
    description:
      "Registra ingresos y gastos en segundos. Busca por descripción o categoría y filtra por fechas para encontrar cualquier movimiento.",
    image: "/images/app/transacciones.webp",
    alt: "Pantalla de transacciones de SaldoGT con buscador, filtros por fecha y lista de movimientos",
  },
  {
    id: "fijos",
    title: "Gastos e ingresos fijos",
    description:
      "Configura tu sueldo, suscripciones y pagos que se repiten. El calendario financiero te muestra cuándo cobras y cuándo pagas.",
    image: "/images/app/calendario.webp",
    alt: "Calendario financiero de SaldoGT con un ingreso fijo y un gasto fijo programados",
  },
  {
    id: "metas",
    title: "Metas de ahorro",
    description:
      "Define cuánto quieres ahorrar y para cuándo. SaldoGT calcula cuánto necesitas apartar al día y muestra tu avance.",
    image: "/images/app/metas.webp",
    alt: "Pantalla de metas de ahorro de SaldoGT con el progreso de un fondo de emergencia",
  },
  {
    id: "asistente",
    title: "Asistente IA",
    description:
      "Pregunta cuánto gastaste este mes, en qué categoría gastas más o cómo reducir gastos, y recibe respuestas basadas en tus datos.",
    image: "/images/app/asistente.webp",
    alt: "Asistente IA de SaldoGT con preguntas sugeridas sobre tus finanzas",
  },
  {
    id: "escaner",
    title: "Escáner IA",
    description:
      "Sube la foto de una factura o recibo y SaldoGT lee el comprobante para registrar el gasto por ti.",
    image: "/images/app/escaner.webp",
    alt: "Escáner IA de SaldoGT para subir facturas y recibos",
  },
  {
    id: "analisis",
    title: "Análisis financiero",
    description:
      "Compara ingresos y gastos por periodo, revisa tu tasa de ahorro y exporta tus reportes en PDF.",
    image: "/images/app/analisis.webp",
    alt: "Pantalla de análisis financiero de SaldoGT con ingresos, gastos, balance y tasa de ahorro",
  },
];

export default function Showcase() {
  const [active, setActive] = useState(features[0].id);
  const phoneRef = useRef(null);
  const tabRefs = useRef([]);
  const hasSwitched = useRef(false);
  const current = features.find((feature) => feature.id === active);

  // Anima la pantalla nueva cada vez que cambia la función (no en la carga inicial)
  useGSAP(
    () => {
      if (!hasSwitched.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        phoneRef.current,
        { autoAlpha: 0.4, y: 16, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out", overwrite: true }
      );
    },
    { dependencies: [active] }
  );

  const select = (id) => {
    if (id === active) return;
    hasSwitched.current = true;
    setActive(id);
  };

  const onKeyDown = (event, index) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (index + keys[event.key] + features.length) % features.length;
    tabRefs.current[next]?.focus();
    select(features[next].id);
  };

  return (
    <section id="caracteristicas" className="bg-surface py-24 md:py-32">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p
            data-reveal
            className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700"
          >
            Funciones
          </p>
          <h2
            data-reveal
            className="mt-4 text-4xl font-bold tracking-tight text-text md:text-5xl"
          >
            Todo lo que necesitas para controlar tu dinero.
          </h2>
          <p data-reveal className="mt-5 max-w-xl text-lg leading-8 text-text-muted">
            Así se ve SaldoGT por dentro. Funciona desde el navegador de tu teléfono o
            computadora.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div
            data-reveal
            role="tablist"
            aria-label="Funciones de SaldoGT"
            aria-orientation="vertical"
            className="order-2 divide-y divide-line border-y border-line lg:order-1"
          >
            {features.map((feature, index) => {
              const selected = feature.id === active;
              return (
                <div key={feature.id}>
                  <button
                    ref={(element) => (tabRefs.current[index] = element)}
                    type="button"
                    role="tab"
                    id={`tab-${feature.id}`}
                    aria-selected={selected}
                    aria-controls="feature-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => select(feature.id)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    className="group flex w-full cursor-pointer items-center gap-5 py-5 text-left"
                  >
                    <span
                      className={`font-display text-sm font-semibold tabular-nums transition-colors ${
                        selected ? "text-brand-600" : "text-text-muted/60"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`font-display text-xl font-semibold transition-colors md:text-2xl ${
                        selected ? "text-text" : "text-text-muted group-hover:text-text"
                      }`}
                    >
                      {feature.title}
                    </span>
                  </button>
                  {selected && (
                    <p className="-mt-2 max-w-lg pb-6 pl-10 leading-7 text-text-muted">
                      {feature.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div
            id="feature-panel"
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            data-reveal
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto w-64 sm:w-72">
              <div
                className="absolute inset-x-[-20%] bottom-[-6%] top-[12%] -z-10 rounded-full bg-brand-100 blur-3xl"
                aria-hidden="true"
              />
              <div ref={phoneRef}>
                <PhoneFrame src={current.image} alt={current.alt} sizes="288px" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
