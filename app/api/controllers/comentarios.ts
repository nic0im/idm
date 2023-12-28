import Comentario from "../../db/models/commentSchema"
import Usuario from "../../db/models/userSchema"


export const getCommentsById = async (id) => {

    try {

       const res = await Comentario.find({objetivoId: id})
       return res

    } catch (err) {
        console.log(err)
        return null}

}

export const comentar = async (loggedUserId, idReceptor, comentario) => {

    try {

        const loggedUser = await Usuario.findById({_id: loggedUserId})

        const comentarioFinal =  new Comentario({
            objetivoId: idReceptor,
            points: 0,
            autor: loggedUser._id,
            autorImg: loggedUser.foto,
            comentario: comentario,
            autorNombre: loggedUser.nombre
        })

        const res = await comentarioFinal.save()
        return res

    } catch ( err ) {
        console.log(err) }

}

export const borrarComentario = async (idComment) => {

    try {
    
        await Comentario.findByIdAndDelete({_id:idComment})
        return "comentario borrado"
    
    } catch (err) {
        console.log(err) }
}


//comentar("658a8328ae8b36efd1f8ae5c","656ffffb480ecb0a104f960f","¡Bienvenido a IDMP! Tu conexión con la comunidad de Isla de Maipo. ¡Explora, comparte y disfruta!")