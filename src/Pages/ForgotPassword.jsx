import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../Services/operations/authAPI'
import { BiArrowBack } from 'react-icons/bi'

const ForgotPassword = () => {

  const [emailSend , setEmailSend] = useState(false);
  const [email ,setEmail] = useState("");
  const {loading} = useSelector( (state) => state.auth);
  const dispatch = useDispatch();

  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email ,setEmailSend));
  }

  return (
    <div className='h-screen w-screen flex justify-center mt-[-50px]  text-white'>
      {
        loading ? (
          <div> </div>
        ) : (
          <div className='flex flex-col justify-center max-w-[512px] p-8 gap-5'>

            <h1 className='text-3xl w-full text-richblack-25 font-semibold'>
              {
                !emailSend ? "Reset your password" : "Check your email"
              }
            </h1>
            <p className='text-richblack-200'>
              {
                !emailSend ? `Have no fear. We’ll email you instructions to reset your password. 
                If you dont have access to your email we can try account recovery`
                : `We have sent the reset email to ${email}`
              }
            </p>

            <form onSubmit={handleOnSubmit} 
              className='flex flex-col gap-3'>
              {
                !emailSend && (
                  <label className='flex flex-col gap-2'>
                    <p>Email Address <sup className='text-[#EF476F] pt-3'>*</sup></p>

                    <input 
                      required
                      type="email" 
                      name={email}
                      value={email}
                      onChange={ (e) => setEmail(e.target.value)}
                      placeholder='Enter your email address'
                      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                      
                  </label>
                )
              }

              <button type='submit'
                className='p-3 bg-[#FFD60A] text-black font-semibold rounded-md'
              >
                {
                  !emailSend ? "Reset password ": "Resend email"
                }
              </button>

            </form>

            <div >
              <Link to={"/login"} className='flex gap-3 items-center mt-3'>
                <BiArrowBack/>
                <p>Back to login</p>
              </Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ForgotPassword
