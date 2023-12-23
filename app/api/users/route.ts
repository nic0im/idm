
import {connectDB} from "../../db/mongoose"

import {getUserbyName} from "../controllers/usuario";
import { addFriend, sendFriendRequest, deleteFriendRequest, deleteFriend } from "../controllers/helpers";

import Usuario from "../../db/models/userSchema"

type user = {
    
_id: String,
nombre: String,
foto: String,
email:String,
createdAt: String,
updatedAt: String

}

//RUTA    api/usuario - metodo get
//Este endpoint puede recibir distintos query params los cuales determinaran su funcionalidad y su retorno.

//1- query "notifications=1": Esta query devolvera las notificaciones segun el nombre de usuario. 
//Ademas de la query "notifications=1" se debe incluir la query "user"
//EJ: 
export async function GET(req: Request): Promise<Response>{

  const params = new URLSearchParams(req.url.split('?')[1]);

  console.log(params)

  const notifications = params.get('notifications')
  const friendRequest = params.get('friendRequest')
  const getSingle = params.get('getSingle')
  const cancelFriendRequest = params.get('cancelFriendRequest')
  

  if(notifications=="1") {
    //get notifications from specific user
    const username = params.get('user')
    const user = await getUserbyName(username)
    console.log(user)
    return new Response(JSON.stringify(user.notifications), {
      headers: { 'Content-Type': 'application/json' },
    });

  } else if (getSingle=="1") {
    //get single user by username
    const username = params.get('user')
    const user = await getUserbyName(username)
    
    return new Response(JSON.stringify(user), {
      headers: { 'Content-Type': 'application/json' },
    });

  } else if (friendRequest=="1") {

    //send friend request
    const from = params.get('from')
    const to = params.get('to')

    try {

     const res = await sendFriendRequest(from,to)
     return new Response(JSON.stringify(res))

    } catch (err) {

      console.log(err)

    }
    
    return new Response("Error")}
  
    else if (cancelFriendRequest=="1")  {

       //cancel friend request
       const from = params.get('from')
       const to = params.get('to')

       try {

       const res = await deleteFriendRequest(from,to)
       return new Response(JSON.stringify(res))
       
       } catch(err){console.log(err)}
       return new Response("Error")
  }

  return
}






export async function POST(req: Request){
    const body = await req.json()
    console.log(body.hello)
    return new Response("ok")
}