import React from 'react'
import RenderStep from './RenderStep';

const Index = () => {
  const tips = [
    {
     title:"Set the Course Price option or make it free.",
    },
    {
     title:"Standard size for the course thumbnail is 1024x576.",
    },
    {
     title:"Video section controls the course overview video.",
    },
    {
     title:"Course Builder is where you create & organize a course.",
    },
    {
     title:"Add Topics in the Course Builder section to create lessons, quizzes, and assignments.",
    },
    {
     title:"Information from the Additional Data section shows up on the course single page.",
    },
    {
     title:"Make Announcements to notify any important",
    },
    {
     title:"Notes to all enrolled students at once.",
    },       
  ];
  return (
    <>
      <div className='text-white flex pl-6'>
        <div className='w-[60%] flex flex-col gap-2'>
          <h1 className='text-sm font-inter py-5 pr-32 '>Add Course</h1>
          <div>
            <RenderStep/>
          </div>
        </div>

        <div className='text-white max-w-[30%] h-[50%] mt-6 ml-20 p-6 bg-richblack-800 rounded-md border-[1px] border-richblack-50'>
          <h1 className='text-lg font-semibold'>⚡Course Upload Tips</h1>
          <ul className='flex flex-col gap-3 list-disc p-6'>
            {
              tips.map((tip,index) => {
                return <li key={index} className='text-xs font-normal'>{tip.title}</li>
              
              })
            }
          </ul>
        </div>

      </div>
    </>
  )
}

export default Index
