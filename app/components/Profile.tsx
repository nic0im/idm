import { getServerSession } from 'next-auth';
import { getUserbyName } from '../api/controllers/usuario';

export default async function Profile({user}) {
  

  
  const currentUser = await user;
  const joined = new Date(user?.createdAt)
  const formattedJoined = joined.toLocaleDateString()
  const lastSeen = new Date(user?.lastSeen)
  const formattedLastSeen = lastSeen.toLocaleDateString()


  return currentUser ? (
      <div className="border border-gray-400 w-[800px] flex align-middle items-center gap-5 px-4 py-4 bg-white/60">
      <div className="flex flex-col gap-4">
        <img className="border border-red-400 h-[150px] w-[150px]" src={currentUser?.foto}/>
        <div>uva points</div>
      </div>
      <div className="border border-blue-600 h-full w-full flex flex-col py-2">
        <div className=" w-full border-red-300 border py-2 font-semibold">
          {currentUser.nombre}
        </div>
        <div className="w-full mt-1 border-blue-400 h-full flex flex-col gap-2">
          <div className="border-b w-full flex px-4 py-1 justify-between"><div>Se unio:</div><div>{formattedJoined}</div></div>
          <div className="border-b w-full flex px-4 py-1 justify-between"><div>Ultima conexion:</div><div>{formattedLastSeen}</div></div>
          <div className="border-b w-full flex px-4 py-1 justify-between"><div>Total amigos:</div> <div>{currentUser.amigos.lenght ? currentUser.amigos.lenght : 0 }</div></div>
          <div className="border-b w-full flex px-4 py-1 justify-between"><div>Publicaciones: </div> <div>{currentUser.totalPosts ? currentUser.totalPosts : 0 }</div></div>
        </div>
      </div>
    </div>)
   : (<div> Usuario no encontrado</div>)
}
