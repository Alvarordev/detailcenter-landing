import { raleway } from "@/ui/fonts";

const About = () => {
  return (
    <main className="min-h-screen bg-gray-100 ">
      <section className="bg-gray-200 relative h-screen overflow-hidden">
        <div className="w-full h-32" />

        <div className="max-w-[1280px] w-full mx-auto grid lg:grid-cols-12 pt-6 lg:pt-16 pb-32 z-20 relative px-8 lg:px-12 ">
          <div className="sticky top-20 flex text-black col-span-5">
            <div className="h-9 w-1 mr-4 lg:h-12 lg:mt-2 lg:mr-10 bg-red-500"/>
            <div className="flex flex-col">
              <h2
                className={`text-4xl  lg:text-[52px] pb-5 leading-tight font-semibold ${raleway.className}`}
              >
                Sobre Nosotros
              </h2>
            </div>
          </div>

          <div className="col-span-1" />

          <div className="col-span-6 pt-3">
            <p className="text-md lg:text-lg pb-12 pl-6 pr-1 lg:px-0">
              Somos un centro de detailing automotriz especializado en la
              limpieza y detallado de vehículos, brindando servicios con un
              equipo de jóvenes profesionales y especialistas de primer nivel.
              Nos destacamos por nuestro compromiso y dedicación al cuidado
              integral de tu vehículo
            </p>

            <p className="font-medium text-md pl-6 pr-1 lg:px-0">Dirección:</p>
            <p className="font-medium text-red-500 text-md pl-6 pr-1 lg:px-0">
              Av Colina 713 - Surquillo
            </p>    
          </div>
        </div>

        <p className="text-[113px] xl:text-[270px] text-gray-50 absolute -bottom-[165px] -left-12 font-medium opacity-80">
          DetailCenter
        </p>
      </section>

      {/* <section className="bg-gray-100 overflow-hidden">
        <div className="max-w-[1280px] w-full mx-auto grid lg:grid-cols-12 pt-16 pb-32 z-20 relative px-12 ">
          <div className="sticky top-20 flex text-black col-span-4">
            <div className="h-12 w-1 mt-2 mr-10 bg-red-500" />
            <div className="flex flex-col">
              <h2
                className={`text-[52px] pb-5 leading-tight font-semibold ${raleway.className}`}
              >
                Nosotros
              </h2>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default About;
