import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SaldoGT | Controla tus finanzas personales",
  description:
    "SaldoGT es una plataforma para administrar ingresos, gastos, presupuestos y reportes financieros de forma fácil y segura.",
  metadataBase: new URL("https://www.misaldo.lat"),
  openGraph: {
    title: "SaldoGT | Controla tus finanzas personales",
    description:
      "SaldoGT es una plataforma para administrar ingresos, gastos, presupuestos y reportes financieros de forma fácil y segura.",
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
