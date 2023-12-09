export default function Profile() {
  return (
    <div className="border border-gray-400 w-[800px] flex align-middle items-center gap-5 px-4 py-4">
      <div className="flex flex-col gap-4">
        <div className="border border-red-400 h-[150px] w-[150px]">img</div>
        <div>uva points</div>
      </div>
      <div className="border border-blue-600 h-full w-full flex flex-col py-2">
        <div className=" w-full border-red-300 border py-2 font-semibold">
          Nombre de usuario
        </div>
        <div className="w-full mt-1 border-blue-400 h-full flex flex-col gap-2">
          <div className="border-b w-full items-start flex px-4 py-1">Joined:</div>
          <div className="border-b w-full items-start flex px-4 py-1">Last seen:</div>
          <div className="border-b w-full items-start flex px-4 py-1">Total friends:</div>
          <div className="border-b w-full items-start flex px-4 py-1">Publicaciones:</div>
        </div>
      </div>
    </div>
  );
}
