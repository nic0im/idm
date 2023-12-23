"use client";

import React from "react";
import HeaderNav from "../svg/HeaderNav";
import { useState } from "react";
import { signOut } from "next-auth/react"
import Link from "next/link";
import { useEffect } from "react";
import Grapes from "../../public/Grapes";
import SvgBell from "../svg/SvgBell";
import SvgBack from "../svg/SvgBack";
import NotificationsMenu from "./NotificationsMenu";


export default function Header({ Session: Session }) {



  const [session, setSession] = useState(Session);
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false)


  return (
    <div className="h-[100px] bg-green-700/90 shadow-sm text-white w-screen flex items-center text-6xl font-lightbold justify-between px-[100px] relative">
      <SvgBack />
      <Link className="flex gap-2 items-center" href={process.env.NEXT_PUBLIC_APP_URL}>
        <Grapes/>
        <h1>Isla de maipo</h1>
      </Link>

      {session ? (<div className=" flex justify-center items-center gap-2">
        <div className="h-[40px] w-[40px] flex bg-black/30 rounded relative">
        <button onClick={()=>{setShowNotifications(!showNotifications)}} className="relative">
          <SvgBell/>
          
        </button>
        {showNotifications ? (<NotificationsMenu user={session.user.name}/>) :(<></>)}
        </div>
        <button className=" h-[40px] gap-5 text-xl flex justify-between pl-2 items-center bg-black/50 border border-gray-300/10 shadow-sm  relative" onClick={()=>{setShowMenu(!showMenu)}}>
          <div>{session?.user?.name}</div>
          <div className=" w-[40px] h-[40px] overflow-hidden">
            <img src={session?.user?.image} />
          </div>
          {showMenu ? (<div className=" border absolute -inset-x-24 -bottom-[140px] w-[250px] bg-green-800/50 text-center z-10">
          
          <Link className="border-b border-white py-2 hover:bg-green-900 w-full justify-center flex" href={`/perfil/${session.user.name}`}>
            Perfil
            </Link>
            <div className="border-b border-white py-2 hover:bg-green-900">
            Amigos
            </div>
          <button className=" py-2 hover:bg-green-900 w-full" onClick={()=>{signOut()}}>
            Cerrar sesion
            </button>

        </div>):(<></>)}
        </button>
        
        </div>
      ) : (
        <Link
          className="text-2xl border border-white p-2 rounded"
          href="http://localhost:3000/api/auth/signin/google"
        >
          {" "}
          Ingresar
        </Link>
      )}
    </div>
  );
}
