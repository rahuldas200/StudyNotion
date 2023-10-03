import React from 'react'
import Highlighttext from "../HomePage/HighlightText"
import Know_your_prograss from "../../../assets/Images/Know_your_progress.svg"
import Complair_with_other from "../../../assets/Images/Compare_with_others.svg"
import plan_your_lession from "../../../assets/Images/Plan_your_lessons.svg"
import CTAButton from "../HomePage/Button"


const TimeLineSection = () => {
  return (
    <div className='mt-36 flex items-center flex-col mb-10'>
        <div className='flex flex-col gap-5 justify-center items-center'>

          <div className='text-4xl font-semibold text-center'>
            Your Swiss Knife for
            <Highlighttext text={"learning any language"}/>
          </div>
           
          <div className='text-center mt-3 font-medium w-[70%] text-richblack-600 max-auto text-base'>
            Using spin making learning multiple languages easy. with 20+ 
            languages realistic voice-over, progress tracking, custom schedule and more.
          </div>

        </div>

        <div className='flex flex-row  items-center justify-center mt-5 mx-10'>
          <img
            src={Know_your_prograss} 
            alt='KnowYourProgressImage'
            className='object-contain -mr-32'
          />

          <img
            src={Complair_with_other} 
            alt='KnowYourProgressImage'
            className='object-contain'
          />

          <img
            src={plan_your_lession} 
            alt='KnowYourProgressImage'
            className='object-contain -ml-36'
          />

        </div>

        <div className='w-fit'>
          <CTAButton active={true} linkto={"signup"}>Lern more</CTAButton>
        </div>
        
    </div>
  )
}

export default TimeLineSection
