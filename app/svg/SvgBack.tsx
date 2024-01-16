"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SvgBack({className}) {

    const router = useRouter()

    const goBackHandler = () => {

        router.back()

    }

  return (
    <button className={className} onClick={goBackHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full p-1">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
    

  )
}
