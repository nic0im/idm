import { getUserbyName } from "../../api/controllers/usuario"
import { getServerSession } from "next-auth"


import LeaderBoard from "../../components/LeaderBoard"
import Profile from "../../components/profileComponents/Profile"
import UserWall from "../../components/profileComponents/UserWall"
import { getProfileInfoByName } from "../../api/controllers/helpers"
import { getCommentsById } from "../../api/controllers/comentarios"

type Params = {
  params: {
    userName: string
  }
}
 
export default async function Page({params: {userName}}: Params) {

const session = await getServerSession()

 //conseguir el usuario logeado
 const loggedUser = await getUserbyName(session?.user?.name)


 //conseguir el usuario entero de la pagina segun el nombre del param-
  const userDecoded = decodeURIComponent(userName)
  const user = await getProfileInfoByName(userDecoded)


  return(
    <div className=" text-center flex justify-center flex-col items-center ">
      <div className=" w-[1150px] py-2 mt-4 text-xl text-white relative overflow-hidden">
      <img src="/Captura2.PNG" className=" rounded-md shadow-md" />
      <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 z-6 flex w-full h-[200px] items-center justify-center bg-black/40 rounded-md font-thin text-7xl">{userDecoded}</div>
      </div>
      <div className="flex justify-center gap-5 mt-3">
      
      <Profile user={JSON.stringify(user)} userLogged={JSON.stringify(loggedUser)}/>
      <LeaderBoard/>
      </div>
      <div className="mt-4  w-[1100px] h-[40px] flex gap-10 items-center justify-start text-black bg-black/10">
        <button className=" hover:bg-white h-full w-full hover:text-black transition-all" >
          Comentarios
        </button>
        <button className=" hover:bg-white h-full w-full hover:text-black transition-all">
          Publicaciones
        </button>
        <button className=" hover:bg-white h-full w-full hover:text-black transition-all">
          Insignias
        </button>

      </div>
      <UserWall idReceptor={user?._id.toString()} loggedUserId={loggedUser?._id.toString()} currentUsername={user?.nombre} />
    
    </div>
  )

}