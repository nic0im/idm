import Post from "../../db/models/postSchema";
import {connectDB} from "../../db/mongoose";

type Body ={
    titulo: {type: String},
    thumbnail: {type: String},
    descripcion: {type: String},
    autor:{type: String},
    categoria: {type: String}
}


export default async function crearPost(body:Body) {
    const {titulo, descripcion, autor, categoria} = body
    const nuevoPost = new Post({titulo, descripcion, autor, categoria});
    var res = await nuevoPost.save()
    return res

}