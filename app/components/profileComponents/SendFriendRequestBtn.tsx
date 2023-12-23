import React from 'react'
import SvgSendFriendRequest from '../../svg/SvgSendFriendRequest'

export default function SendFriendRequestBtn({handleSendFriendRequest}) {
  return (
    <button onClick={handleSendFriendRequest}><div className="flex border border-gray-500 p-1 rounded-md items-center gap-1 bg-slate-100"> 
            <div>
              <SvgSendFriendRequest />
            </div>
            <div className="w-[110px] text-sm">Enviar solicitud de amistad</div> 
        </div></button>
  )
}
