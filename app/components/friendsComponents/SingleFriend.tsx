import React from 'react'
import SvgTrashCan from '../../svg/SvgTrashCan'

export default function SingleFriend({a, classN}) {

    const userObj = JSON.parse(a)

    return(
    <div className={`${classN} w-[500px] h-[120px] flex bg-gray-200 rounded-md shadow-md`}>
        <img className=' w-[120px]' src={userObj.foto}/>
        <div className='flex flex-col w-full'>
            <div className='text-center text-xl font-light'>{userObj.nombre}</div>
            
        </div>
        
    </div>)
}
