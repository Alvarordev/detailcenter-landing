import { raleway } from "@/ui/fonts";

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
          <div className="lg:ml-16 bg-red-500 text-white w-[200px] flex items-center justify-center py-5 font-medium cursor-pointer">
            Contactanos
          </div>
        </div>

        <div className="lg:max-w-[1200px] mx-auto text-[13px] font-medium flex pl-14">
          <div className="mr-20">
            <h3>contacto@detailcenter.pe</h3>
            <span className="text-red-400">987-654-321</span>
          </div>

          <div>
            <h3>Direccion</h3>
            <span className="text-red-400">Av Falsa 123 - Lima</span>
          </div>
        </div>

        <div className="absolute top-20 right-0 z-20"></div>

        <p className="text-[113px] xl:text-[280px] text-gray-50 absolute xl:top-20 -left-12 font-medium opacity-80 slow-motion fading-slow-mo">
          DetailCenter
        </p>
      </section>

      <section className="bg-[#1a1a1a] min-h-[600px] w-full relative antialiased ">
        <div className="min-w-[1200px] w-full h-[605px] object-cover">
          <img
            src="./car-washing.avif"
            alt="washing"
            className=" object-fill h-[605px]"
          />
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white w-full antialiased pt-20">
        <div className="lg:max-w-[1280px] grid lg:grid-cols-12 justify-between mx-auto px-8">
          <div className="sticky top-20 flex flex-col text-white col-span-4">
            <div className="flex">
              <div className="h-12 w-1 mt-4 mr-14 bg-red-500" />
              <div>
                <h2
                  className={`text-[52px] font-semibold ${raleway.className}`}
                >
                  Nuestros <br /> Servicios
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores porro dicta animi quos at provident atque? Omnis,
                  magni cupiditate? Laudantium nam cupiditate voluptates vitae
                  veniam inventore soluta quam porro aliquid!
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-7 min-h-[2000px]">
            <div className="flex gap-10">
              <div className="min-w-[260px] max-w-[260px]">
                <img src="./paint-fixing.webp" alt="paint-fixing" />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Correcion de Pintura</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  laboriosam sunt optio nesciunt nam veritatis iste quibusdam
                  quos non voluptatem tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
