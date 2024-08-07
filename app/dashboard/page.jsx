'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
const page = () => {
    const {data:session}=useSession()
    console.log(session);
  return (
    <div>{session?.user?.email}
    
    <button onClick={()=>signOut()}>Logout</button>
    <Link href={'/createrecipe'}>Create Recipe</Link>
    </div>
  )
}

export default page