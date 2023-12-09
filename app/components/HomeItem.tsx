"use client"

import Link from "next/link"

interface inputHomeItem {
  imgSrc: string,
  tittle: string,
  desc: string,
  href: string
}

export default function HomeItem ({imgSrc , tittle, desc, href}: inputHomeItem) {

    return (
    <Link href={href} className="flex justify-center text-white">
    <div className="overflow-hidden w-[300px] h-[400px] flex flex-col bg-green-700/90 rounded cursor-pointer hover:shadow-2xl hover:shadow-green-750  hover:bg-green-700/100">
          <div className=" border-black h-[250px]">
            <img src={imgSrc} className="w-full h-full"/>
          </div>
          <div className=" justify-center">
            <div className="flex justify-center py-8 font-semibold text-2xl h-2/6">
            {tittle}
            </div>
            <div className=" mt-3 text-lg text-center px-3">
            {desc}
            
            </div>
            <div className="gap-5 flex justify-end pr-5 items-end h-2/6">
            </div>
            
          </div>
        </div>
        </Link>
        )
}