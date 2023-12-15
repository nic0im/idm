import React from 'react'
import SvgTicket from '../svg/SvgTicket'
import SvgCross from '../svg/SvgCross'

export default function SingleNotification() {
  return (
    <div className=' py-1 flex flex-col gap-1 border border-black'>
        <div className='text-sm font-semibold'>
            Tienes una nueva solicitud de amistad:
        </div>
        <div className='flex justify-center bg-gray-300/50 items-center gap-5 p-1'>
            <div className='flex justify-center gap-1  px-3'>
            <div className=' h-[30px] w-[30px] border border-black'>
                pp
            </div>
            <div>
            Nicooow 
            </div>
            </div>
            
            <div className='flex gap-1 items-center'>
                <button className='h-[25px] flex'>
                <SvgTicket />
                </button>
                <button className='h-[30px] flex justify-center items-center'>
                <SvgCross/>
                </button>
            </div>
            
             
        </div>
        
    </div>
  )
}
