
import HomeItem from "./components/HomeItem"
import { getPosts} from "./api/controllers/post";
import SinglePost from "./components/SinglePost";
import Link from "next/link";


export default async function Home() {
  const posts = await getPosts()

  return (
  <div className="bg-gray-300 h-full">
  <div className="h-full text-center">
    <div className="pt-10 pb-5 text-2xl text-gray-600 flex justify-center gap-8">
        <div className=" font-sans font-semibold">
        Mostrando las ultimas publicaciones creadas por la comunidad!
        </div>
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
  </div>
  </div>
  )
}
