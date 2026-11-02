import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title: "SaldoGT | Controla tus finanzas personales en quetzales",
  description:
    "SaldoGT es una plataforma para administrar ingresos, gastos, presupuestos y metas de ahorro en quetzales, de forma fácil y segura.",
  metadataBase: new URL("https://www.misaldo.lat"),
  openGraph: {
    title: "SaldoGT | Controla tus finanzas personales en quetzales",
    description:
      "SaldoGT es una plataforma para administrar ingresos, gastos, presupuestos y metas de ahorro en quetzales, de forma fácil y segura.",
    type: "website",
    images: ["/images/screenshots/dashboard.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
};

export const viewport = {
  themeColor: "#061413",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${bricolage.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Marca que hay JavaScript para ocultar elementos antes de animarlos */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
