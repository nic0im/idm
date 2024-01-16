import React from 'react'
import { getTopUsers } from '../api/controllers/helpers'
import SvgGrapes from '../svg/SvgGrapes'

export default async function LeaderBoard() {

  const usuarios = await getTopUsers()

  return (
    <div className=' w-[330px] h-[310px] rounded-md  text-black py-2 justify-center flex flex-col items-center gap-2'>
      <p className='text-2xl font-light'>
        Top usuarios
      </p>
      {
        usuarios.map((u, index) =><div className='flex items-center gap-2'><div ><span className='text-black font-semibold font-mono text'>{index+1}</span></div><div className=' flex overflow-hidden rounded-md justify-between h-[40px] w-[230px] items-center  border border-gray-600 hover:border-black transition-all'>
          <div className='flex w-full bg-gray-100'><img className='w-[38px] h-[38px]' src={u.foto}/>
          <span className='text-md font-lightbold items-center flex pl-2 font-sans font-semibold  w-full'>
          {u.nombre}
          </span></div>
          <div className="flex items-center border-l px-2 font-semibold border-gray-400   text-black bg-gray-300 h-full"><div>{u.uvas}</div></div>
        </div></div>)
      }
      
    </div>
  )
}