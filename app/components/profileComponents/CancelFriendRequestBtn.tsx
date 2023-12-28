import React from 'react'

export default function CancelFriendRequestBtn({handleCancelFriendRequest}) {
  return (
    <button onClick={handleCancelFriendRequest}><div className="flex border p-2 rounded-md items-center gap-1 bg-green-300/20 text-gray-800 font-semibold border-gray-400 hover:border-gray-800"> 
    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>
</div>
    <div className="w-[110px] text-sm">Cancelar solicitud</div> 
</div></button>
  )
}
