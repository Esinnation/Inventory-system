import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
	const [loginerror, setloginerror] = useState("");

  const [formData, setFormData] = useState({
    FirstName:'',
    LastName:'',
		email: "",
		password: "",

	});
  const { email, password,FirstName,LastName } = formData;
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
    <div className='w-screen flex items-center '>
      <div className='w-1/2 bg-[#1195FF] text-white text-center h-screen flex flex-col justify-center items-center space-y-5'>
        <div>
          <h1 className='text-white text-2xl'>Already have an account ?</h1>
          <p className='text-base'>Let’s get you logged in</p>
        </div>
        <Link href={'/login'}>
          <p className='text-xl text-white border border-white rounded-xl px-20 py-3'>Log in</p>
        </Link>
      </div>
      <div className='w-1/2 flex flex-col items-center justify-center space-y-5'>
        <Image src='logo.svg' width={170} height={50} />

        <div>
          <h1 className='text-[#3B3B3B] text-2xl font-bold text-center'>Sign up for an account</h1>
          <p className='text-[#3B3B3B]/70 text-xl font-normal text-center'>Let’s get you set up</p>
        </div>
        <form action="" onSubmit={handleSubmit} className='flex flex-col space-y-5'>
          <div className='flex space-x-3'>
            <div className='flex flex-col space-y-3'>
              <label htmlFor="FirstName" className='text-base text-[#3B3B3B] font-normal '>First Name</label>
              <input 
                type="text" 
                name="FirstName" 
                id="FirstName" 
                value={FirstName}
                onChange={handleChange}
                placeholder='Enter your First Name'
                className=' border border-[#0076A9] rounded-lg px-4 w-[269px] h-[53px] focus:outline-none placeholder-[#3B3B3B]/50 placeholder:text-base'
              />
            </div>
            <div className='flex flex-col space-y-3'>
              <label htmlFor="LastName" className='text-base text-[#3B3B3B] font-normal '>Last Name</label>
              <input 
                type="text" 
                name="LastName" 
                id="LastName" 
                value={LastName}
                onChange={handleChange}
                placeholder='Enter your Last Name'
                className=' border border-[#0076A9] rounded-lg px-4 w-[269px] h-[53px] focus:outline-none placeholder-[#3B3B3B]/50 placeholder:text-base'
              />
            </div>
          </div>
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
            <button className='text-xl text-white bg-[#1195FF] rounded-xl px-32 py-3'>Sign up</button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup