
import {connectDB} from "../../db/mongoose"
import {getUserbyName} from "../controllers/usuario";

import Usuario from "../../db/models/userSchema"

type user = {
    
_id: String,
nombre: String,
foto: String,
email:String,
createdAt: String,
updatedAt: String

}

export async function GET(req: Request): Promise<Response>{
  const params = new URLSearchParams(req.url.split('?')[1]);
  const username = params.get('user')

  const user = await getUserbyName(username)
  console.log(user)
  return new Response(JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req: Request){
    const body = await req.json()
    console.log(body.hello)
    return new Response("ok")
}