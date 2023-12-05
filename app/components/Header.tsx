"use client";
import React from "react";
import HeaderNav from "../svg/HeaderNav";
import { useState } from "react";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react"
import Link from "next/link";
import { useEffect } from "react";

export default function Header({ Session: Session }) {
  const [session, setSession] = useState(Session);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    console.log(session);
  }, [showMenu]);

  return (
    <div className="h-[100px] bg-green-500/60 shadow-sm text-white w-screen flex items-center text-6xl font-lightbold justify-between px-[100px] relative">
      <div>
        <HeaderNav />
      </div>
      <div className="flex gap-2 items-center">
        <img
          src="https://i.ibb.co/3BN7qFy/OIG-removebg-preview.png"
          className="h-[70px] mt-2 w-[50px]"
        />
        <h1>Isla de maipo</h1>
      </div>

      {session ? (<>
        <button className=" h-[40px] gap-5 text-xl flex justify-between pl-2 items-center bg-black/50 border border-gray-300/10 shadow-sm  relative" onClick={()=>{setShowMenu(!showMenu)}}>
          <div>{session?.user?.name}</div>
          <div className=" w-[40px] h-[40px] overflow-hidden">
            <img src={session?.user?.image} />
          </div>
          {showMenu ? (<div className=" border absolute -inset-x-24 -bottom-[140px] w-[250px] bg-green-800/50 text-center">
          
          <div className="border-b border-white py-2 hover:bg-green-900">
            Perfil
            </div>
            <div className="border-b border-white py-2 hover:bg-green-900">
            Amigos
            </div>
          <button className=" py-2 hover:bg-green-900 w-full" onClick={()=>{signOut()}}>
            Cerrar sesion
            </button>

        </div>):(<></>)}
        </button>
        
        </>
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
