import Logo from "@/components/shared/Logo";
import { appLinks, navigation } from "@/data/navigation";

// Los textos legales viven solo en la app (una sola versión que mantener)
const enlaceLegal = "text-slate transition-colors hover:text-ink";

export default function Footer() {
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
                  <a href={appLinks.terms} className={enlaceLegal}>
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href={appLinks.privacy} className={enlaceLegal}>
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-hairline pt-5 text-[12px] text-slate sm:flex-row">
          <p>© 2026 SaldoGT. Todos los derechos reservados.</p>
          <p>Hecho en Guatemala.</p>
        </div>
      </div>
    </footer>
  );
}
