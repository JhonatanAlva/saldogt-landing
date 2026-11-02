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
      className="mt-10 rounded-card bg-canvas p-6 md:p-10"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl tracking-[-0.01em] text-ink">{document.title}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={`Cerrar ${document.title}`}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[rgba(210,210,215,0.64)] text-ink/70 transition-colors hover:text-ink"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
      <p className="mt-4 max-w-3xl text-[14px] leading-[1.43] text-slate">{document.intro}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {document.sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-[14px] font-semibold text-ink">{section.title}</h3>
            <p className="mt-1.5 text-[14px] leading-[1.43] text-slate">{section.body}</p>
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
    <footer className="bg-mist">
      <div className="mx-auto max-w-6xl border-t border-hairline px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-[14px] leading-[1.43] text-slate">
              Controla tus finanzas personales de forma simple, segura e inteligente.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-[13px] sm:gap-16">
            <div>
              <h2 className="font-semibold text-ink">Navegación</h2>
              <ul className="mt-3 space-y-2.5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-slate transition-colors hover:text-ink"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-ink">Cuenta y legal</h2>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <a
                    href={appLinks.login}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate transition-colors hover:text-ink"
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
                    className="cursor-pointer text-left text-slate transition-colors hover:text-ink"
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
                    className="cursor-pointer text-left text-slate transition-colors hover:text-ink"
                  >
                    Política de Privacidad
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {openDoc && <LegalPanel document={documents[openDoc]} onClose={() => setOpenDoc(null)} />}

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-hairline pt-5 text-[12px] text-slate sm:flex-row">
          <p>© 2026 SaldoGT. Todos los derechos reservados.</p>
          <p>Hecho en Guatemala.</p>
        </div>
      </div>
    </footer>
  );
}
