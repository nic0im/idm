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
    <Link href={href} className="flex justify-center">
    <div className="overflow-hidden w-3/6 h-[250px] flex bg-white/80 rounded cursor-pointer hover:shadow-2xl hover:shadow-green-750  hover:bg-green-300/90">
          <div className=" w-1/3 border-r border-black">
            <img src={imgSrc} className="w-full h-full"/>
          </div>
          <div className="w-2/3 justify-center">
            <div className="flex justify-center py-8 font-semibold text-2xl h-2/6">
            {tittle}
            </div>
            <div className="px-8 mt-4 h-2/6 text-lg text-center">
            {desc}
            
            </div>
            <div className="gap-5 flex justify-end pr-5 items-end h-2/6">
            </div>
            
          </div>
        </div>
        </Link>
        )
}