"use client"
import React from 'react'
import axios from 'axios'

export default function AdminTools() {



    const handleSendAllFR = async () => {
        try{
            
            await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/admin?sendAllFR=1`)

        }catch(err){console.log(err)}

    }
    const handleRemoveAllFR = async () => {
        try{
            
            await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/admin?removeAllFR=1`)

        }catch(err){console.log(err)}

    }

  return (
    <div className='z-5 fixed right-[50px] bottom-[30px] w-[300px] h-[300px] border border-black flex flex-col gap-2 px-5'>
          <button className='border p-1 h-fit border-gray-700 mt-2 rounded hover:bg-gray-400' onClick={handleSendAllFR}>Send all users a friend request</button>
          <button className='border p-1 h-fit border-gray-700 mt-2 rounded hover:bg-gray-400' onClick={handleRemoveAllFR}>Remove all users friend request</button>
          </div>
  )
}
