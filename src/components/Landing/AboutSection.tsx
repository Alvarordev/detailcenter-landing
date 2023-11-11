import { raleway } from "@/ui/fonts";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="min-h-[600px] bg-gray-200 w-full">
      <div className="flex flex-col lg:grid lg:grid-cols-12 max-w-[1280px] w-full mx-auto py-16 lg:py-32 px-8">
        <div className="flex col-span-5 mb-16">
          <div className="h-9 w-1 mr-4 lg:h-12 lg:mt-2 lg:mr-10 bg-red-500" />
          <div className="flex flex-col">
            <h2
              className={`text-4xl lg:max-w-[600px] lg:text-[52px] pb-5 leading-tight font-bold ${raleway.className}`}
            >
              Sobre Nosotros
            </h2>
            <p className="text-gray-9900 text-md">
              Somos un centro de detailing automotriz especializado en la
              limpieza y detallado de vehículos, brindando servicios con un
              equipo de jóvenes profesionales y especialistas de primer nivel.
              Nos destacamos por nuestro compromiso y dedicación al cuidado
              integral de tu vehículo
            </p>
          </div>
        </div>

        <div className="col-span-1"></div>

        <div className="col-span-6 relative h-[380px] md:h-[480px]">
          <Image src={"/about-us.jpg"} alt="" fill priority />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
