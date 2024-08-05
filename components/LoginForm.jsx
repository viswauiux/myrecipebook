import React from 'react'

const LoginForm = ({backHandler,setUserform,userForm,submitHandler}) => {
  return (
    <div className='border-2 p-5 flex-col justify-center items-center rounded-lg w-1/4 border-cyan-500'>
    <h1 className='text-center text-2xl font-bold'>Login</h1>
    <form className='flex-col flex gap-6' onSubmit={submitHandler} >
     
        <div className='flex flex-col'>
            <label htmlFor="email">E-Mail</label>
            <input type="text" id='email' className='border-2' onChange={(e)=>setUserform({...userForm,email:e.target.value})}/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="password">Password</label>
            <input type="text" id='password' className='border-2' onChange={(e)=>setUserform({...userForm,password:e.target.value})}/>
        </div>
        <button className='w-full border-[1px] rounded-md bg-cyan-500 py-2 text-white'>Login</button>
    </form>
    <button onClick={backHandler} className='w-full border-[1px] rounded-md bg-cyan-500 py-2 text-white'>Back</button>

</div>
  )
}

export default LoginForm