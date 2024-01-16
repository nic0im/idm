import React from 'react'
import SvgTicket from '../../svg/SvgTicket'
import SvgCross from '../../svg/SvgCross'

export default function SingleNotification({solicitud, handleAccept, handleReject}) {
    console.log(solicitud)
  return (
    <div className=' py-1 flex flex-col gap-1 border border-gray-500/30 bg-gray-100 rounded-md'>
        <div className='text-sm font-semibold'>
            Solicitud de amistad:
        </div>
        <div className='flex justify-center items-center gap-5 p-1'>
            <div className='flex justify-center gap-1 bg-gray-300 pr-2 rounded md overflow-hidden'>
            <img src={solicitud.foto} className='h-[30px] w-[30px]'/>
            <div className='min-w-[160px] max-w-[160px]'>
                {solicitud.nombre}
            </div>
            </div>
            
            <div className='flex gap-1 items-center'>
                <button className='h-[25px] flex items-center' onClick={()=>{handleAccept(solicitud.id)}}>
                <SvgTicket />
                </button>
                <button className='h-[30px] flex justify-center items-center' onClick={()=>{handleReject(solicitud.id)}}>
                <SvgCross/>
                </button>
            </div>
            
             
        </div>
        
    </div>
  )
}
