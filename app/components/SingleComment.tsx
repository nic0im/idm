import React from 'react'

export default function SingleComment({c}) {
  return (
    <div>
    <div className='flex border border-gray-400'>
        <div className='border w-[90px] h-[90px]'>
            pp
        </div>
        <div className='w-full h-[90px] flex  flex-col'>
            <div className='text-start flex border border-right w-full pl-2 gap-4'>
                {c.autor}     <span className='text-gray-400'>{c.date}</span>
            </div>
            <div className='border h-full pl-2 pt-1 text-gray-800'>
            {c.comentario}
            </div>
        </div>
    </div>
    </div>
  )
}
