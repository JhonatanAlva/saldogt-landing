import { ArrowRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { LogoMark } from "@/components/shared/Logo";
import { appLinks } from "@/data/navigation";

export default function CTA() {
  return (
    <section className="bg-paper pb-24 md:pb-32">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-[2rem] bg-ink-900 px-6 py-16 text-center text-white sm:px-12 md:py-20"
        >
          <div
            className="absolute -bottom-32 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/30 blur-[100px]"
            aria-hidden="true"
          />

          <LogoMark className="mx-auto h-14 w-14" />

          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Empieza hoy a tomar el control de tus finanzas.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/65">
            Crea tu cuenta gratis y registra tu primer movimiento en pocos minutos.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={appLinks.register}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-mint-400 px-8 py-4 text-lg font-semibold text-ink-950 transition-colors hover:bg-mint-300"
            >
              Crear cuenta gratis
              <ArrowRight
                size={20}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={appLinks.login}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-white/40"
            >
              Ya tengo cuenta
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
