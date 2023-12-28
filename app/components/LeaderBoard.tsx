import React from 'react'
import { getTopUsers } from '../api/controllers/helpers'
import SvgGrapes from '../svg/SvgGrapes'

export default async function LeaderBoard() {

  const usuarios = await getTopUsers()

  return (
    <div className='bg-black/10 w-[330px] h-[310px] rounded-md border border-gray-500 text-black text-center py-2 shadow-md justify-center flex flex-col items-center gap-2'>
      <p className='text-2xl font-light'>
        Top usuarios
      </p>
      {
        usuarios.map((u, index) =><div className='flex items-center gap-2'><div ><span className='text-black font-semibold font-mono text'>{index+1}</span></div><div className=' flex overflow-hidden rounded-md justify-between h-[40px] w-[230px] items-center bg-green-400/20 border border-gray-400 hover:border-black transition-all'>
          <div className='flex'><img className='w-[38px] h-[38px] bg-white/50 ' src={u.foto}/>
          <span className='text-md font-lightbold items-center flex pl-2 font-sans font-semibold'>
          {u.nombre}
          </span></div>
          <div className="flex items-center border-l px-2 font-semibold border-gray-400 bg-green-700  text-white h-full"><div>{u.uvas}</div></div>
        </div></div>)
      }
      
    </div>
  )
}