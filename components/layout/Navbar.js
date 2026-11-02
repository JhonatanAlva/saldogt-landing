"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { appLinks, navigation } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 top-0 z-50 border-b border-control bg-frost/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="SaldoGT, ir al inicio" className="rounded-lg">
          <Logo markClassName="h-7 w-7" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] text-ink/80 transition-colors hover:text-ink"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={appLinks.login}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-ink/80 transition-colors hover:text-ink"
            >
              Iniciar sesión
            </a>
            <a
              href={appLinks.register}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-700 px-4 py-1.5 text-[13px] text-white transition-colors hover:bg-brand-800"
            >
              Crear cuenta
            </a>
          </div>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-ink lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-control lg:hidden">
          <div className="mx-auto max-w-6xl px-5 pb-6 pt-2">
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-3.5 text-2xl font-semibold tracking-[-0.02em] text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={appLinks.register}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-700 px-5 py-2.5 text-sm text-white transition-colors hover:bg-brand-800"
                onClick={() => setOpen(false)}
              >
                Crear cuenta gratis
              </a>
              <a
                href={appLinks.login}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 text-sm text-brand-700 hover:underline"
                onClick={() => setOpen(false)}
              >
                Iniciar sesión
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
