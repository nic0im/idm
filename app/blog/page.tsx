import React from "react";
import Activities from "../components/Activities";
import Recientes from "../components/Recientes";
import Destacados from "../components/Destacados";


export default function welcome() {

  
  return (
    <div className="w-full h-fit"
      
    ><div className="  bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://upload.wikimedia.org/wikipedia/commons/d/db/Entrada_a_comuna_Isla_de_Maipo_Región_Metropolitana_Chile.JPG)",
    }}>

    
      <div className="flex flex-col   h-full items-center text-white bg-black/40 backdrop-blur-sm">
        

        <div className=" h-[550px] w-screen flex justify-center mt-[40px] ">
          <div className="flex  gap-[90px]">
            <div className="flex flex-col">
              <div className="border mt-5 h-[400px]">
              </div>
              <div className=" h-[250px] items-center flex w-[800px] bg-green-900/80 text-3xl font-sans px-10 font-light">
                <p>
                  Desde rincones pintorescos y atracciones turísticas, hasta
                  datos útiles para emprendedores locales, nuestro blog es tu
                  guía completa para explorar y disfrutar de Isla de Maipo.
                </p>
              </div>
            </div>

            <div className=" h-full items-center flex w-[400px]">
              <Activities />
            </div>
          </div>
        </div>
        <div className=" mt-10 flex flex-col gap-5">
        <Destacados />
        <Recientes />
        </div>
        
      </div>
    </div>
    </div>
  );
}
