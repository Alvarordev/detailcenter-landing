"use client";

import { useIsClient } from "@/context/isClientContxt";

const NavBar = () => {
  const isClient = useIsClient();

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

  return (
    <div
      className="fixed w-full p-8 bg-gray-200 z-40 transition-all duration-300"
      id="navbar"
    >
      <nav className="lg:max-w-[1200px] mx-auto flex justify-between items-center py-1 text-sm font-medium">
        <div className="font-bold text-xl">DETAIL CENTER</div>

        <div>
          <ul className="flex gap-x-10 ">
            <li>Servicios</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div className="px-6 py-3 cursor-pointer border border-red-500">
          Contactanos
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
