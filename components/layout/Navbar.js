"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navigation } from "@/data/navigation";

const navVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      aria-label="Navegación principal"
      className="w-full border-b border-white/10 relative"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center text-white">
          <img src="/logo.png" alt="SaldoGT" className="h-14 w-auto" />
          <span className="sr-only">SaldoGT</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-300 transition hover:text-emerald-400"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://app.misaldo.lat/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Iniciar sesión
          </a>

          <a
            href="https://app.misaldo.lat/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
          >
            Comenzar gratis
          </a>
        </div>

        <button
          type="button"
          className="z-30 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/85 px-3 py-2 text-white shadow-lg shadow-black/30 transition hover:border-emerald-400 hover:bg-slate-900 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="flex h-5 w-5 flex-col justify-between">
            <span className="block h-0.5 w-full rounded-full bg-current" />
            <span className="block h-0.5 w-full rounded-full bg-current" />
            <span className="block h-0.5 w-full rounded-full bg-current" />
          </span>
          <span className="text-sm font-medium">Menú</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl transition duration-300">
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-gray-300 transition hover:bg-slate-900 hover:text-emerald-400"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://app.misaldo.lat/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 px-4 py-3 text-center text-sm font-medium text-gray-300 transition hover:bg-slate-900 hover:text-white"
                onClick={() => setOpen(false)}
              >
                Iniciar sesión
              </a>

              <a
                href="https://app.misaldo.lat/registro"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-emerald-400 px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
                onClick={() => setOpen(false)}
              >
                Comenzar gratis
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
