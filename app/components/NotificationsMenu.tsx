import React from 'react'
import SingleNotification from './SingleNotification'

export default function NotificationsMenu() {
  return (
        <div className=" border-2 border-green-800 absolute right-11 rounded-md -bottom-[201px] w-[350px] bg-gray-200/95 text-center z-10">
          <div className='py-1 text-black text-lg font-bold border-b-2 border-green-800'>
            Notificaciones:
          </div>
            <div className=' border h-[200px] overflow-y-auto text-black text-lg flex flex-col gap-2 pt-2 px-3'>
                    <SingleNotification />
                    <SingleNotification />
                    <SingleNotification />
            </div>
        </div>

  )
}
