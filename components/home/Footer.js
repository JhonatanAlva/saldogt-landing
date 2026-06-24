export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              Saldo<span className="text-emerald-400">GT</span>
            </h3>

            <p className="mt-3 max-w-md text-slate-400">
              Controla tus finanzas personales de forma simple, segura e
              inteligente.
            </p>
          </div>

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
              href="https://www.misaldo.lat/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              Iniciar sesión
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 SaldoGT. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
