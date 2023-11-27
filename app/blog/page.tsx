import React from 'react'
import Header from '../components/Header'
import LeaderBoard from '../components/LeaderBoard'

export default function welcome() {
  return (
    <div className='flex flex-col bg-gray-500  h-full items-center text-white'>
      <Header />
     <div className=' h-[550px] w-screen flex justify-center mt-[40px]'>
      <div className=' items-center flex  gap-[100px]'>
        
        <div className=' h-[350px] items-center flex w-[800px] bg-green-900/80 text-3xl font-sans px-10 font-light'>
          <p>Desde rincones pintorescos y atracciones turísticas, hasta datos útiles para emprendedores locales, nuestro blog es tu guía completa para explorar y disfrutar de Isla de Maipo.</p>
        </div>
        <div className=' h-full items-center flex w-[400px]'>
          <LeaderBoard/>
        </div>
      </div>

     </div>
    </div>
  )
}
