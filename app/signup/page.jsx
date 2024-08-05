'use client'


import SignupForm from '@components/SignupForm';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const signup = () => {

    

    const route = useRouter()
    const [success,setScuccess]=useState(true)
    const [userForm,setUserform]=useState({fullname:"",email:"",password:""})
    const submitHandler = async(e) =>{
        e.preventDefault();
        console.log(e);
    
        try {
            const response = await fetch("/api/signup", {
              method: "POST",
              body: JSON.stringify({
                email: userForm.email,
                fullname: userForm.fullname,
                password: userForm.password,
              }),
            });
      
            if (response.ok) {
                setScuccess(prev=>!prev)
            }
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
        <SignupForm backHandler={backHandler} setUserform={setUserform} userForm={userForm} submitHandler={submitHandler}/>
        :<>
        <div>
        <h1>Registered Succesfully</h1>
        <button onClick={backHandler} className='w-full border-[1px] rounded-md bg-cyan-500 py-2 text-white'>Back</button>
        </div>
        </>
    } 
    </div>
    </>
  )
}

export default signup