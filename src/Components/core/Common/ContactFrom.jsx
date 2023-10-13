import React from 'react'
import { useState } from 'react';
import countryCodes from '../../../data/countrycode.json'
import TextareaAutosize from 'react-textarea-autosize';

const ContactFrom = () => {

    const [selectedOption, setSelectedOption] = useState('+91'); // Initial state is an empty string
      
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value); 
        // Update the selected option when the user makes a selection
        console.log(selectedOption);
    };

   
      

    const [formData ,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        countryCode:'',
        message:"",
    })


    const changeHandler = (e) => {
        setFormData( (prev) => (
            {
                ...prev,
                [e.target.name]:e.target.value,
                countryCode:selectedOption,
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        e.target.reset();
        

    }

  return (
    <div>
        <form 
            onSubmit={handleSubmit}
            className='flex flex-col gap-9'
        >
            <div className='flex flex-col gap-5'>
                <div className='flex gap-5'>
                    <label htmlFor="" className='w-1/2'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name
                        </p>
                        <input 
                            type="text"
                            placeholder='First Name'
                            name='firstName'
                            value={formData.firstName}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                         />
                    </label>

                    <label htmlFor="" className='w-1/2'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name
                        </p>
                        <input 
                            type="text"
                            placeholder='Last Name'
                            name='lastName'
                            value={formData.lastName}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                <label htmlFor="">
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address</p>
                    <input 
                        type="text" 
                        placeholder='Email'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>

                            
                <label htmlFor="">
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Phone Number</p>
                    <div className='flex gap-5 '>

                        <div className=''>
                            <select
                                value={selectedOption} 
                                onChange={handleOptionChange}      
                                className='py-4 px-3 w-[4.8rem] rounded-md bg-richblack-800 text-richblack-50'
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
                                        
                        </div>
                        <input 
                            type="text" 
                            placeholder='12345 67890'
                            name="phone"
                            value={formData.phone}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        </div>
                </label>
                            

            </div>

            <div>
                <label htmlFor="">
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Message</p>
                        <TextareaAutosize
                            type="text"
                            placeholder='Enter your Query'
                            name='message'
                            value={formData.message}
                            onChange={changeHandler}
                                    
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] min-h-[150px]'
                        />
                </label>

            </div>

            <button type='submit' className='text-richblack-900 font-bold rounded-md bg-yellow-50 p-2'>                            
                Send message                            
            </button>
        </form>      
    </div>
  )
}

export default ContactFrom
