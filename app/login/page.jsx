'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import LoginForm from '@components/LoginForm';
import { signIn, signOut } from 'next-auth/react';

const page = () => {
    const route = useRouter()
    const [success,setScuccess]=useState(true)
    const [userForm,setUserform]=useState({email:"",password:""})
    const submitHandler = async(e) =>{
        e.preventDefault();
        try {
            const res = await signIn("credentials",{
                email:userForm.email,password:userForm.password,redirect:false
            });
            if(res.status===200) route.push('/dashboard');
          } catch (error) {
            console.log(error);
          } finally {
          }
    
    }
    const backHandler = () =>{
        route.push('/')
    }
    console.log(userForm);
  return (
    <>
    <div className=" flex justify-center items-center h-full">
    {
        success?
        <LoginForm backHandler={backHandler} setUserform={setUserform} userForm={userForm} submitHandler={submitHandler}/>
        :<>
        <div>
        <h1>Login Success Succesfully</h1>
        <button onClick={backHandler} className='w-full border-[1px] rounded-md bg-cyan-500 py-2 text-white'>Back</button>
        <button onClick={()=>signOut()}>LogOut</button>
        </div>
        </>
    } 
    </div>
    </>
  )
}

export default page