import { getPosts} from "../../api/controllers/post";
import SinglePost from "../../components/SinglePost";
import Link from "next/link";

export default async function Posts() {

    const posts = await getPosts()

  return (<div className="h-full bg-slate-500 text-center">
    <div className="py-10 text-2xl text-white flex justify-center gap-8">
        <div>
        Mostrando las ultimas publicaciones creadas por la comunidad!
        </div>
        <Link className="border border-white rounded p-1" href={`${process.env.NEXT_PUBLIC_APP_URL}/blog/nuevo`}>
            Crear publicacion
        </Link>
        
    </div>
    <div className="flex justify-center pb-10">
    <div className="grid grid-cols-4 justify-center gap-6">
    {posts.map((p)=>{
        const fecha = p.createdAt
        const fechaFormateada = new Date(fecha)
        const fechaString = `${fechaFormateada.getDate()}/${fechaFormateada.getMonth()+1}/${fechaFormateada.getFullYear()}`
        const thumbnail = p.thumbnail
        return (<SinglePost titulo={p.titulo} autor={p.autor} fecha={fechaString} thumbnail={thumbnail} pid={p._id} />)})}
    </div>
    </div>
  </div>);
}
