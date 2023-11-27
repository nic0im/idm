import React from 'react'

export default function LeaderBoard() {

  const sampleUsers = [{nombre: "Juan"}, {nombre: "Maria"}, {nombre: "Nicolas"}, {nombre:"Lucas"}, {nombre:"Don Nelson"}]
  
  return (
    <div className='bg-white/60 w-full h-[500px] text-black text-center py-4 border border-black shadow-md'>
      <p className='font-bold text-2xl'>
        Top colaboradores
      </p>
      {
        sampleUsers.map(u => <div className=' flex border-2 border-gray-600 rounded-md h-[60px] mt-5 mx-2'>
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