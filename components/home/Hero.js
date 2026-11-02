"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import PhoneFrame from "@/components/shared/PhoneFrame";
import { appLinks } from "@/data/navigation";

gsap.registerPlugin(useGSAP);

const highlights = ["Gratis para empezar", "Montos en quetzales", "Tus datos son privados"];

export default function Hero() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            "[data-hero='copy']",
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09 }
          )
          .fromTo(
            "[data-hero='phone-back']",
            { autoAlpha: 0, y: 80, rotate: 0 },
            { autoAlpha: 1, y: 0, rotate: 6, duration: 1.1 },
            "-=0.7"
          )
          .fromTo(
            "[data-hero='phone-front']",
            { autoAlpha: 0, y: 60 },
            { autoAlpha: 1, y: 0, duration: 1.1 },
            "<0.12"
          );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero]", { autoAlpha: 1 });
        gsap.set("[data-hero='phone-back']", { rotate: 6 });
      });
    },
    { scope }
  );

  return (
    <section
      id="inicio"
      ref={scope}
      className="relative isolate overflow-hidden bg-ink-950 text-white"
    >
      <div
        className="absolute -top-40 left-1/2 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-20 pt-32 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pb-24 lg:pt-36">
        <div className="max-w-xl">
          <p
            data-hero="copy"
            className="inline-flex items-center gap-2 rounded-full border border-mint-400/25 bg-mint-400/10 px-3.5 py-1.5 text-sm font-medium text-mint-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint-400" aria-hidden="true" />
            Finanzas personales para Guatemala
          </p>

          <h1
            data-hero="copy"
            className="mt-6 text-[2.75rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            Cada quetzal, <span className="text-mint-400">en su lugar.</span>
          </h1>

          <p data-hero="copy" className="mt-6 text-lg leading-8 text-white/70">
            Registra tus ingresos y gastos, define presupuestos y sigue tus metas de
            ahorro. SaldoGT te muestra con claridad a dónde va tu dinero cada mes.
          </p>

          <div data-hero="copy" className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={appLinks.register}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-mint-400 px-7 py-3.5 font-semibold text-ink-950 transition-colors hover:bg-mint-300"
            >
              Crear cuenta gratis
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/40"
            >
              Ver cómo funciona
            </a>
          </div>

          <ul data-hero="copy" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            {highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-mint-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto h-[34rem] w-full max-w-md sm:h-[38rem]">
          <div
            data-hero="phone-back"
            className="absolute right-0 top-10 w-[52%] origin-bottom-left sm:right-4"
          >
            <PhoneFrame
              src="/images/app/metas.webp"
              alt="Pantalla de metas de ahorro de SaldoGT con un fondo de emergencia al 48%"
              sizes="(max-width: 640px) 50vw, 240px"
            />
          </div>
          <div data-hero="phone-front" className="absolute left-0 top-0 w-[58%] sm:left-4">
            <PhoneFrame
              src="/images/app/resumen.webp"
              alt="Pantalla de resumen de SaldoGT con el saldo disponible y la gráfica de balance financiero"
              priority
              sizes="(max-width: 640px) 60vw, 270px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
