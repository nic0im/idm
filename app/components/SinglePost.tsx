import Link from "next/link";
export default function SinglePost({ titulo, autor, fecha, thumbnail, pid }) {

  return (
  <div className="flex flex-col">
    <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/blog/posts/${pid}`}>
    <img className="shadow-md bg-white w-[250px] h-[200px] flex overflow-hidden" src={thumbnail} />
    <div className="whitespace-normal line-clamp-2 w-[250px] pt-2 h-[65px] font-semibold">
          {titulo}
        </div>
    </Link>
    <div className="flex font-light">{fecha}</div>
    <div className="text-black bg-green-400/50"><Link href={`${process.env.NEXT_PUBLIC_APP_URL}/perfil/${autor}`}>Autor: <span className=" font-semibold">{autor}</span></Link></div>
  </div>
  );
}
