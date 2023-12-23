import Usuario from "../../db/models/userSchema"
import { getUserbyName } from "./usuario"

export const sendFriendRequest = async (from, to) => {

    if(from == null || to == null) {
        return new Error("Must include both ids")
    }

   

    try {
        const receptor = await Usuario.findByIdAndUpdate(
            { _id: to },
            { $push: { solicitudes: from } },
            { new: true } // This option returns the modified document instead of the original
          )
        return receptor._id
    }catch(err){
        console.log(err)
        return
    }
}

export const getProfilePicByName = async (username) => {

    try {
        const res = await Usuario.findOne({nombre: username})
        return res.foto
    }catch(err){console.log(err)}
    
}


export const commentProfile = async (nombreEmisor, idReceptor, comentario) => {

    try {

        const user = await Usuario.findOne({nombre: nombreEmisor})

        const date = new Date()

        const comentarioFinal = {
            nombre: user.nombre,
            profilePicture: user.foto,
            comentario: comentario,
            fecha: date.toString()
        }

        const res = await Usuario.findByIdAndUpdate({ _id: idReceptor },
             { $push: {comentarios: comentarioFinal}}, {new:true})

        return res

    } catch ( err ) {
        console.log(err) }

}

export const addFriend = async (username1, username2) =>{

    //add delete from request friends after accepting the friend request

    try {
        await Usuario.findOneAndUpdate({ nombre: username1 }, {$push: {amigos: username2}},{new:true})
        await Usuario.findOneAndUpdate({ nombre: username2 }, {$push: {amigos: username1}},{new:true})
        console.log("controllers/hellpers: usuario agregados como amigos")
    } catch (err) {
        console.log(err) 
    }
    return
}

/*
const addNotifications = async (toUserId, fromUserId)=>{
    try {
        await Usuario.findByIdAndUpdate({_id: toUserId},{ $push:{solicitudes: fromUserId}})
    }catch(err){console.log(err)}
    return ``
}*/

export const deleteFriendRequest = async (from, to) => {

    console.log(`Borrando solicitud de${from} hacia ${to}`)
    try {

    const {notificaciones} = await Usuario.findByIdAndUpdate({_id:to}, {$pull:{solicitudes: from}},{new:true})
    
    const res = notificaciones.includes(from)
    return from

    } catch(err) {
        console.log(err)
    }
    return "error en helpers DELETE FRIEND REQUEST"

}

export const deleteFriend = async (from, to) => {

    try {
            await Usuario.findByIdAndUpdate({_id:from},{$pull:{amigos:{to}}})
    }catch(err){console.log(err)}

    return
}

export const notificarFriendRequest = (from, to) => {

}

// export const borrarComentarios = async (from) => {

//     const Nombre =  'Juan Smith'

//     try { await Usuario.findByIdAndUpdate({_id: from},{$set: {comentarios: []}})
//     console.log("comentario eliminado")
//     return
// }catch(err){console.log(err)}
    
// }

// borrarComentarios("656ffffb480ecb0a104f960f")
