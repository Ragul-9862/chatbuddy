import moment from 'moment/moment'
import React, { forwardRef } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../Firebase/Firebase'

 const Messages = forwardRef (({sender,message,time},ref)=> {
    const [user] = useAuthState(auth)
  return (
    <div ref={ref} className={`${sender === user?.displayName ?
    'relative w-fit min-w-[120px] bg-blue-400 p-2 rounded-lg ml-auto mt-8 rounded-tr-none'
    :
    'relative w-fit min-w-[120px] bg-gray-400 p-2 rounded-lg mt-8 rounded-tl-none'
    }`}>
        <p className='text-xs font-semibold absolute -top-5'>{sender}</p>
        <p>{message}</p>
        <p className='text-xs text-right font-semibold rounded-tl-none'>{moment(time).format("LT")}</p>
    </div>
  )
})
export default Messages