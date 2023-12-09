
import {connectDB} from "../../db/mongoose"

import Usuario from "../../db/models/userSchema"

export async function GET(request: Request){
await connectDB()
const users = await Usuario.find()
console.log(users)
return new Response("test")
}

export async function POST(req: Request){
    const body = await req.json()
    console.log(body.hello)
    return new Response("ok")
}