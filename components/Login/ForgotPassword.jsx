import Image from 'next/image';
import React, { useState } from 'react'

function ForgotPassword({setForgotPass}) {
  console.log(setForgotPass)
  const [Email, setEmail] = useState('');
  const handleChange = (e) => {
		setEmail((prevState) => e.target.value);
	};
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(Email)
  }
  return (
    <div className='absolute w-screen h-screen flex items-center z-50  duration-1000 ease-in justify-center bg-[#3B3B3B]/25'>
      <div className=' relative bg-white text-center rounded-2xl flex flex-col items-center justify-center space-y-12 px-24 py-24'>
        <div className='absolute top-5 right-5 cursor-pointer  ' onClick={()=>setForgotPass(false)}>
          <Image src='close.svg' width={24} height={24} />

        </div>
        
        <div>
            <h3 className='text-[#333030] text-2xl font-medium mb-4'>Forgot your password?</h3>
            <p className='text-[#A7A8AA] text-base max-w-[300px]'>Type your email, we will send you verification code via email</p>
        </div>
        <form action="" className='flex flex-col space-y-12' onSubmit={handleSubmit}>
        <input 
                type="email" 
                name="Email" 
                id="Email" 
                value={Email}
                onChange={handleChange}
                placeholder='Email'
                className=' border border-[#0076A9] rounded-lg px-4 w-[434px] h-[63px] focus:outline-none placeholder-[#3B3B3B]/50 placeholder:text-base'
              />
              <div>
                <button className='text-xl text-white bg-[#1195FF] rounded-xl px-12 py-4'>Reset password</button>

              </div>

        </form>
      </div>
    </div>
  )
}

export default ForgotPassword