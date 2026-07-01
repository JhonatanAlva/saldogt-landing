"use client";

import { useState } from "react";
import { MotionSection, MotionDiv } from "@/components/shared/ui/MotionSection";

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const toggleTerms = () => {
    setShowPrivacy(false);
    setShowTerms((current) => !current);
  };

  const togglePrivacy = () => {
    setShowTerms(false);
    setShowPrivacy((current) => !current);
  };

  return (
    <MotionSection className="border-t border-white/10">
      <MotionDiv className="mx-auto max-w-7xl px-6 py-12" delay={0.1}>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="SaldoGT" className="h-16 w-auto" />
            <div>
              <p className="sr-only">SaldoGT</p>
              <p className="mt-3 max-w-md text-slate-400">
                Controla tus finanzas personales de forma simple, segura e
                inteligente.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 text-slate-400">
            <div className="flex gap-8 text-slate-400">
              <a href="#inicio" className="hover:text-emerald-400 transition">
                Inicio
              </a>

              <a
                href="#caracteristicas"
                className="hover:text-emerald-400 transition"
              >
                Características
              </a>

              <a href="#faq" className="hover:text-emerald-400 transition">
                FAQ
              </a>

              <a
                href="https://app.misaldo.lat/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
              >
                Iniciar sesión
              </a>
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
              <button
                type="button"
                className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
                onClick={toggleTerms}
              >
                {showTerms ? "Cerrar términos" : "Términos y Condiciones"}
              </button>
              <button
                type="button"
                className="rounded-full border border-white/10 bg-slate-950/80 px-5 py-2 text-sm font-semibold text-white transition hover:border-emerald-400 hover:bg-slate-900"
                onClick={togglePrivacy}
              >
                {showPrivacy ? "Cerrar privacidad" : "Política de Privacidad"}
              </button>
            </div>
          </div>
        </div>

        {showTerms && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-2xl">
            <h2 className="text-2xl font-extrabold text-white">Términos y Condiciones</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Estas condiciones regulan el uso de la plataforma SaldoGT. Al usar este sitio,
              aceptas los términos descritos aquí y cualquier actualización futura.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">1. Uso del servicio</h3>
                <p className="mt-2">
                  El servicio se ofrece para la gestión financiera personal. El acceso es para mayores
                  de edad y el uso debe ser responsable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">2. Privacidad y datos</h3>
                <p className="mt-2">
                  La plataforma puede recopilar datos para mejorar la experiencia y ofrecer funciones.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">3. Propiedad intelectual</h3>
                <p className="mt-2">
                  Todos los derechos sobre el contenido, diseño y marca pertenecen a SaldoGT. No está
                  permitido copiar ni reproducir sin autorización.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">4. Limitación de responsabilidad</h3>
                <p className="mt-2">
                  SaldoGT no se hace responsable por pérdidas financieras derivadas del uso de la plataforma.
                  Siempre verifica tu información antes de tomar decisiones.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">5. Cambios en los términos</h3>
                <p className="mt-2">
                  Podemos actualizar estos términos en cualquier momento. Las modificaciones se publicarán en
                  el sitio y se aplicarán a partir de su publicación.
                </p>
              </div>
            </div>
          </div>
        )}

        {showPrivacy && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-2xl">
            <h2 className="text-2xl font-extrabold text-white">Política de Privacidad</h2>
            <p className="mt-4 leading-7 text-slate-300">
              En SaldoGT valoramos tu privacidad y nos comprometemos a proteger tus datos personales.
              Recopilamos únicamente la información necesaria para que puedas usar la plataforma con seguridad.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">1. Datos que recopilamos</h3>
                <p className="mt-2">
                  Para crear y mantener tu cuenta pueden recopilarse datos de contacto y perfil, como nombre,
                  correo electrónico y datos básicos de perfil. También podemos registrar información de uso
                  para mejorar la calidad del servicio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">2. Uso de los datos</h3>
                <p className="mt-2">
                  Utilizamos tus datos para autenticar tu acceso, proteger tu cuenta, personalizar tu experiencia
                  y ofrecer las funcionalidades de la aplicación. No vendemos tu información personal a terceros.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">3. Autenticación y credenciales</h3>
                <p className="mt-2">
                  La información de autenticación se utiliza solo para verificar tu identidad y mantener tu
                  sesión segura. No almacenamos contraseñas en texto plano y aplicamos prácticas de seguridad
                  para proteger el acceso a tu cuenta.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">4. Seguridad</h3>
                <p className="mt-2">
                  Implementamos medidas razonables de seguridad para proteger tus datos frente a accesos no
                  autorizados. Sin embargo, ninguna transmisión por internet es completamente invulnerable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">5. Compartir datos</h3>
                <p className="mt-2">
                  Solo compartimos datos cuando es necesario para operar la plataforma, cumplir con la ley o
                  proteger derechos legales. No compartimos ni vendemos tu información personal a terceros
                  con fines comerciales.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">6. Cambios en la política</h3>
                <p className="mt-2">
                  Podemos actualizar esta política en cualquier momento. Las modificaciones se publicarán en
                  el sitio y se aplicarán a partir de su publicación.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 SaldoGT. Todos los derechos reservados.
        </div>
      </MotionDiv>
    </MotionSection>
  );
}
