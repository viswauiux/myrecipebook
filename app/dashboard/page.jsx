'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
const page = () => {
    const {data:session}=useSession()
    console.log(session);
  return (
    <div>{session?.user?.email}
    <button onClick={()=>signOut()}>Logout</button>
    </div>
  )
}

export default page