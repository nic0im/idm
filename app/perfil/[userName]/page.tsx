import { getUserbyName } from "../../api/controllers/usuario"
import { getServerSession } from "next-auth"


import LeaderBoard from "../../components/LeaderBoard"
import Profile from "../../components/profileComponents/Profile"
import UserWall from "../../components/profileComponents/UserWall"

type Params = {
  params: {
    userName: string
  }
}
 
export default async function Page({params: {userName}}: Params) {

  const session = await getServerSession()

 //conseguir el usuario entero de la pagina segun el nombre del param-
  const userDecoded = decodeURIComponent(userName)
  const user = await getUserbyName(userDecoded)

  const { nombre , foto , lastSeen , totalPosts , comentarios, solicitudes, amigos } = user

  const areFriends = amigos.includes(session?.user)


  console.log("session id", session)
  //const alreadySentFriendRequest = solicitudes.includes(localStorage.getItem('idUserFromSession'))
  
  const currentUser = { nombre , foto ,lastSeen, totalPosts, comentarios, areFriends}


  //console.log(currentUser)

  //amigos
  //solicitudes

  const currentUserId = user?._id
  const currentUserComments = user?.comentarios

  //conseguir el usuario logeado
  const loggedUser = await getUserbyName(session?.user?.name)


  


  return(
    <div className=" text-center flex justify-center flex-col items-center bg-gradient-to-b from-lime-200 to-lime-300">
      <div className=" w-full py-2 bg-green-100 mt-4 bg-green-700/40 text-xl">
      Perfil de {userDecoded}
      </div>
      <div className="flex justify-center gap-5 mt-3">
      
      <Profile user={JSON.stringify(user)} userLogged={JSON.stringify(loggedUser)}/>
      <LeaderBoard/>
      </div>
      <div className="mt-4  w-[1100px] h-[40px] flex gap-10 items-center justify-start bg-green-800/80 text-white">
        <button className=" hover:bg-white h-full w-full hover:text-black" >
          Comentarios
        </button>
        <button className=" hover:bg-white h-full w-full hover:text-black">
          Publicaciones
        </button>
        <button className=" hover:bg-white h-full w-full hover:text-black">
          Insignias
        </button>

      </div>
      <UserWall idReceptor={currentUserId.toString()} comentarios={currentUserComments}/>
    
    </div>
  )

}