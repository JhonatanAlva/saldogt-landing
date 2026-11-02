"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronRight } from "lucide-react";
import PhoneFrame from "@/components/shared/PhoneFrame";
import { appLinks } from "@/data/navigation";

gsap.registerPlugin(useGSAP);

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
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08 }
          )
          .fromTo(
            "[data-hero='phone-center']",
            { autoAlpha: 0, y: 120 },
            { autoAlpha: 1, y: 0, duration: 1.2 },
            "-=0.6"
          )
          .fromTo(
            "[data-hero='phone-side']",
            { autoAlpha: 0, y: 160 },
            { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.1 },
            "<0.15"
          );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero]", { autoAlpha: 1 });
      });
    },
    { scope }
  );

  return (
    <section id="inicio" ref={scope} className="overflow-hidden bg-canvas pt-28 md:pt-36">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <p data-hero="copy" className="text-[21px] font-semibold tracking-[0.01em] text-ink">
          SaldoGT
        </p>

        <h1
          data-hero="copy"
          className="mt-3 text-[3rem] leading-[1.05] tracking-[-0.015em] text-ink sm:text-[4rem] lg:text-[5rem]"
        >
          Cada quetzal, en su lugar.
        </h1>

        <p
          data-hero="copy"
          className="mx-auto mt-5 max-w-2xl text-[19px] leading-[1.42] text-slate md:text-[21px]"
        >
          Registra ingresos y gastos, sigue tus metas de ahorro y entiende a dónde va tu
          dinero cada mes. Gratis y en quetzales.
        </p>

        <div
          data-hero="copy"
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <a
            href={appLinks.register}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-700 px-6 py-3 text-[17px] text-white transition-colors hover:bg-brand-800"
          >
            Crear cuenta gratis
          </a>
          <a
            href="#como-funciona"
            className="group inline-flex items-center gap-0.5 text-[17px] text-brand-700 hover:underline"
          >
            Ver cómo funciona
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-16 h-[30rem] max-w-5xl sm:h-[36rem] md:mt-20 lg:h-[40rem]">
        <div className="absolute left-1/2 top-16 w-52 -translate-x-[125%] sm:w-60 lg:w-64">
          <div data-hero="phone-side">
            <PhoneFrame
              src="/images/app/metas.webp"
              alt="Pantalla de metas de ahorro de SaldoGT con un fondo de emergencia al 48%"
              sizes="256px"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-16 w-52 translate-x-[25%] sm:w-60 lg:w-64">
          <div data-hero="phone-side">
            <PhoneFrame
              src="/images/app/transacciones.webp"
              alt="Pantalla de transacciones de SaldoGT con la lista de ingresos y gastos"
              sizes="256px"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-0 z-10 w-60 -translate-x-1/2 sm:w-68 lg:w-76">
          <div data-hero="phone-center">
            <PhoneFrame
              src="/images/app/resumen.webp"
              alt="Pantalla de resumen de SaldoGT con el saldo disponible y la gráfica de balance financiero"
              priority
              sizes="304px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
