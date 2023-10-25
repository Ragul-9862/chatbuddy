import React from 'react'
import { auth, provider } from '../Firebase/Firebase'
import { signInWithPopup } from 'firebase/auth'

export default function LoginPage() {
  const signInUser = () =>{
    signInWithPopup(auth,provider).catch((err)=> alert(err.message));
  };
  return (
    <div className='text-center mt-72'>
      <h1 className='text-4xl font-bold'>MyChatBuddy</h1>
      <button onClick={signInUser} className='bg-blue-600 text-white text-sm font-bold rounded-lg hover:scale-110 transition-all duration-200 ease-in-out p-3 mt-5'>Sign In With Google</button>
    </div>
  )
}
