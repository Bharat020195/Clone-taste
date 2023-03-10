import React from 'react'


export default function Signin() {


  return (
    <div class='hidden border-4 border-gray-50'>
        <div class='bg-white items-center text-center'>
     <div class='text-3xl pt-10 text-center pb-12'> Sign In</div>
     <div class='text-start pl-5'>email</div>

    <div> <input type='email' value='jamie@example.com' class='w-[400px] h-10 border-2 border-gray-200 rounded-lg' /></div>
    <div class='pt-6 '> <button class='bg-pink-400 w-[400px] h-10 rounded-lg'>Continue</button></div>
     </div>
     <div class='flex justify-center bg-white pt-4 space-x-1 pb-6 '><div>Don't have an account?</div> <div class='text-pink-400 '> Sign up</div></div>
    </div>
  )
}
