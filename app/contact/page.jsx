'use client'

import React, { useState } from 'react'

const ContactUs = () => {

    const [post, setPost] = useState({ email: null, fullname: null , description:null });

  const submitHandler = async (e) =>{
    e.preventDefault();
    console.log(e);

    try {
        const response = await fetch("/api/contactus", {
          method: "POST",
          body: JSON.stringify({
            email: post.email,
            fullname: post.fullname,
            description: post.description,
          }),
        });
  
        if (response.ok) {
          alert("Submitted")
        }
      } catch (error) {
        console.log(error);
      } finally {
        
      }

  }

  return (
    <div>
          <form onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' onChange={e=>setPost({...post,email:e.target.value})} />
            <label htmlFor="fullname">Fullname</label>
            <input type="text" id='fullname' onChange={e=>setPost({...post,fullname:e.target.value})} />
            <label htmlFor="description">Description</label>
            <input type="text" id='description' onChange={e=>setPost({...post,description:e.target.value})}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ContactUs