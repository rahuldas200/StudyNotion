import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import OtpInput from 'react18-input-otp';
import { Link, useNavigate } from 'react-router-dom';
import { signUp , sendOtp } from '../Services/operations/authAPI' 
import { BiArrowBack , BiReset } from 'react-icons/bi'
 

const VarifyEmail = () => {

    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // dispathch
    const {loading ,signupData} = useSelector( (state) => state.auth);

    useEffect( () => {
        if(!signupData){
            navigate("/signup");
        }
    },[])

    const handleOnsubmit = (e) => {
        e.preventDefault();
        // dispatch
        const {
            firstName,
            lastName,
            email,
            password,
            conformPassword,
            accountType           
        } = signupData;

        dispatch(signUp(accountType,firstName,lastName,email,password,conformPassword,otp,navigate));
    }
  return (
    <div  className='h-screen w-screen flex justify-center items-center'>
      {
        loading 
        ? (
            <div>
                Loding...
            </div>
        ) : (
            <div className='flex flex-col justify-center max-w-[512px] p-8 gap-5  '>
                <h1 className='text-3xl w-full text-richblack-25 font-semibold'>Verify Email</h1>
                <p className='text-richblack-200 ring-richblack-700'>A verification code has been sent to you. Enter the code below</p>
                <form onSubmit={handleOnsubmit}
                    className='flex flex-col gap-3 bg-richblack-700'
                >
                    <div className=''>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                        containerStyle={'flex justify-between mb-3'}
                        inputStyle={{
                            border: "1px solid transparent",
                            borderRadius: "8px",
                            width: "54px",
                            height: "54px",
                            fontSize: "20px",
                            color: "#021f37",
                            fontWeight: "600",
                            caretColor: "blue",
                        }}
            
                        
                        
                    />
                    </div>
                    <button type='submit'
                        className='p-3 bg-[#FFD60A] px-0 text-black font-semibold rounded-md'
                    >
                        verify email
                    </button>
                </form>

                <div className=' flex justify-between text-blue-100'>
                    <Link to={"/login"}
                        className='flex gap-3 items-center'
                    >
                        <BiArrowBack/>
                        <p>Back to login</p>
                    </Link>

                    <button
                        className='flex gap-3 items-center'
                        onClick={ () => dispatch(sendOtp(signupData.email))} 
                    >
                        <BiReset/>
                        Resent
                    </button>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default VarifyEmail
