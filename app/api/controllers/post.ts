import Post from "../../db/models/postSchema";
import Usuario from "../../db/models/userSchema"
import {connectDB} from "../../db/mongoose";

type Body ={
    titulo: String,
    foto: String,
    descripcion: String,
    autor:String,
    categoria: String,
    thumbnail: String}


export async function crearPost(body:Body) {

    const {titulo, descripcion, autor, categoria,thumbnail,foto} = body

    const nuevoPost = new Post({titulo, descripcion, autor, categoria, comentarios: [], thumbnail, foto});

    try {

        var res = await nuevoPost.save()
        const totalPost = await Post.countDocuments({ autor: autor });
        await Usuario.findOneAndUpdate({nombre: autor},{totalPosts: totalPost})
        
    } catch(err){console.log(err)}
    
    return res

}

export async function getPosts(){
const res = await Post.find()
return res
}


export async function getSinglePost(id){
try{
    const res = await Post.findById({_id: id})
    return res
} catch (err){console.log(err)}
}

export async function comentarPost(id, comentario, autor) {

    const date = new Date().toLocaleString()
    const comentar = { comentario, autor, date}

    try { 
        const res = await Post.findByIdAndUpdate(
            { _id: id },
            { $push: {comentarios: comentar}}, {new:true})
    }catch(err){console.log(err)}
    return
}
