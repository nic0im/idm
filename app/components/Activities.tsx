import React from "react";
import SvgSwimg from "../svg/SvgSwim";
import SvgSport from "../svg/SvgSport";
import SvgTourism from "../svg/SvgTourism";
import SvgFood from "../svg/SvgFood";
import Link from "next/link";
export default function Activities() {


  return (
    <div className="bg-transparent text-white w-[300px] h-[450px] text-center">
      <p className="font-bold text-2xl mt-4">Temas de interes</p>
      <Link className=" border rounded-lg h-[70px] mx-10 mt-10 items-center flex bg-green-800/70 text-2xl justify-center font-semibold gap-4 font-sans" href={`${process.env.NEXT_PUBLIC_APP_URL}/blog/posts/balnearios`}>
        <SvgSwimg />
        Balnearios
      </Link>
      <Link className="border rounded-lg h-[70px] mx-10 mt-5 items-center flex text-2xl bg-green-800/70 justify-center font-semibold gap-4 font-sans" href={`${process.env.NEXT_PUBLIC_APP_URL}/blog/posts/deportes`}>
        <SvgSport/>
        Deportes
      </Link>
      <Link className="border rounded-lg h-[70px] mx-10 mt-5 items-center flex text-2xl bg-green-800/70 justify-center font-semibold gap-4 font-sans" href={`${process.env.NEXT_PUBLIC_APP_URL}/blog/posts/turismo`}>
        <SvgTourism/>
        Turismo
      </Link>
      <Link className="border rounded-lg h-[70px] mx-10 mt-5 items-center flex text-2xl bg-green-800/70 justify-center font-semibold gap-4 font-sans" href={`${process.env.NEXT_PUBLIC_APP_URL}/blog/posts/comida`}>
        <SvgFood/>
        Comida
      </Link>
    </div>
  );
}
