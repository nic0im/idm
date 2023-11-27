"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import HeaderNav from '../svg/HeaderNav'

export default function Header() {
    const path = usePathname()
    

  return (
    <div className='h-[100px] bg-green-500/60 shadow-sm text-white w-screen flex items-center text-6xl font-lightbold justify-between px-[100px]'>
        
            <div>
                <HeaderNav />
            </div>
           <div className='flex gap-4 items-center'>
            <img src="https://i.ibb.co/3BN7qFy/OIG-removebg-preview.png" className='h-[70px] mt-2 w-[50px]'/>
            <h1>Isla de maipo</h1>
          </div>
          <div className='border h-[50px] w-[50px] bg-white'>
            
          </div>
        </div>
        
      
  )
}
