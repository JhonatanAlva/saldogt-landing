"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { appLinks } from "@/data/navigation";

const features = [
  {
    title: "Transacciones",
    statement: "Cada movimiento, en un solo historial.",
    description: "Busca por descripción o categoría y filtra por fechas.",
    image: "/images/app/transacciones.webp",
    alt: "Pantalla de transacciones de SaldoGT con buscador, filtros por fecha y lista de movimientos",
  },
  {
    title: "Gastos e ingresos fijos",
    statement: "Sabe cuándo cobras y cuándo pagas.",
    description: "Tu sueldo y tus suscripciones, organizados en un calendario financiero.",
    image: "/images/app/calendario.webp",
    alt: "Calendario financiero de SaldoGT con un ingreso fijo y un gasto fijo programados",
  },
  {
    title: "Metas de ahorro",
    statement: "Ahorra con una fecha y un monto claros.",
    description: "SaldoGT calcula cuánto apartar al día para llegar a tu meta.",
    image: "/images/app/metas.webp",
    alt: "Pantalla de metas de ahorro de SaldoGT con el progreso de un fondo de emergencia",
  },
  {
    title: "Asistente IA",
    statement: "Pregunta y recibe respuestas sobre tu dinero.",
    description: "Cuánto gastaste, en qué categoría gastas más y cómo reducir gastos.",
    image: "/images/app/asistente.webp",
    alt: "Asistente IA de SaldoGT con preguntas sugeridas sobre tus finanzas",
  },
  {
    title: "Escáner IA",
    statement: "Una foto de tu factura es suficiente.",
    description: "SaldoGT lee el comprobante y registra el gasto por ti.",
    image: "/images/app/escaner.webp",
    alt: "Escáner IA de SaldoGT para subir facturas y recibos",
  },
  {
    title: "Análisis financiero",
    statement: "Tus números, por periodo y en PDF.",
    description: "Compara ingresos y gastos, revisa tu tasa de ahorro y exporta reportes.",
    image: "/images/app/analisis.webp",
    alt: "Pantalla de análisis financiero de SaldoGT con ingresos, gastos, balance y tasa de ahorro",
  },
];

export default function Showcase() {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () =>
      setEdges({
        start: track.scrollLeft <= 4,
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
      });
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * (card.offsetWidth + 20), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="caracteristicas" className="bg-mist py-24 md:py-32">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-5 sm:flex-row sm:items-end md:px-8">
          <h2
            data-reveal
            className="max-w-xl text-[2.5rem] leading-[1.08] tracking-[-0.01em] text-ink md:text-5xl"
          >
            Conoce SaldoGT por dentro.
          </h2>
          <a
            data-reveal
            href={appLinks.register}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-0.5 text-[17px] text-brand-700 hover:underline"
          >
            Pruébalo gratis
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>

        <ul
          ref={trackRef}
          data-reveal
          aria-label="Funciones de SaldoGT"
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 md:scroll-px-8 md:px-8 xl:scroll-px-[calc((100vw-72rem)/2+2rem)] xl:px-[calc((100vw-72rem)/2+2rem)]"
        >
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex h-[36rem] w-[19rem] shrink-0 snap-start flex-col overflow-hidden rounded-card bg-canvas sm:h-[40rem] sm:w-[23rem]"
            >
              <div className="px-7 pt-8">
                <h3 className="text-[17px] font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-2xl font-semibold leading-[1.17] tracking-[-0.01em] text-ink">
                  {feature.statement}
                </p>
                <p className="mt-3 text-[15px] leading-[1.4] text-slate">{feature.description}</p>
              </div>

              <div className="relative mt-auto px-10">
                <div className="translate-y-6 rounded-t-[2.4rem] bg-ink px-2 pt-2">
                  <div className="relative aspect-[9/13] overflow-hidden rounded-t-[2rem] bg-[#f4f6f9]">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      sizes="(max-width: 640px) 240px, 300px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-6 flex max-w-6xl justify-end gap-3 px-5 md:px-8">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={edges.start}
            aria-label="Ver función anterior"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[rgba(210,210,215,0.64)] text-ink/70 transition-opacity hover:text-ink disabled:cursor-default disabled:opacity-40"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={edges.end}
            aria-label="Ver siguiente función"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[rgba(210,210,215,0.64)] text-ink/70 transition-opacity hover:text-ink disabled:cursor-default disabled:opacity-40"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
