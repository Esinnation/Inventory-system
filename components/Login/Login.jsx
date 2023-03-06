import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import ForgotPassword from './ForgotPassword';


function Login() {
  const [showPassword, setShowPassword] = useState(false);
	const [loginerror, setloginerror] = useState("");
	const [forgotpass, setForgotPass] = useState(false);

  const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
  const { email, password } = formData;
  const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

  const changeView = () => {
		setShowPassword((prevState) => !prevState);
	};


  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(formData)
  }
  return (
    <div className='relative'>
      {forgotpass && <ForgotPassword setForgotPass={setForgotPass}/>}
      <div className='w-screen flex items-center  '>
        <div className='w-1/2 flex flex-col items-center justify-center space-y-5'>
          <div>
            <h1 className='text-[#3B3B3B] text-2xl font-bold text-center'>Sign in to your account</h1>
            <p className='text-[#3B3B3B]/70 text-xl font-normal text-center'>Let’s get you logged in</p>
          </div>
          <form action="" onSubmit={handleSubmit} className='flex flex-col space-y-5'>
            <div className='flex flex-col space-y-3'>
              <label htmlFor="email" className='text-base text-[#3B3B3B] font-normal '>Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={email}
                onChange={handleChange}
                placeholder='Enter your Email Address'
                className=' border border-[#0076A9] rounded-lg px-4 w-[548px] h-[53px] focus:outline-none placeholder-[#3B3B3B]/50 placeholder:text-base'
              />
            </div>
            <div className='flex flex-col space-y-3 relative'>
              <label htmlFor="password" className='text-base text-[#3B3B3B] font-normal '>Password</label>
              <input 
                type={showPassword ? "text" : "password"}
                name="password" 
                id="password" 
                value={password}
                onChange={handleChange}
                placeholder='Create a strong password'
                className=' border border-[#0076A9] rounded-lg px-4 w-[548px] h-[53px] focus:outline-none placeholder-[#3B3B3B]/50 placeholder:text-base'
              />
              {showPassword ? (
                <div
                  onClick={changeView}
                  className='absolute right-3 top-10 sm:top-11  cursor-pointer'>
                  <Image alt='' src={"/visibility.svg"} width={22} height={20} />
                </div>
              ) : (
                <div
                  onClick={changeView}
                  className='absolute right-3 top-10 sm:top-11 cursor-pointer'>
                  <Image
                    alt=''
                    src={"/visibility_off.svg"}
                    width={22}
                    height={20}
                  />
                </div>
              )}
            </div>
            <div className='flex items-center justify-center'>
              <button className='text-xl text-white bg-[#1195FF] rounded-xl px-32 py-3'>Sign In</button>

            </div>
          </form>
          <p className='text-[#1195FF] text-base font-bold cursor-pointer' onClick={()=>setForgotPass(true)}>Forgot password?</p>
          <div>
            <p className='text-lg text-[#3B3B3B] ' >
              Don’t Have An Account? 
              <Link href={'/signup'} >
                <span className='text-[#1195FF]'>
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className='w-1/2 bg-[#1195FF] h-screen flex flex-col justify-center items-center'>
          <Image src='LogoWhite.svg' width={170} height={50} />
        </div>
      </div>

    </div>
  )
}

export default Login