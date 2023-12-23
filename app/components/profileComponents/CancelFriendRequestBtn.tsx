import React from 'react'

export default function CancelFriendRequestBtn({handleCancelFriendRequest}) {
  return (
    <button onClick={handleCancelFriendRequest} className='p-1 border border-gray-500'>Cancelar solicitud de amistad</button>
  )
}
