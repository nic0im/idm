import Usuario from "../../db/models/userSchema"
import Post from "../../db/models/postSchema"

export const sendFriendRequest = async (from, to) => {

    if(from == null || to == null) {
        return new Error("Must include both ids")
    }

   

    try {

        const {nombre, foto, _id} = await Usuario.findById({_id:from})

        const date = Date.now()

        const id = _id.toString()
        const solicitud = {nombre, foto, id, date}

        console.log(solicitud)
        const receptor = await Usuario.findByIdAndUpdate(
            { _id: to },
            { $push: { solicitudes: solicitud} },
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



export const addFriend = async (from, to) =>{

    try {

    const user1 = await getProfileInfoById(from)
    const user2 = await getProfileInfoById(to)

    const userFrom = await Usuario.findByIdAndUpdate(from, {$push: {amigos: user2},$pull:{solicitudes:{id: to}}},{new:true})
    const userTo = await Usuario.findByIdAndUpdate(to, {$push: {amigos: user1},$pull:{solicitudes:{id:from}}},{new:true})   

    return [userFrom, userTo]
    } catch (err) {
        console.log(err)
        return 
    }
}

/*
const addNotifications = async (toUserId, fromUserId)=>{
    try {
        await Usuario.findByIdAndUpdate({_id: toUserId},{ $push:{solicitudes: fromUserId}})
    }catch(err){console.log(err)}
    return ``
}*/

export const deleteFriendRequest = async (from, to) => {

    try {

    const user = await Usuario.findByIdAndUpdate({_id:to}, {$pull:{solicitudes: {id: from}}},{new:true})
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


// export const borrarComentarios = async (from) => {

//     const Nombre =  'Juan Smith'

//     try { await Usuario.findByIdAndUpdate({_id: from},{$set: {comentarios: []}})
//     console.log("comentario eliminado")
//     return
// }catch(err){console.log(err)}
    
// }

// borrarComentarios("656ffffb480ecb0a104f960f")


export const getProfileInfoByName = async (username) => {


    try { 

        const usuario = await Usuario.findOne({nombre:username})
        
        const {nombre, foto, createdAt, lastSeen, _id, totalPosts, amigos} = usuario
        const infoUser = { _id, nombre, foto, createdAt, lastSeen, totalPosts, amigos:amigos.length}
        return infoUser

    }catch(err){return null}

}


export const getRelationFromUsers = async (from, to) => {

    try {

        var areFriends = false
        var alreadySent = false

        const userTo = await Usuario.findById(to)
        const {amigos, solicitudes} = userTo

        if(amigos.includes(from)){
            areFriends = true;
        } else if(solicitudes.some(obj => obj.id == from)){
            alreadySent = true;
        }

        const res = {areFriends, alreadySent}
        console.log(res)
        return res
    } catch(err){
        console.log(err)
        return null}
    
 
}


export const getTopUsers = async() => {

     try {

        const usuarios = await Usuario.find().sort({ uvas: -1 }).limit(5);
        
        const finalUsers = usuarios.map(u=>{

            const {nombre,foto, uvas} = u
            return {nombre, foto, uvas}
        })
     return finalUsers
     } catch(err){console.log(err)}
}



// export const createUser = async () => {

//     try {

// //   nombre: {type: String},
// //   foto: {type: String},
// //   email: {type: String},
// //   amigos:{type: Array},
// //   lastSeen: { type: Date },
// //   totalPosts: {type: Number},
// //   solicitudes: {type: Array},
// //   notificaciones:{type: Array},
// //   uvas:{type: Number}

//         const user = new Usuario({nombre:"IDMP",
//                     foto: "https://res.cloudinary.com/derj1jvyk/image/upload/f_auto,q_auto/xtgu6jw1u1obqninblny",
//                     createdAt: new Date(),
//                     lastSeen: new Date(),
//                     totalPosts: 0,
//                     amigos:0})

//         const finalUser = await user.save()
//         console.log(finalUser)
//         return
//     } catch (err) {
//         console.log(err) 
//         return
//     }
// }

// createUser()


export const getUserSolicitudes = async (userId) => {

    try {

    const user = await Usuario.findByIdAndUpdate({_id: userId})
    const {solicitudes} = user
    return solicitudes
    
    } catch (err) {
        console.log(err)
    return}

}


export const getFriendsByName = async (name) => {

    try{

    const wholeUser = await Usuario.findOne({nombre: name})

    const {amigos} = wholeUser

    return amigos 

    }catch(err){console.log(err); return}

}

export const getProfileInfoById = async (id) => {


    try { 

        const usuario = await Usuario.findById({_id:id})
        
        const {nombre, foto, createdAt, lastSeen, _id, totalPosts, amigos} = usuario
        const infoUser = { _id, nombre, foto, createdAt, lastSeen, totalPosts, amigos:amigos.length}
        return infoUser

    }catch(err){return null}

}


export const getPostDestacados = async() => {

    try {

    const posts = await Post.find().limit(5)

    return posts

    }catch(err){
        console.log(err)
    return
}
}