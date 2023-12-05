import React from "react";
import Header from "../components/Header";
import LeaderBoard from "../components/LeaderBoard";
import Activities from "../components/Activities";
import Recientes from "../components/Recientes";
import {options} from '../api/auth/[...nextauth]/options'
import {getServerSession} from "next-auth/next"

export default async function welcome() {

  const session = await getServerSession(options)
  
  return (
    <div className="w-full h-full"
      
    ><div className="  bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://upload.wikimedia.org/wikipedia/commons/d/db/Entrada_a_comuna_Isla_de_Maipo_Región_Metropolitana_Chile.JPG)",
    }}>

    
      <div className="flex flex-col   h-full items-center text-white bg-black/40 backdrop-blur-sm">
        <Header Session={session} />

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
        <div className=" mt-10">
        <Recientes />
        </div>
        
      </div>
    </div>
    <div className="bg-black h-[400px]">

    </div>
    </div>
  );
}
