import React from 'react'
import instractor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from ".././HomePage/Button"
import {FaArrowRight} from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16'>
        <div className='flex flex-row gap-20 items-center'>

            <div className='w-[50%] '>
                <img src={instractor} alt="" className='rounded-lg' />

            </div>

            <div className='w-[50%] flex flex-col gap-10 ml-10'>
                <div className='text-4xl font-semibold w-[50%]'>
                    Become an
                    <HighlightText text={"Instractor"}/>
                </div>

                <p className='font-medium text-[14px] w-[80%] text-richblack-300'>
                    Instructors from around the world teach millions of students on StudyNotion.
                     We provide the tools and skills to teach what you love.
                </p>

                <div className='w-fit'>
                    <CTAButton active={true} linkto={"/signUp"}>
                        <div className='flex gap-2 items-center'>
                            Start learning Today
                            <FaArrowRight/>
                        </div>
                    </CTAButton>
                </div>


            </div>

        </div>
      
    </div>
  )
}

export default InstructorSection
