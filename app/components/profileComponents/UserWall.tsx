import { revalidatePath } from "next/cache";
import { commentProfile } from "../../api/controllers/helpers";
import WallComment from "./WallComment";
import { getServerSession } from "next-auth"

export default async function UserWall({idReceptor, comentarios}) {

  const session = await getServerSession()

  const comentarPerfil = async (formData: FormData) => {
    "use server"
    const comentario = formData.get("comentario")
    
    try { await commentProfile(session?.user?.name, idReceptor, comentario)} catch(err){console.log(err)}

    revalidatePath("/")
  }

  return (

    <div className="w-full h-auto flex gap-2 justify-center mt-3">
      <div className="flex flex-col gap-2">
        <div className="bg-slate-300 py-1 w-[650px]">
          Comentarios
        </div>
        {comentarios.map((c)=>{return(<WallComment c={c}/>)})}
        {session ? (
        <div className=" flex gap-3">
          <img className=" w-[80px] h-[80px] rounded-md" src={session.user.image}/>
          <form action={comentarPerfil} className="flex flex-col gap-2 items-end">
            <textarea name="comentario" className="border border-black h-[110px] w-[500px] bg-white rounded-lg relative p-2" placeholder="Dejar comentario"/>
            <button className="border border-black w-fit p-2 rounded-md bg-slate-300 hover:bg-slate-500 hover:text-white" type="submit">
              Comentar
            </button>
          </form>
        </div>):(<>inicia sesion para comentar</>)}
      </div>
      <div className="border border-black w-[400px] h-[fit]">

      </div>
      
    </div>
  );
}
