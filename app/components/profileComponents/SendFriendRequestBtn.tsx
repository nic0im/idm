import React from 'react'
import SvgSendFriendRequest from '../../svg/SvgSendFriendRequest'

export default function SendFriendRequestBtn({handleSendFriendRequest}) {
  return (
    <button onClick={handleSendFriendRequest}><div className="flex border p-2 rounded-md items-center gap-1 bg-green-300/20 text-gray-800 font-semibold border-gray-400 hover:border-gray-800"> 
            <div>
              <SvgSendFriendRequest />
            </div>
            <div className="w-[110px] text-sm">Enviar solicitud de amistad</div> 
        </div></button>
  )
}
