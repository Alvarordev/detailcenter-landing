import Slider from "@/components/Slider";
import { raleway } from "@/ui/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <section className="min-h-[600px] bg-gray-200 relative overflow-x-hidden">
        <div className="w-full h-32"></div>

        <div className="relative z-20 p-8 lg:max-w-[1280px] mx-auto">
          <div className="flex move-in">
            <div className="h-12 w-1 mt-4 mr-14 bg-red-500" />
            <h1 className={`text-[52px] font-bold ${raleway.className}`}>
              Máximo Cuidado para <br /> tu Vehículo
            </h1>
          </div>
        </div>

        <div className="lg:max-w-[1280px] mx-auto relative flex z-20 px-8 mb-24 move-in">
          <div className="lg:ml-16 bg-red-500 text-white w-[200px] flex items-center justify-center py-5 transition-all font-medium cursor-pointer hover:saturate-100 hover:translate-x-1 hover:-translate-y-1">
            Contactanos
          </div>
        </div>

        <div className="lg:max-w-[1200px] mx-auto text-[13px] font-medium flex pl-14">
          <div className="mr-20">
            <h3>contacto@detailcenter.pe</h3>
            <span className="text-red-400">934-963-162</span>
          </div>

          <div>
            <h3>Direccion</h3>
            <span className="text-red-400">Av Colina 713 - Surquillo</span>
          </div>
        </div>

        <div className="absolute top-20 right-0 z-20"></div>

        <p className="text-[113px] xl:text-[280px] text-gray-50 absolute xl:top-20 -left-12 font-medium opacity-80 slow-motion fading-slow-mo">
          DetailCenter
        </p>
      </section>

      <section className="bg-[#1a1a1a] min-h-[600px] w-full relative antialiased ">
        <div className="w-full h-[700px]">
          <Image src="/car-washing.avif" alt="washing" fill />
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white w-full antialiased pt-20">
        <div className="lg:max-w-[1280px] grid lg:grid-cols-12 lg:items-start lg:justify-between mx-auto px-8">
          <div className="sticky top-20 flex text-white col-span-4">
            <div className="h-12 w-1 mt-4 mr-14 bg-red-500" />
            <div className="flex flex-col">
              <h2 className={`text-[52px] pb-5 leading-tight font-semibold ${raleway.className}`}>
                Nuestros <br /> Servicios
              </h2>
              <p className="text-gray-300 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                porro dicta animi quos at provident atque? Omnis, magni
                cupiditate? Laudantium nam cupiditate voluptates vitae veniam
                inventore soluta quam porro aliquid!
              </p>
            </div>
          </div>

          <div className="col-span-1" />

          <div className="col-span-7 min-h-[2000px] flex flex-col gap-16">
            <div className="flex gap-10 fade-in">
              <div className="min-w-[260px] max-w-[260px]">
                <Image
                  height={335}
                  width={260}
                  src="/paint-fixing.webp"
                  alt="paint-fixing"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-5">
                  Correcion de Pintura
                </h3>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, perspiciatis porro eius, labore, ratione sequi
                  cupiditate recusandae voluptatum deserunt voluptatibus nulla
                  tenetur nostrum? Ad alias commodi totam tempore exercitationem
                  voluptate.
                </p>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="min-w-[260px] max-w-[260px]">
                <Image
                  height={335}
                  width={260}
                  src="/ceramics.avif"
                  alt="paint-fixing"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-5">
                  Aplicación de cerámicos
                </h3>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, perspiciatis porro eius, labore, ratione sequi
                  cupiditate recusandae voluptatum deserunt voluptatibus nulla
                  tenetur nostrum? Ad alias commodi totam tempore exercitationem
                  voluptate.
                </p>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="min-w-[260px] max-w-[260px]">
                <Image
                  height={335}
                  width={260}
                  src="/inside-cleaning.jpg"
                  alt="paint-fixing"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-5">Lavado de Salon</h3>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, perspiciatis porro eius, labore, ratione sequi
                  cupiditate recusandae voluptatum deserunt voluptatibus nulla
                  tenetur nostrum? Ad alias commodi totam tempore exercitationem
                  voluptate.
                </p>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="min-w-[260px] max-w-[260px]">
                <Image
                  height={335}
                  width={260}
                  src="/washing.jpg"
                  alt="paint-fixing"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-5">
                  Lavado profesional de flotas
                </h3>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, perspiciatis porro eius, labore, ratione sequi
                  cupiditate recusandae voluptatum deserunt voluptatibus nulla
                  tenetur nostrum? Ad alias commodi totam tempore exercitationem
                  voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-36">
          <Slider />
        </div>
      </section>

    </main>
  );
}
