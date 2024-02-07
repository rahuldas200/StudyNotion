import React from 'react'
import { useSelector } from 'react-redux'
import { FaCheckCircle } from "react-icons/fa";
import CourseInformationForm from './courseInformationForm/CourseInformationForm';
import CourseBuilderForm from './CourseBuilder/CourseBuilderForm'
import PublishForm from './publishCourse/PublishForm';

const RenderStep = () => {
  const steps = [
    {
      id:1,
      title:"Course Information",
    },
    {
      id:2,
      title:"Course Builder",
    },
    {
      id:3,
      title:"Publish",
    }

  ]
  

  const {step,course,editCourse} = useSelector( (state) => state.course);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-around items-center mb-5'>
        {
          steps.map( (item, index) => {
              return<div key={index}>
                  <div  className='flex  text-center flex-col justify-center items-center gap-2'>
                    <div className={`border-[1px] ${step === item.id 
                      ? ' border-yellow-50 bg-yellow-900 ' 
                      : 'border-richblack-300 bg-richblack-800'}
                      h-9 w-9 p-2 flex justify-center items-center rounded-full  `}>
                        <div className={`${step === item.id ? 'text-yellow-50 ': 'text-richblack-300'}`}>
                        {
                            step > item.id ? (<FaCheckCircle className='text-yellow-100 w-full'/>) : (item.id)
                        }                                               
                        </div>
                    </div>
                    <div className= {` text-center text-sm font-inter leading-6 
                      ${step === item.id ? 'text-richblack-5': 'text-richblack-500'}`}>
                        {item.title}
                    </div>
                  </div>
                  {/* add dashes HW */}
                  
              </div>
          })
          
        }
      </div>
      {
        step === 1 && <CourseInformationForm/>
      }
      {
        step === 2 && <CourseBuilderForm/>
      }
      {
        step === 3 && <PublishForm/>
      } 
    </div>

  )
}

export default RenderStep;
