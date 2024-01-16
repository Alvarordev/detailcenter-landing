import type { Metadata } from "next";
import { IsClientCtxProvider } from "@/context/isClientContxt";
import { montserrat } from "@/ui/fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Detail Center | Car wash & Auto Detailing en Lima",
  description:
    "Somos un centro especializado en cuidado automotriz, contamos con servicio de car wash y auto detailing, brindando servicios con un equipo de jóvenes profesionales y especialistas de primer nivel. Nos destacamos por nuestro compromiso y dedicación al cuidado integral de tu vehículo.",
  other: {
    name: "google-site-verification",
    content: "EnlLu16ZAJpL3ekksr7clLtPGsKtrVKn1_4d4WkRuA4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="EnlLu16ZAJpL3ekksr7clLtPGsKtrVKn1_4d4WkRuA4"
        />
      </head>
      <body className={`${montserrat.className}`}>
        <IsClientCtxProvider>
          <NavBar />
          {children}
          <Footer />
        </IsClientCtxProvider>
      </body>
    </html>
  );
}
