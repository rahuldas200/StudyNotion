import React from 'react'
import Footer from '../Components/core/Common/FooterSection/Footer'
import {BsFillChatRightTextFill} from 'react-icons/bs'
import {IoEarth} from 'react-icons/io5'
import {FiPhoneCall} from 'react-icons/fi'
import ContactFrom from '../Components/core/Common/ContactFrom'

const contactData = [
    {
        name:"Chat on us",
        message:"Our friendly team is here to help.",
        through:"@mail address",
        icon:<BsFillChatRightTextFill/>
    },
    {
        name:"Chat on us",
        message:"Our friendly team is here to help.",
        through:"@mail address",
        icon:<IoEarth/>
    },
    {
        name:"Chat on us",
        message:"Our friendly team is here to help.",
        through:"@mail address",
        icon:<FiPhoneCall/>
    }
]

const Contact = () => {
  return (
    <div className='text-white'>
      <div className='w-11/12 mx-auto py-20 flex gap-14'>
        <div className='w-[50%] h-full rounded-md'>
            <div className='bg-richblack-800 rounded-md p-6 flex flex-col gap-4'>
                {
                    contactData.map( (element , index) => {
                    return (
                        <div key={index} className=' flex gap-3 p-3 items-center border border-richblack-600 rounded-lg'>
                            <p className='text-xl'>{element.icon}</p>
                            <div>
                                <h1 className='text-lg text-richblack-100'>{element.name}</h1>
                                <p className='text-richblack-400'>{element.message}</p>
                                <p className='text-richblack-400'>{element.through}</p>
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        </div>

        <div className='p-14 flex flex-col gap-8 rounded-lg border border-richblack-600 mr-8'>
            <div className='flex justify-center flex-col gap-2'>
                <h1 className='text-4xl font-bold font-inter text-richblack-25'>Got a Idea? We’ve got the skills. Let’s team up</h1>
                <p className='text-richblack-400'>Tall us more about yourself and what you’re got in mind.</p>
            </div>
            <div>
                <ContactFrom/>
            </div>
        </div>
      </div>

      <div className='w-11/12 mx-auto'>
        <h2 className='text-center text-4xl font-semibold mt-10 mb-6 '>
                        Review from other Learner
        </h2>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact
