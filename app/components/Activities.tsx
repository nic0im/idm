import React from "react";
import SvgSwimg from "../svg/SvgSwim";
import SvgSport from "../svg/SvgSport";
import SvgTourism from "../svg/SvgTourism";
import SvgFood from "../svg/SvgFood";
export default function Activities() {
  const sampleUsers = [
    { nombre: "Juan" },
    { nombre: "Maria" },
    { nombre: "Nicolas" },
    { nombre: "Lucas" },
    { nombre: "Don Nelson" },
  ];

  return (
    <div className="bg-transparent text-white w-[300px] h-[450px] text-center">
      <p className="font-bold text-2xl mt-4">Temas de interes</p>
      <div className=" border rounded-lg h-[70px] mx-10 mt-10 items-center flex bg-green-800/70 text-2xl justify-center font-semibold gap-4 font-sans">
        <SvgSwimg />
        Balnearios
      </div>
      <div className="border rounded-lg h-[70px] mx-10 mt-5 items-center flex text-2xl bg-green-800/70 justify-center font-semibold gap-4 font-sans">
        <SvgSport/>
        Deportes
      </div>
      <div className="border rounded-lg h-[70px] mx-10 mt-5 items-center flex text-2xl bg-green-800/70 justify-center font-semibold gap-4 font-sans">
        <SvgTourism/>
        Turismo
      </div>
      <div className="border rounded-lg h-[70px] mx-10 mt-5 items-center flex text-2xl bg-green-800/70 justify-center font-semibold gap-4 font-sans">
        <SvgFood/>
        Comida
      </div>
    </div>
  );
}
