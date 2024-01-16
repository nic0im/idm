import { connectDB } from "../../db/mongoose";

import { getUserbyName, getUserIdByName } from "../controllers/usuario";
import {
  addFriend,
  sendFriendRequest,
  deleteFriendRequest,
  deleteFriend,
  getRelationFromUsers,
} from "../controllers/helpers";

import Usuario from "../../db/models/userSchema";

type user = {
  _id: String;
  nombre: String;
  foto: String;
  email: String;
  createdAt: String;
  updatedAt: String;
};

//RUTA    api/usuario - metodo get
//Este endpoint puede recibir distintos query params los cuales determinaran su funcionalidad y su retorno.

//1- query "notifications=1": Esta query devolvera las notificaciones segun el nombre de usuario.
//Ademas de la query "notifications=1" se debe incluir la query "user"
//EJ:
export async function GET(req: Request): Promise<Response> {
  const params = new URLSearchParams(req.url.split("?")[1]);

  const notifications = params.get("notifications");
  const friendRequest = params.get("friendRequest");
  const getSingle = params.get("getSingle");
  const cancelFriendRequest = params.get("cancelFriendRequest");
  const relation = params.get("relation");
  const friendReqList = params.get("solicitudes");
  const getIdByName = params.get("getIdByName")
  const acceptFR= params.get("acceptFR");

  if (notifications == "1") {
    //get notifications from specific user by name
    const username = params.get("user");
    const user = await getUserbyName(username);
    return new Response(JSON.stringify(user.notifications), {
      headers: { "Content-Type": "application/json" },
    });
  } else if (getSingle == "1") {
    //get single user by username
    const username = params.get("user");
    const user = await getUserbyName(username);

    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    });
  } else if (friendRequest == "1") {
    //send friend request
    const from = params.get("from");
    const to = params.get("to");

    console.log(from, to)

    try {
      const res = await sendFriendRequest(from, to);
      return new Response(JSON.stringify(res));
    } catch (err) {
      console.log(err);
    }

    return new Response("Error");
  } else if (cancelFriendRequest == "1") {
    //cancel friend request
    const from = params.get("from");
    const to = params.get("to");

    try {
      const user = await deleteFriendRequest(from, to);

      const {solicitudes, _id} = user


      return new Response(JSON.stringify({solicitudes,_id}));
    } catch (err) {
      console.log(err);
    }
    return new Response("Error");
  } else if (relation == "1") {
    //get relation from 2 users
    const from = params.get("from");
    const to = params.get("to");

    try {
      const res = await getRelationFromUsers(from, to);
      return new Response(JSON.stringify(res));
    } catch (err) {
      console.log(err);
    }
    return new Response("Error");
  } else if (friendReqList == "1") {
    //get friend request list by username
    const username = params.get("userName");

    try {
      //console.log(username)
      const user = await Usuario.findOne({ nombre: username })


      const {solicitudes} = user

      return new Response(JSON.stringify(solicitudes));
    } catch (err) {
      return new Response(err);
    }
    
  }else if(getIdByName=="1"){
    //GET ID BY NAME
    const username = params.get("username")

    console.log("checkpoint" , username)

    try{const userId = await getUserIdByName(username)
    return new Response(userId.toString());
    }catch(err){console.log(err);return}

  }else if(acceptFR=="1"){

    const from = params.get("from")
    const to = params.get("to")

    try{

      await addFriend(from, to)

      return new Response("Added friend")

    } catch (err) {
      console.log(err)
    return new Response(err)}

  }

  return;
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body.hello);
  return new Response("ok");
}
