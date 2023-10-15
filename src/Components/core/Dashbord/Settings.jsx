import React from 'react'
import { BiArrowBack} from 'react-icons/bi'
import { useSelector } from 'react-redux'
import countryCodes from '../../../data/countrycode.json'
const Settings = () => {

    const {user} = useSelector( (state) => state.profile);

  return (
    <div className='text-white'>
        <div className='py-6 w-full pr-32 pl-6'>
            <div className='flex items-center gap-2'>
                <BiArrowBack/>
                Back
            </div>
            <div className='text-3xl mt-1'>
                Edit Profile
            </div>
           
        </div>

        <div className='h-full w-11/12 mx-auto flex flex-col ml-32 '>
            <div className='w-[60%] bg-richblack-800 text-white flex  gap-5 p-6 rounded-md border border-richblack-600'>
                <div>
                    <img src={user?.image}
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

            <div className='flex flex-col gap-3 p-6 bg-richblack-800 w-[60%] mt-7 border border-richblack-600 rounded-md'>
                <p className='text-richblack-5 text-lg'>Profile Information</p>
                <div className='flex gap-3 '>
                    <label className=' w-[50%] flex flex-col gap-[6px]'>
                        <p className='text-sm'>Display Name</p>

                        <input 
                            type="text" 
                            placeholder={"************"}
                            className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 

                        />
                        <p className='text-xs text-richblack-500'>Name entered above will be used for all issued certifies.</p>
                    </label>
                    <label className='w-[50%] flex flex-col gap-[6px]'>
                        <p className='text-sm text-richblack-5'>Display Name</p>
                        <select name="" id="" 
                             className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[14px]' 
                        >
                            <option value="WebDevelopment">Fontend Developer</option>
                            <option value="WebDevelopment">Software Engineer</option>
                            <option value="WebDevelopment">Android Developer</option>
                            <option value="WebDevelopment">Ios Developer</option>
                        </select>
                    </label>
                </div>
                <div className='flex gap-3'>
                    <label htmlFor=""
                        className='w-[50%]'
                    >
                        <p className='text-sm text-richblack-5'>Date of Birth</p>
                        <input type="date"
                            
                            className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 
                        />
                    </label>

                   <fieldset className='flex flex-col w-[50%]'>
                        <p className='text-sm text-richblack-5'>Gender</p>
                        <div className='flex justify-between bg-richblack-700 rounded-[0.5rem] p-3'>
                            <label htmlFor="" className='flex gap-3'>
                                <p >Male</p>
                                <input type="radio" 
                                    name='gender'
                                    className='w-[20px]'
                                />
                            </label>
                            <label htmlFor="" className='flex gap-3'>
                                <p>Female</p>
                                <input type="radio" 
                                    name='gender'
                                    className='w-[20px]'
                                />
                            </label>
                            <label htmlFor="" className='flex gap-3'>
                                <p>Other</p>
                                <input type="radio" 
                                    name='gender'
                                    className='w-[20px] text-yellow-'
                                />
                            </label>
                        </div>
                   </fieldset>
                </div>

                <div className='flex gap-3 w-full'>
                    <div className='w-[50%]'>
                        <p className='text-sm text-richblack-5'>Phone number</p>
                        <div className=' flex gap-2 w-full'>
                        <select
                                // value={selectedOption} 
                                // onChange={handleOptionChange}      
                                className='p-3 w-[4.8rem] rounded-md bg-richblack-700 text-richblack-50'
                            >         
                                {
                                    countryCodes.map( (element , index) => {
                                        return (
                                            <option 
                                                value={element.code}
                                                key={index}
                                            >
                                                {`${element.code} - ${element.country} `}
                                            </option>
                                        )
                                    })
                                }

                            </select> 

                            <label htmlFor="" className='w-full'>
                                <input 
                                    type="number"
                                    placeholder='12345 67890'
                                    className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 
                                />
                            </label>

                        </div>
                    </div>
                    <label htmlFor="" className='w-1/2'>
                        <p className='text-sm text-richblack-5'>About</p>
                        <input type="text" 
                            placeholder='Enter Bio Details'
                           className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>                   
                </div>
            </div>

        </div>
    </div>
  )
}

export default Settings
