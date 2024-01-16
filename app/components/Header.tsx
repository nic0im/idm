"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import Link from "next/link";
import SvgBell from "../svg/SvgBell";
import SvgBack from "../svg/SvgBack";
import NotificationsMenu from "./headerComponents/NotificationsMenu";
import SvgGrapes from "../svg/SvgGrapes";
import { usePathname } from "next/navigation";
import DisplayMenu from "./headerComponents/DisplayMenu";


export default function Header({ Session: Session }) {  

  const path = usePathname()

  const [session, setSession] = useState(Session);
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false)

  const [solicitudes, setSolicitudes] = useState([])
  const [loggedUserId, setLoggedUserId] = useState("")

  useEffect( () => {

    if(session){
      const getSolicitudes = async () => {

        try {
          await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/users?solicitudes=1&userName=${session?.user?.name}`).then((res)=>{setSolicitudes(res.data);return res.data})
          await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/users?getIdByName=1&username=${session?.user?.name}`).then((res)=>{setLoggedUserId(res.data);return res.data})

        }
        catch (err) {
          console.log(err);
          return}
      }

      getSolicitudes()
      console.log("checkpoint")
 
    }
    

  },[])


  return (
    <div className="h-[80px] bg-gray-100 shadow-lg border-b text-gray-800 w-screen flex items-center text-6xl font-lightbold justify-between px-[100px] relative">
      {path=="/" ? <><SvgBack className="flex justify-center h-[40px] w-[40px] text-transparent rounded-md pr-1" /></>: <SvgBack className="flex justify-center h-[40px] w-[40px] hover:text-green-600 rounded-md pr-1" />}
      <Link className="flex items-center gap-2" href={process.env.NEXT_PUBLIC_APP_URL}>
      <SvgGrapes color="#79c142" height="60px" width="60px"/>
        <div className="flex flex-col items-center">
          <div className="text-5xl font-light text-gray-600">IDMP</div>
          
        </div>
      </Link>

      {session ? (<div className=" flex justify-center items-center gap-2">
        <div className="h-[40px] w-[40px] flex rounded relative">
        <button onClick={()=>{setShowNotifications(!showNotifications)}} className="relative">
          <SvgBell/>
          
        </button>
        {showNotifications ? (<NotificationsMenu loggedUserId={loggedUserId} solicitudes={solicitudes}/>) :(<></>)}
        </div>
        <button className=" h-[40px] gap-1 text-xl flex border border-gray-600 rounded justify-between pl-2 items-center shadow-md " onClick={()=>{setShowMenu(!showMenu)}}>
          <div className="h-full items-center flex">{session?.user?.name}</div>
          <div className=" w-[38px] h-[38px] overflow-hidden relative">
            <img src={session?.user?.image} />
          </div>
          
        </button>
        {showMenu ? (<DisplayMenu session={session}/>):(<></>)}
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
