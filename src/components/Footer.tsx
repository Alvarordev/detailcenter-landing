import { FacebookIcon, InstagramIcon } from "@/ui/Icons";
import { raleway } from "@/ui/fonts";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#1a1a1a] text-white overflow-hidden">
      <div className="lg:max-w-[1280px] px-8 w-full mx-auto pt-32 mb-40 flex flex-col gap-8 lg:gap-0 lg:grid lg:grid-cols-12">
        <div className="col-span-5">
          <div className="sticky top-20 flex text-white col-span-4">
            <div className="h-12 w-1 mt-4 mr-14 bg-red-500 hidden lg:block" />
            <div className="flex flex-col">
              <h2 className={`text-4xl  lg:text-[52px] pb-5 leading-tight font-semibold ${raleway.className}`}>
                DETAIL CENTER
              </h2>
              <p className="text-gray-300 text-md">
              Somos un centro de detailing automotriz especializado en la limpieza y detallado de vehículos, brindando servicios con un equipo de jóvenes profesionales y especialistas de primer nivel. Nos destacamos por nuestro compromiso y dedicación al cuidado integral de tu vehículo
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-3"></div>

        <div className="col-span-4">
          <h3 className={`text-3xl ${raleway.className} font-semibold pb-5`}>
            Contacto
          </h3>
          <div className="text-2xl text-red-500 flex flex-col gap-3">
            <span>contacto@detailcenter.pe</span>
            <span>934-963-162</span>
            <span>Av Colina 713 - Surquillo</span>
          </div>
          <div className="flex flex-col my-8 gap-8">
            <Link href={'https://www.instagram.com/detailcenter.pe/'} className="flex gap-3 text-red-500">
              <InstagramIcon size="28" />
              <span className="text-white">@detailcenter.pe</span>
            </Link>

            <div className="flex gap-3 text-red-500">
              <FacebookIcon size="28" />
              <span className="text-white">@detailcenterpe</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-300 text-center text-sm pb-32">Copyright © 2023 DetailCenter. Todos los Derechos Reservados.</div>
    </div>
  );
};

export default Footer;
