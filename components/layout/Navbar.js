import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          <span className="text-white">Saldo</span>
          <span className="text-emerald-400">GT</span>
        </Link>

        {/* Menú */}
        <ul className="flex gap-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-300 transition hover:text-emerald-400"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botones */}
        <div className="flex items-center gap-4">
          <button className="cursor-pointer text-sm font-medium text-gray-300 transition hover:text-white">
            Iniciar sesión
          </button>

          <button className="cursor-pointer rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300">
            Comenzar gratis
          </button>
        </div>
      </div>
    </nav>
  );
}
