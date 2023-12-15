import Usuario from "../../db/models/userSchema"

export const sendFriendRequest = async (emisorId, receptorId) => {

    if(emisorId == null || receptorId == null) {
        return new Error("Must include both ids")
    }

    try {
        const receptor = await Usuario.findByIdAndUpdate(
            { _id: receptorId },
            { $push: { solicitudes: emisorId } },
            { new: true } // This option returns the modified document instead of the original
          )
        console.log(receptor)
    }catch(err){
        console.log(err)
        return
    }
    return
}

