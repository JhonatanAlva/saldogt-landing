"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { appLinks, navigation } from "@/data/navigation";
import { privacy, terms } from "@/data/legal";

const documents = { terms, privacy };

function LegalPanel({ document, onClose }) {
  return (
    <div
      id="legal-panel"
      className="mt-10 rounded-3xl border border-white/10 bg-white/3 p-6 md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">{document.title}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={`Cerrar ${document.title}`}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-mint-400 hover:text-white"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
      <p className="mt-4 max-w-3xl leading-7 text-white/70">{document.intro}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {document.sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-white">{section.title}</h3>
            <p className="mt-2 leading-7 text-white/60">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const [openDoc, setOpenDoc] = useState(null);

  const toggle = (key) => setOpenDoc((current) => (current === key ? null : key));

  return (
    <footer className="bg-ink-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-5 leading-7 text-white/60">
              Controla tus finanzas personales de forma simple, segura e inteligente.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h2 className="text-sm font-semibold text-white">Navegación</h2>
              <ul className="mt-4 space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-white/60 transition-colors hover:text-mint-400"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-white">Cuenta y legal</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={appLinks.login}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition-colors hover:text-mint-400"
                  >
                    Iniciar sesión
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => toggle("terms")}
                    aria-expanded={openDoc === "terms"}
                    aria-controls="legal-panel"
                    className="cursor-pointer text-left text-white/60 transition-colors hover:text-mint-400"
                  >
                    Términos y Condiciones
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => toggle("privacy")}
                    aria-expanded={openDoc === "privacy"}
                    aria-controls="legal-panel"
                    className="cursor-pointer text-left text-white/60 transition-colors hover:text-mint-400"
                  >
                    Política de Privacidad
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {openDoc && <LegalPanel document={documents[openDoc]} onClose={() => setOpenDoc(null)} />}

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row">
          <p>© 2026 SaldoGT. Todos los derechos reservados.</p>
          <p>Hecho en Guatemala.</p>
        </div>
      </div>
    </footer>
  );
}
