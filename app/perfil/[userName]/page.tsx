import LeaderBoard from "../../components/LeaderBoard"
import Profile from "../../components/Profile"
import UserWall from "../../components/UserWall"

type Params = {
  params: {
    userName: string
  }
}
 
export default function UserPage({params: {userName}}: Params) {

  return(
    <div className=" text-center flex justify-center mt-4 flex-col items-center">
      <div className="border-y w-full py-2 border-gray-800 bg-green-100">
      Perfil de {userName}
      </div>
      <div className="flex justify-center gap-5 mt-3">
      <Profile/>
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