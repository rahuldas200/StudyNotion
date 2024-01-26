import React, { useState } from 'react'
import { BiArrowBack} from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {RiDeleteBin5Line} from 'react-icons/ri'
import SettingsProfileUpdate from './SettingsProfileUpdate';

const Settings = () => {

    const {user} = useSelector( (state) => state.profile);
    const [showCurrentPassword , setShowCurrentPassword] = useState(false);
    const [showNewPassword , setShowNewPassword] = useState(false);

   

  return (
    <div className='text-white pb-7'>

        <div className='py-6 w-full pr-32 pl-6'>
            <div className='flex items-center gap-2'>
                <BiArrowBack/>
                Back
            </div>
            <div className='text-3xl mt-1'>
                Edit Profile
            </div>
           
        </div>

        <div className='h-full w-11/12 mx-auto flex flex-col  items-center gap-5'>

            {/* PROFILE PART  */}

            <div className='w-[60%]  bg-richblack-800 text-white flex  gap-5 p-6 rounded-md border border-richblack-600'>
                <div>
                    <img src={user?.image} alt=''
                        className='w-[78px] object-cover rounded-full'
                    />
                </div>

                <div className='w-full flex gap-3 flex-col'>
                    <p className='text-base text-richblack-50'>Change Profile Picture</p>
                    <div className='flex justify-start'>
                        <label 
                            for="file-upload" 
                            className='px-4 p-1 bg-yellow-50 rounded-md text-richblack-800 text-base'
                        >
                            Change
                        </label>
                        <input id="file-upload" type="file" className='invisible w-4'/>

                        <button className='px-4 p-1 bg-richblack-600 items-center text-richblack-50 text-base rounded-md'>
                            Remove
                        </button>
                    </div>
                </div>

            </div>

            {/* FORM PART */}
            <SettingsProfileUpdate/>

            {/* PASSWORD PART */}

            <div className='w-[60%] bg-richblack-800 p-6 flex flex-col gap-3 border border-richblack-600 rounded-md'>
                <p className='text-lg text-richblack-5'>Password</p>
                <div className='flex gap-2 w-full'>
                    <label htmlFor="" className='w-1/2 flex flex-col gap-[6px] text-sm relative'>
                        <p className='text-sm text-richblack-5'>Current Password <sup className='text-sm text-[#ED2121]'>*</sup></p>

                        <input 
                            type={`${showCurrentPassword ? "text" : "password"}`}
                            placeholder=' Enter your old password'
                            className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 

                        />

                        <span
                            className='absolute top-9 text-xl right-2'
                            onClick={() => setShowCurrentPassword( (prev) => (!prev))}
                        >
                            {
                                showCurrentPassword
                                ? (<AiOutlineEye/>)
                                : (<AiOutlineEyeInvisible/>)
                            }
                        </span>

                    </label>

                    <label htmlFor="" className='w-1/2 flex flex-col gap-[6px] text-sm relative'>
                        <p className='text-sm text-richblack-5'>Change Password <sup className='text-sm text-[#ED2121]'>*</sup> </p>

                        <input 
                            type={`${showNewPassword ? "text" : "password"}`}
                            placeholder='Enter your new password'
                            className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 

                        />
                        <span
                            className='text-xl absolute top-9 right-2'
                            onClick={() => setShowNewPassword ( (prev) => (!prev))}
                        >
                            {
                                showNewPassword
                                ? (<AiOutlineEye/>)
                                : (<AiOutlineEyeInvisible/>)
                            }
                        </span>
                        
                    </label>
                </div>
            </div>

            {/* ACCOUNT DELETE PART */}
            <div className='w-[60%] bg-pink-900 p-6 pr-36 flex gap-5 border border-pink-700 rounded-md'>
                <div className='p-3 text-pink-200 bg-pink-700 h-12 rounded-full'>
                    <RiDeleteBin5Line className='w-6 h-6'/>
                </div>

                <div className='flex flex-col gap-2'>
                    <p  className='text-lg text-pink-5 font-bold'>Delete Account</p>
                    <div className='text-sm text-pink-25 font-inter'>
                        <p>Would you like to delete account?</p>
                        <p>This account contains Paid Courses. Deleting your account will remove all the contain associated with it.</p>
                    </div>
                    <p className='text-base font-[Italic] text-pink-600'>I want to delete my account.</p>
                </div>
            </div>

            <div className='p-4  w-[60%] flex gap-6 justify-end'>
                <button className='px-5 py-2 bg-richblack-800 rounded-md'>Cancel</button>
                <button 
                    className='px-5 py-2 bg-yellow-300 rounded-md text-richblack-900'>
                    Save
                </button>
            </div>

        </div>
    </div>
  )
}

export default Settings
