import type { Metadata } from "next";
import { IsClientCtxProvider } from "@/context/isClientContxt";
import { montserrat } from "@/ui/fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Detail Center | Detailing Automotriz en Lima",
  description: "Somos un car detailing especializado en la limpieza y detallado de tu vehículo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <IsClientCtxProvider>
          <NavBar />
          {children}
          <Footer/>
        </IsClientCtxProvider>
      </body>
    </html>
  );
}
