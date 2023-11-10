"use client";

import { useIsClient } from "@/context/isClientContxt";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const isClient = useIsClient();
  const pathName = usePathname();

  if (isClient) {
    let prevScrollPos = window.scrollY; // Guarda la posición de desplazamiento anterior

    window.onscroll = function () {
      const currentScrollPos = window.scrollY; // Obtiene la posición de desplazamiento actual
      const navbar = document.getElementById("navbar");

      if (navbar) {
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
      pathName: "/servicios",
      title: "Servicios",
      active: pathName === "/servicios",
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
      className="fixed w-full p-8 bg-gray-200 z-40 transition-all duration-300"
      id="navbar"
    >
      <nav className="lg:max-w-[1200px] mx-auto flex justify-between items-center py-1 text-sm font-medium">
        <Link href={"/"} className="font-bold text-xl">
          DETAIL CENTER
        </Link>

        <div>
          <ul className="flex gap-x-10 ">
            {routes.map((route) => (
              <li key={route.title} className={`hover:text-red-500 transition-all ${route.active ? 'text-red-500' : ' '}`}>
                <Link href={route.pathName}>{route.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-6 py-3 cursor-pointer border border-red-500 hover:bg-red-500 hover:text-white transition-all">
          Contáctanos
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
