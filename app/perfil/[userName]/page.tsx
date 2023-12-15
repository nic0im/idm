import { getUserbyName } from "../../api/controllers/usuario"
import LeaderBoard from "../../components/LeaderBoard"
import Profile from "../../components/Profile"
import UserWall from "../../components/UserWall"

type Params = {
  params: {
    userName: string
  }
}
 
export default async function Page({params: {userName}}: Params) {

  const user = await getUserbyName(userName)

  return(
    <div className=" text-center flex justify-center flex-col items-center bg-lime-300">
      <div className=" w-full py-2 bg-green-100 mt-4 bg-green-700/40 text-xl">
      Perfil de {userName}
      </div>
      <div className="flex justify-center gap-5 mt-3">
      <Profile user={user}/>
      <LeaderBoard/>
      </div>
      <div className="mt-4 border border-gray-400 w-[1400px] h-[40px] flex gap-10">
        <div>
          portada
        </div>
        <div>
          publicaciones
        </div>
        <div>
          insignias
        </div>

      </div>
      <UserWall/>
    
    </div>
  )

}