
import Usuario from "../../db/models/userSchema"
import {connectDB} from "../../db/mongoose";

export async function getUserbyName(username){
    
    try {
        //await connectDB()
        const user = await Usuario.find({nombre: username})
        return user[0]

    } catch(err) {
        console.log(err)
    }
    
    return
}