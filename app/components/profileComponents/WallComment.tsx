import Link from "next/link"
import SvgHeart from "../../svg/SvgHeart"
import SvgTrashCan from "../../svg/SvgTrashCan"

export default async function WallComment({c,session, currentUserName}){

  

    return(
      <div className="flex justify-center gap-2 mt-1 border-t border-gray-500 pt-2">
        <div className="mt-1">
        <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/perfil/${c.autorNombre}`}><img className="h-[50px] w-[50px] rounded-full" src={c.autorImg}/></Link>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-start gap-2 pl-1">
            <span>{c.autorNombre}</span>
            <span className=" text-slate-600 font-sans">{c.createdAt.getDate()+"-"+(c.createdAt.getMonth()+1)}</span>
            <span></span>
          </div>
          <div className="flex gap-1">
            <div className=" bg-black/10 break-normal min-h-[30px] max-w-[700px] rounded-md shadow-md w-full p-1 px-4 text-start font-sans">
            {c.comentario}
            </div>
            <div className="flex flex-col justify-center">
            {(session?.user?.name==c.autorNombre || currentUserName==session?.user?.name) ? <SvgTrashCan commentId={c._id.toString()}/> : ("")}
            </div>
          </div>
        </div>
      </div>
        )
}