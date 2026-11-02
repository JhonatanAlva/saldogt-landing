"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { appLinks, navigation } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="SaldoGT, ir al inicio" className="rounded-lg">
          <Logo tone="dark" />
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <span className="mx-3 h-5 w-px bg-white/15" aria-hidden="true" />

          <a
            href={appLinks.login}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Iniciar sesión
          </a>

          <a
            href={appLinks.register}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-mint-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-mint-300"
          >
            Crear cuenta gratis
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-mint-400 lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 lg:hidden">
          <div className="mx-auto max-w-7xl px-5 pb-6 pt-3">
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-xl px-3 py-3.5 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={appLinks.login}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-mint-400"
                onClick={() => setOpen(false)}
              >
                Iniciar sesión
              </a>
              <a
                href={appLinks.register}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-mint-400 px-4 py-3 text-center text-sm font-semibold text-ink-950 transition-colors hover:bg-mint-300"
                onClick={() => setOpen(false)}
              >
                Crear cuenta
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
