export default function SinglePost({ titulo, autor, fecha }) {
  return (
    <div className="flex flex-col text-white text-center">
      <div className="border border-red-500 bg-white w-[250px] h-[200px] flex"></div>
      <div className="flex flex-col">
        <div className="whitespace-normal line-clamp-2 w-[250px] pt-2 h-[65px] font-semibold">
          {titulo}
        </div>
        <div className="flex font-light">{fecha}</div>
        <div className="text-black bg-green-300/50">Autor: <span className=" font-semibold">{autor}</span></div>
      </div>
    </div>
  );
}
