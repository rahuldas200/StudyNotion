import React from 'react'
import countryCodes from '../../../data/countrycode.json'
import { useState } from 'react'

const Profession = [
    {
        ProfessionName:"Web developer",
    },
    {
        ProfessionName:"Web developer",
    },
    {
        ProfessionName:"Web developer",
    },
    {
        ProfessionName:"Web developer",
    },
    {
        ProfessionName:"Web developer",
    }
]


const SettingsProfileUpdate = () => {
    const [selectedOption , setSelectedOption] = useState('+91')

    const handleOptionChange = (event) => {
        selectedOption(event.target.value);
    }

    const [fromData , setFormData] = useState( 
        {  
            gender:"",
            dateOfBirth:"",
            about:"",
            contactNumber:"",
        }
    )

    const changeHandler = (event) => {
        setFormData( (prev) => ({
            ...prev,
            [event.target.name]:event.target.value,
            countryCode:selectedOption
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(fromData);
    }

  return (
    <form onSubmit={handleSubmit} className='w-[60%]'>
            <div className='flex flex-col  gap-3 p-6 bg-richblack-800 border border-richblack-600 rounded-md'>
                <p className='text-richblack-5 text-lg'>Profile Information</p>

                <div className='flex gap-3 '>

                    <label className=' w-[50%] flex flex-col gap-[6px]'>
                        <p className='text-sm'>Display Name</p>

                        <input 
                            type="text" 
                            placeholder="************"
                            className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 

                        />
                        <p className='text-xs text-richblack-500'>Name entered above will be used for all issued certifies.</p>
                    </label>

                    <label className='w-[50%] flex flex-col gap-[6px]'>
                        <p className='text-sm text-richblack-5'>Profession</p>
                        
                        <select name="" id="" 
                             className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[14px]' 
                        >
                            {
                                Profession.map( (element , index) => (
                                    <option key={index}>
                                        {element.ProfessionName}
                                    </option>
                                ))
                            }                            
                        </select>
                    </label>

                </div>

                <div className='flex gap-3'>

                    <label htmlFor=""
                        className='w-[50%]'
                    >
                        <p className='text-sm text-richblack-5'>Date of Birth</p>
                        <input 
                            name='dateOfBirth'
                            type="date"
                            value={fromData.dateOfBirth}
                            onChange={changeHandler}
                            className='bg-richblack-700  rounded-[0.5rem] text-richblack-200 w-full p-[12px]' 
                        />
                    </label>

                   <fieldset className='flex flex-col w-[50%]'>

                        <p className='text-sm text-richblack-5'>Gender <sup className='text-sm text-[#ED2121]'>*</sup></p>
                        <div className='flex justify-between bg-richblack-700 rounded-[0.5rem] p-3'>

                        <div className="flex gap-3 items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={fromData.gender === 'male'}
                                onChange={changeHandler}
                                id="radio-male"
                                className="form-radio text-indigo-600 h-5 w-5 accent-yellow-100"
                            />
                            <label htmlFor="radio-male" className="text-base text-richblack-200 cursor-pointer">
                                Male
                            </label>
                        </div>

                        <div className="flex gap-3 items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={fromData.gender === 'female'}
                                onChange={changeHandler}
                                id="radio-female"
                                className="form-radio text-indigo-600 h-5 w-5 accent-yellow-100"
                            />
                            <label htmlFor="radio-female" className="text-base text-richblack-200 cursor-pointer">
                                Female
                            </label>
                        </div>

                        <div className="flex gap-3 items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                checked={fromData.gender === 'other'}
                                onChange={changeHandler}
                                id="radio-other"
                                className="form-radio text-indigo-600 h-5 w-5 accent-yellow-100"
                            />
                            <label htmlFor="radio-other" className="text-base text-richblack-200 cursor-pointer">
                                Other
                            </label>
                        </div>

                        </div>

                   </fieldset>
                </div>

                <div className='flex gap-3 w-full'>
                    <div className='w-[50%]'>
                        <p className='text-sm text-richblack-5'>Phone number<sup className='text-sm text-[#ED2121]'>*</sup></p>
                        <div className=' flex gap-2 w-full'>
                            <select
                                value={selectedOption} 
                                onChange={handleOptionChange}  
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
                                    name='contactNumber'
                                    type="text" 
                                    value={fromData.contactNumber}
                                    onChange={changeHandler}
                                    placeholder='12345 67890'
                                    className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 
                                />
                            </label>

                        </div>
                    </div>
                    <label htmlFor="" className='w-1/2'>
                        <p className='text-sm text-richblack-5'>About</p>
                        <input 
                            type="text" 
                            name='about'
                            value={fromData.about}
                            onChange={changeHandler}
                            placeholder='Enter Bio Details'
                           className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>                   
                </div>
                <button className='p-4 bg-yellow-300 text-black rounded-md leading-6'
                type='submit'>Save</button>
            </div>

    </form>
  )
}

export default SettingsProfileUpdate
