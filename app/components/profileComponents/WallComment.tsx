import Link from "next/link"

export default function WallComment({c}){


  

    return(
        <div className="border border-black w-[600px] bg-slate-50/50 flex">
        <img className="h-[80px] w-[80px]" src={c.profilePicture}/>
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-start gap-2 px-3">
          <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/perfil/${c.nombre}`}><div className="font-semibold">{c.nombre}</div></Link>
          <div className="text-slate-400">{c.fecha}</div>
          </div>
          <div className="border-t border-gray-400 h-full px-2 text-start">{c.comentario}</div>
          
        </div>
      </div>)
}