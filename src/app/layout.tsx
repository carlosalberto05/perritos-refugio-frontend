import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { QueryProvider } from "../providers/QueryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Normal, Medium, SemiBold, Bold
  variable: "--font-poppins", // Variable CSS
  display: "swap", // Mejora rendimiento
});

export const metadata: Metadata = {
  title: "Huellitas",
  description:
    "Aplicación Fullstack para la gestión de adopciones de perritos que viven en la calle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <QueryProvider>
          <Header />

          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
