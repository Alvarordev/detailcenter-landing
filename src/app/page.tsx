import AboutSection from "@/components/Landing/AboutSection";
import ServicesSection from "@/components/Landing/ServicesSection";
import { raleway } from "@/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-200 relative w-full overflow-hidden">
        <div className="w-full h-32"></div>

        <div className="px-8 overflow-hidden relative z-20 py-2 lg:py-8 lg:max-w-[1280px] mx-auto">
          <div className="flex move-in">
            <div className="h-9 w-1 mr-4 lg:h-12 lg:mt-2 lg:mr-10 bg-red-500" />
            <h1
              className={`text-4xl lg:max-w-[600px] lg:text-[52px] pb-5 leading-tight font-bold ${raleway.className}`}
            >
              Máximo Cuidado para tu Vehículo
            </h1>
          </div>
        </div>

        <div className="w-full lg:max-w-[1280px] mx-auto relative z-20 px-8 mb-24 move-in">
          <Link href={"/contacto"}>
            <div className="lg:ml-16 bg-red-500 text-white w-full lg:w-[200px] flex items-center justify-center py-5 transition-all font-medium cursor-pointer hover:saturate-100 hover:translate-x-1 hover:-translate-y-1">
              Contáctanos
            </div>
          </Link>
        </div>

        <div className="lg:max-w-[1200px] mx-auto text-[13px] font-medium flex flex-col-reverse text-center md:text-left lg:flex-row lg:pl-14 pb-14">
          <div className="lg:mr-20">
            <h3>contacto@detailcenter.pe</h3>
            <span className="text-red-400">934-963-162</span>
          </div>

          <div>
            <h3>Direccion</h3>
            <span className="text-red-400">Av Colina 713 - Surquillo</span>
          </div>
        </div>

        <div className="absolute top-20 right-0 z-20"></div>

        <p className="text-[113px] xl:text-[280px] text-gray-50 absolute xl:top-20 -left-12 font-medium opacity-80 slow-motion fading-slow-mo hidden lg:block">
          DetailCenter
        </p>
      </section>

      <section className="bg-[#1a1a1a] h-[300px] lg:min-h-[800px] w-full relative antialiased ">
        <div className="w-full h-[700px] ">
          <Image src="/car-washing.avif" alt="washing" fill />
        </div>
      </section>

      <ServicesSection/>

      <AboutSection/>
    </main>
  );
}
