import Image from "next/image";
import Slider from "../Slider";
import { raleway } from "@/ui/fonts";

const ServicesSection = () => {
  return (
    <section className="bg-[#1a1a1a] text-white w-full antialiased pt-20">
      <div className="lg:max-w-[1280px] flex flex-col lg:grid lg:grid-cols-12 lg:items-start lg:justify-between mx-auto px-8">
        <div className="lg:sticky top-20 flex text-white col-span-4 mb-16">
          <div className="h-9 w-1 mr-4 lg:h-12 lg:mt-2 lg:mr-10 bg-red-500" />
          <div className="flex flex-col">
            <h2
              className={`text-4xl lg:max-w-[600px] lg:text-[52px] pb-5 leading-tight font-bold ${raleway.className}`}
            >
              Nuestros <br /> Servicios
            </h2>
            <p className="text-gray-300 text-md mb-12">
              En Detail Center, entendemos que el detailing significa algo
              diferente para cada persona. Por eso, ofrecemos una variedad de
              servicios para devolverle el brillo y la claridad a tu vehículo.
              ¡Tu auto merece lo mejor, y nosotros nos encargamos de hacerlo
              brillar!
            </p>

            <p className="font-medium text-md lg:text-lg">Dirección:</p>
            <p className="font-medium text-red-500 text-md lg:text-lg">
              Av Colina 713 - Surquillo
            </p>
          </div>
        </div>

        <div className="col-span-1" />

        <div className="col-span-7 min-h-[2000px] flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row gap-10 fade-in">
            <div className="min-w-[260px] max-w-[260px]">
              <h3 className="text-xl font-semibold mb-5 md:hidden">
                Corrección de pintura
              </h3>

              <Image
                height={335}
                width={260}
                src="/paint-fixing.webp"
                alt="paint-fixing"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5 hidden md:block">
                Corrección de pintura
              </h3>
              <p className="text-[15px] leading-6 text-gray-300">
                Restaure la elegancia de su vehículo con nuestro servicio de
                corrección de pintura. Eliminamos imperfecciones y arañazos,
                logrando un acabado impecable que resalta la belleza de su
                automóvil.
              </p>
            </div>
          </div>

          <div className="flex gap-10 flex-col lg:flex-row ">
            <div className="min-w-[260px] max-w-[260px]">
              <h3 className="text-xl font-semibold mb-5 md:hidden">
              Aplicación de cerámicos
              </h3>

              <Image
                height={335}
                width={260}
                src="/ceramics.avif"
                alt="paint-fixing"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5 hidden md:block">
                Aplicación de cerámicos
              </h3>
              <p className="text-[15px]  leading-6 text-gray-300">
                Proteja su inversión con nuestra aplicación de cerámicos. No
                solo obtenemos un brillo duradero, sino que también
                proporcionamos una capa protectora que resguarda su vehículo
                contra los elementos, garantizando una apariencia inmaculada a
                largo plazo.
              </p>
            </div>
          </div>

          <div className="flex gap-10 flex-col lg:flex-row ">
            <div className="min-w-[260px] max-w-[260px]">
              <h3 className="text-xl font-semibold mb-5 md:hidden">
              Lavado de Salon
              </h3>

              <Image
                height={335}
                width={260}
                src="/inside-cleaning.jpg"
                alt="paint-fixing"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5 hidden md:block">Lavado de Salon</h3>
              <p className="text-[15px]  leading-6 text-gray-300">
                Brinde a su vehículo el cuidado interior que se merece. Nuestro
                servicio de lavado de salón asegura un interior fresco y limpio,
                creando un entorno acogedor y pulcro en cada trayecto.
              </p>
            </div>
          </div>

          <div className="flex gap-10 flex-col lg:flex-row ">
            <div className="min-w-[260px] max-w-[260px]">
              <h3 className="text-xl font-semibold mb-5 md:hidden">
              Lavado profesional de flotas
              </h3>

              <Image
                height={335}
                width={260}
                src="/washing.jpg"
                alt="paint-fixing"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5 hidden md:block">
                Lavado profesional de flotas
              </h3>
              <p className="text-[15px]  leading-6 text-gray-300">
                Para empresas que aprecian la presentación de su flota,
                ofrecemos un lavado profesional que va más allá de la
                superficie. Mantenga sus vehículos representativos y listos para
                impresionar en cualquier entorno, reforzando una imagen
                corporativa impecable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36">
        <Slider />
      </div>
    </section>
  );
};

export default ServicesSection;
