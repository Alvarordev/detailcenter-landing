import { WhatsappIcon } from "@/ui/Icons";
import { raleway } from "@/ui/fonts";

const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-gray-200 relative h-screen overflow-hidden">
        <div className="w-full h-32" />

        <div className="lg:max-w-[1280px] w-full mx-auto flex flex-col lg:grid lg:grid-cols-12 pt-6 lg:pt-16 pb-32 z-20 relative px-8 lg:px-12 ">
          <div className="sticky top-20 flex text-black col-span-4 move-in-left">
            <div className="h-9 w-1 mr-4 lg:h-12 lg:mt-2 lg:mr-10 bg-red-500" />
            <div className="flex flex-col">
              <h2
                className={`text-4xl  lg:text-[52px] pb-5 leading-tight font-semibold ${raleway.className}`}
              >
                Contáctanos
              </h2>
            </div>
          </div>

          <div className="col-span-1" />

          <div className="col-span-7 pt-3 move-in-rigth">
            <p className="text-md lg:text-lg pl-6 pr-2 lg:p-0">
              ¡Si hay algo en lo que podemos ayudarte, por favor, utiliza el
              boton a continuación para ponerte en contacto con nosotros via Whatsapp!
              Si deseas obtener información sobre la solicitud de un presupuesto
              o reservar un servicio, no dudes en escribirnos. ¡Estamos aquí para ayudarte!
            </p>

            <div className="pt-12 lg:flex">
              <div className=" bg-red-500 text-white flex gap-2 items-center justify-center py-5 px-6 transition-all font-medium cursor-pointer hover:saturate-100 hover:translate-x-1 hover:-translate-y-1">
                <WhatsappIcon />
                Escribenos un mensaje
              </div>
            </div>
          </div>
        </div>

        <p className="text-[113px] xl:text-[270px] text-gray-50 absolute -bottom-[165px] -left-12 font-medium opacity-80">
          DetailCenter
        </p>
      </section>

      {/* <section className="bg-gray-100 overflow-hidden">
        <div className="lg:max-w-[1280px] w-full mx-auto grid lg:grid-cols-12 pt-16 pb-32 z-20 relative px-12 ">
          <div className="sticky top-20 flex text-black col-span-4">
            <div className="h-12 w-1 mt-2 mr-10 bg-red-500" />
            <div className="flex flex-col">
              <h2
                className={`text-[52px] pb-5 leading-tight font-semibold ${raleway.className}`}
              >
                Contactanos
              </h2>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Contact;
