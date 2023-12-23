
import Usuario from "../../db/models/userSchema"
import {connectDB} from "../../db/mongoose";

export async function getUserbyName(username){
    
    try {
        //await connectDB()
        const user = await Usuario.findOne({nombre: username})
        return user

    } catch(err) {
        console.log(err)
    }
    
    return
}