
import Usuario from "../../db/models/userSchema"

// export default async function deleteAllFriendRequest() {

//     console.log("checkpoint edit all users")

//     try {
//         const usuarios = await Usuario.find()
        
//         usuarios.map(async (u) => {
//             await Usuario.findByIdAndUpdate({_id: u._id},{solicitudes:[]})
//             console.log(u.nombre)
//         })
//     return
//     }catch(err){console.log(err)}
//     return
// }