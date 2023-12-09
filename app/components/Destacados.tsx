import React from "react";
import Link from "next/link";

export default function Destacados() {
  return (
    <div className="flex flex-col mb-5">
      <div className="flex justify-between">
        <div className="text-4xl font-bold">
          Destacados
        </div>
        <Link className=" border border-white px-2 flex justify-center items-center bg-green-800/50 rounded" href={`${process.env.NEXT_PUBLIC_APP_URL}/blog/posts`}>
        Ver todos
        </Link>
      </div>
      <div className="w-full flex justify-center gap-8 backdrop-contrast-50 mt-6">
        <div className="border w-[300px] h-[300px] ">post</div>
        <div className="border w-[300px] h-[300px]">post</div>
        <div className="border w-[300px] h-[300px]">post</div>
        <div className="border w-[300px] h-[300px]">post</div>
      </div>
    </div>
  );
}
