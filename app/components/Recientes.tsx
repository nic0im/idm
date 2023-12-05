import React from "react";

export default function Recientes() {
  return (
    <div className="flex flex-col mb-5">
      <div className="text-4xl font-bold">
        Recientes
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
