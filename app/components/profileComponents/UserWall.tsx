import { revalidatePath } from "next/cache";
import { comentar } from "../../api/controllers/comentarios";
import WallComment from "./WallComment";
import { getServerSession } from "next-auth"
import { getCommentsById } from "../../api/controllers/comentarios";
import SvgCamera from "../../svg/SvgCamera";
import SvgVideoCamera from "../../svg/SvgVideoCamera";
import SvgCheck from "../../svg/SvgCheck";

export default async function UserWall({idReceptor, loggedUserId, currentUsername}) {

  const session = await getServerSession()
  const comentarios = await getCommentsById(idReceptor)

  const comentarPerfil = async (formData: FormData) => {
    "use server"
    const comentario = formData.get("comentario")
    
    try { await comentar(loggedUserId, idReceptor, comentario)} catch(err){console.log(err)}

    revalidatePath("/")
    return
  }

  return (

    <div className="w-full h-auto flex gap-2 justify-center mt-3">
      <div className="flex flex-col gap-2">
        <div className="bg-black/50 text-white py-2 w-[750px] rounded-md">
          Comentarios
        </div>
        {session ? (<div className="">
          
          <div className=" flex gap-2 relative">
          <img className=" w-[60px] h-[60px] rounded-md absolute -left-[65px]" src={session.user.image}/>
          <form action={comentarPerfil} className="flex gap-2 w-full">
            <textarea name="comentario" className="border border-black min-h-[100px] w-full rounded-lg relative p-2 bg-black/10" placeholder="Dejar comentario"/>
            <div className="flex flex-col gap-4 justify-start px-2">
              <SvgCamera className="h-[25px] w-[25px]"/>
              <SvgVideoCamera className="h-[25px] w-[25px]"/>
              <button type="submit">
              <SvgCheck className="h-[25px] w-[25px] hover:text-green-400 transition-all"/>
              </button>
            </div>
          </form>
        </div></div>):(<>inicia sesion para comentar</>)}
        {comentarios.map((c)=>{return(<WallComment c={c} session={session} currentUserName={currentUsername}/>)})}
        
      </div>
      <div className="border border-black w-[300px] h-[fit]">

      </div>
      
    </div>
  );
}
