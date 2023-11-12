"use client";

import { useIsClient } from "@/context/isClientContxt";
import { FacebookIcon, InstagramIcon, MenuIcon } from "@/ui/Icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const [hiddenNavBar, setHiddenNavBar] = useState(false);
  const isClient = useIsClient();
  const pathName = usePathname();

  if (isClient) {
    let prevScrollPos = window.scrollY; // Guarda la posición de desplazamiento anterior

    window.onscroll = function () {
      const currentScrollPos = window.scrollY; // Obtiene la posición de desplazamiento actual
      const navbar = document.getElementById("navbar");

      if (navbar && !hiddenNavBar) {
        if (currentScrollPos > prevScrollPos) {
          // Si te desplazas hacia abajo, oculta la barra de navegación
          navbar.style.top = "-118px";
        } else {
          // Si te desplazas hacia arriba, muestra la barra de navegación
          navbar.style.top = "0";
        }
        prevScrollPos = currentScrollPos; // Actualiza la posición de desplazamiento anterior
      }
    };
  }

  const routes = [
    {
      pathName: "/",
      title: "Home",
      active: pathName === "/",
    },
    {
      pathName: "/nosotros",
      title: "Nosotros",
      active: pathName === "/nosotros",
    },
    {
      pathName: "/contacto",
      title: "Contacto",
      active: pathName === "/contacto",
    },
  ];

  return (
    <div
      className={`fixed w-full px-8 py-7 bg-gray-200 z-40 transition-all duration-300 ${
        hiddenNavBar ? "h-screen bg-white" : ""
      }`}
      id="navbar"
    >
      <nav className="flex flex-col text-sm font-medium">
        <div className="lg:max-w-[1200px] w-full lg:mx-auto flex justify-between items-center ">
          <Link href={"/"} className="font-bold text-xl">
            <Image
              src="/detail-center-logo.png"
              alt=""
              height={56}
              width={108}
            />
          </Link>

          <div className="hidden lg:block">
            <ul className="flex gap-x-10 ">
              {routes.map((route) => (
                <li
                  key={route.title}
                  className={`hover:text-red-500 transition-all ${
                    route.active ? "text-red-500" : " "
                  }`}
                >
                  <Link href={route.pathName}>{route.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href={'/contacto'} className="hidden lg:block  px-6 py-3 cursor-pointer border border-red-500 hover:bg-red-500 hover:text-white transition-all">
            Contáctanos
          </Link>

          <div
            className="border border-red-500 px-3 py-3 lg:hidden"
            onClick={() => setHiddenNavBar(!hiddenNavBar)}
          >
            <MenuIcon />
          </div>
        </div>

        <div
          className={`${hiddenNavBar ? "" : "hidden"}`}
          onClick={() => setHiddenNavBar(!hiddenNavBar)}
        >
          <ul className="mt-12 text-xl font-medium flex flex-col gap-2">
            {routes.map((route) => (
              <li
                key={route.title}
                className={`hover:text-red-500 transition-all ${
                  route.active ? "text-red-500" : " "
                }`}
              >
                <Link href={route.pathName}>{route.title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col mt-8">
            <span className="mb-3 text-gray-500">Contacto</span>
            <span>contacto@detailcenter.pe</span>
            <span>934-963-162</span>
            <div className="flex gap-3 items-center text-red-500 my-5">
              <InstagramIcon size="28" />
              <span className="text-black">@detailcenterpe</span>
            </div>

            <div className="flex gap-3 items-center text-red-500">
              <FacebookIcon size="28" />
              <span className="text-black">@detailcenterpe</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
