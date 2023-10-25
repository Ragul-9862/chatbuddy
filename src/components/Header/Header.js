import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../Firebase/Firebase'

export default function Header() {
    const [user] = useAuthState(auth)
  return (
    <div className='flex items-center justify-between p-5 shadow-lg sticky top-0 bg-white z-10'>
        <h1 className='text-3xl font-bold text-blue-400'>MyChatApp</h1>
        <img onClick={() => auth.signOut()} src={user?.photoURL} alt='profile' className='h-10 w-10 rounded-full cursor-pointer' />

    </div>
  )
}