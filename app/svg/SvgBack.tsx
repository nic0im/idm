"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SvgBack() {

    const router = useRouter()

    const goBackHandler = () => {

        router.back()

    }

  return (
    <button className="flex justify-center h-[40px] w-[40px] bg-black/30 rounded-md pr-1" onClick={goBackHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full p-1">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
    

  )
}
