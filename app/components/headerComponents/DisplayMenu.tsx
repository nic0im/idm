import React from 'react'
import Link from 'next/link'
import { signOut } from "next-auth/react"
import SvgCloseSession from '../../svg/SvgCloseSession'
import SvgUsers from '../../svg/SvgUsers'
import SvgUser from '../../svg/SvgUser'
export default function DisplayMenu({session}) {
  return (
    <div className=" border border-gray-500 rounded-md absolute top-16 right-24 w-fit  bg-gray-200/80 z-10 transition-all">
          
            <Link className="border-b border-gray-500  py-2 gap-1 items-center w-full justify-end flex px-2 hover:bg-green-500/30 transition-all" href={`/perfil/${session.user.name}`}>
                <span className='text-xl '>Perfil</span>
                <SvgUser className={"h-7"}/>
            </Link>
            <Link className="border-b border-gray-500  py-2 w-full text-end flex justify-end gap-1 px-2 items-center hover:bg-green-500/30 transition-all" href={`/perfil/${session.user.name}/amigos`}>
                <span className='text-xl '>Amigos</span>
                <SvgUsers className={"h-6"}/>
            </Link>
          <button className=" py-2 w-full text-end flex justify-end pl-2 pr-1 items-center hover:bg-red-500/30 transition-all" onClick={()=>{signOut()}}>
                <span className='text-xl '>Cerrar sesion</span>
                <SvgCloseSession className={"h-7"}/>
            </button>

        </div>
  )
}
