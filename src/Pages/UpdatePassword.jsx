import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'
import {resetPassword} from '../Services/operations/authAPI'

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [fromData , setFromData] = useState({
        password:"",
        confirmPassword:""
    })

    const {password , confirmPassword} = fromData;
    const location = useLocation();

    const {loding} = useSelector( (state) => state.auth);
    const [showPassword ,setShowPassword] = useState(false);
    const [showConfromPassword ,setShowConfromPassword] = useState(false);

    const handleOnChange = (e) => {
        setFromData( (prevData) => (
            {
                ...prevData,
                [e.target.name] : e.target.value,
            }
        ))
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        // dispatch call
        dispatch(resetPassword(password,confirmPassword,token,navigate))
    }
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        {
            loding ? (
                <div className='text-white'>
                    loding..
                </div>
            ) : (
                <div className='flex flex-col justify-center max-w-[512px] p-8 gap-5'>
                    <h1 className='text-3xl w-full text-richblack-25 font-semibold'>
                        Chose new Password
                    </h1>
                    <p className='text-richblack-200'>
                        Almost done. Enter your new password and youre all set
                    </p>
                    <form onSubmit={handleSubmit}
                     className='flex flex-col gap-3'
                    >

                        <label className='flex flex-col gap-2 relative'>
                            <p className='text-richblack-300'>New password <sup className='text-[#EF476F] pt-3'>*</sup></p>
                            <input 
                                type={showPassword ? "text" : "password"}
                                name='password'
                                value={password}
                                onChange={handleOnChange}
                                placeholder='Password'
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                            />
                            <span
                                onClick={ () => setShowPassword( (prev) => !prev)}  
                                className='text-white text-xl absolute right-2 top-12'  
                            >
                                {
                                    showPassword 
                                    ? <AiFillEye/>
                                    : <AiFillEyeInvisible/> 
                                    
                                }
                            </span>
                        </label>

                        <label className='flex flex-col gap-2 relative'>
                            <p className='text-richblack-300'>Confrom new password <sup className='text-[#EF476F] pt-3'>*</sup></p>
                            <input 
                                type={showConfromPassword ? "text" : "password"}
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={handleOnChange}
                                placeholder='confrom Password'
                            
                                className='  bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                            />
                            <span
                                onClick={ () => setShowConfromPassword( (prev) => !prev)}  
                                className='text-white text-xl absolute right-2 top-12'  
                            >
                                {
                                    showConfromPassword 
                                    ? <AiFillEye/>
                                    : <AiFillEyeInvisible/>
                                }
                            </span>
                        </label>

                        <button type='submit'
                            className=' p-3 bg-[#FFD60A] text-black font-semibold rounded-md'
                        >
                            Reset password
                        </button>

                    </form>

                    <div>
                        <Link to={"/login"}  className='flex gap-3 items-center mt-3'>
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

export default UpdatePassword
