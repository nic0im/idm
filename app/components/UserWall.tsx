import WallComment from "./WallComment";

export default function UserWall() {
  return (
    <div className="border broder-gray-400 w-fit h-auto flex gap-2 justify-between mt-3">
      <div className="flex flex-col gap-2">
      <WallComment/>
      <WallComment/>
      <WallComment/>
      <WallComment/>
      </div>
      <div className="border border-black w-[400px] h-[fit]">

      </div>
      
    </div>
  );
}
