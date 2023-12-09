import React from 'react'

export default function LeaderBoard() {

  const sampleUsers = [{nombre: "Juan"}, {nombre: "Maria"}, {nombre: "Nicolas"}, {nombre:"Lucas"}, {nombre:"Don Nelson"}]
  
  return (
    <div className='bg-white/60 w-[300px] h-[310px] text-black text-center py-2 border border-black shadow-md justify-center flex flex-col items-center bg-gray-100'>
      <p className='font-bold text-2xl'>
        Top usuarios
      </p>
      {
        sampleUsers.map(u => <div className=' flex border-2 border-gray-600 rounded-md h-[40px] mt-2 mx-2 w-[250px]'>
          <div className='w-[60px]  h-[full] bg-white/50'>

          </div>
          <span className='text-lg font-lightbold border items-center flex pl-5'>
          {u.nombre}
          </span>
        </div>)
      }
      
    </div>
  )
}