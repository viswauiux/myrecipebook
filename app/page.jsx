
import Link from 'next/link'
import React from 'react'

const page = () => {



  return (
    <div className=' flex-col flex justify-center items-center h-full'>
      <h1>Welcome to Recipe Book</h1>
      <Link href={"/signup"} className='px-4 border-[1px] rounded-md bg-cyan-500 py-2 text-white'>Sign Up</Link>
      <Link href={"/login"} className='px-4 border-[1px] rounded-md bg-cyan-500 py-2 text-white'>Login</Link>
    </div>
  )
}

export default page