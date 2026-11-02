import { ChevronRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { LogoMark } from "@/components/shared/Logo";
import { appLinks } from "@/data/navigation";

export default function CTA() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <Reveal className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <LogoMark className="mx-auto h-14 w-14" />

        <h2
          data-reveal
          className="mt-8 text-[2.5rem] leading-[1.08] tracking-[-0.01em] text-ink md:text-[3.5rem]"
        >
          Empieza hoy a tomar el control de tus finanzas.
        </h2>

        <p data-reveal className="mx-auto mt-5 max-w-xl text-[19px] text-slate md:text-[21px]">
          Crea tu cuenta gratis y registra tu primer movimiento en pocos minutos.
        </p>

        <div
          data-reveal
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
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
            href={appLinks.login}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-[17px] text-brand-700 hover:underline"
          >
            Ya tengo cuenta
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
