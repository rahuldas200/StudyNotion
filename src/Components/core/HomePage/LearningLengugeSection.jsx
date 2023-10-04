import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"


const LearningLengugeSection = () => {
  const timeline = [
    {
      logo: Logo1,
      heading:"leadership",
      Description:"Fully committed to the success company"
    },
    {
      logo: Logo2,
      heading:"leadership",
      Description:"Fully committed to the success company"
    },
    {
      logo: Logo3,
      heading:"leadership",
      Description:"Fully committed to the success company"
    },
    {
      logo: Logo4,
      heading:"leadership",
      Description:"Fully committed to the success company"
    }
  ]
  return (
    <div>
      <div className='flex flex-row gap-[76px] items-center max-sm:flex-col'>


        <div className='w-[45%] flex flex-col gap-7 max-sm:w-fit'>
            {
              timeline.map((element ,index) => {

                return (
                  <div className='flex flex-row gap-6 py-4 px-3 shadow-[0px_0px_3px_3px_#00000024] rounded-md' key={index}> 
                    <div className='w-[50px] h-[50px] shadow-[0px_0px_3px_3px_#00000024] bg-white flex justify-center rounded-full relative'> 
                      <img src={element.logo} className='w-4' alt=''/>
                      {index < timeline.length-1 ? <div className='absolute w-[2px] h-[42px] rotate-90 left-5 mt-2 top-10  text-caribbeangreen-700 font-bold'>......</div> : <div> </div>}
                      
                    </div>

                    <div>
                      <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                      <p className='text-base'>{element.Description}</p>
                    </div>

                  </div>
                )
              })
            }

        </div>

        <div className='relative shadow-blue-200'>

          <img src= {timelineImage} alt="" 
             className='object-cover shadow-white h-fit rounded-md shadow-[0px_0px_7px_5px_#00000024]'/>

          <div className='absolute flex bg-caribbeangreen-700 text-white uppercase py-10 px-3
            translate-x-[-50%] translate-y-[-50%] left-[50%] max-sm:flex-col max-sm:gap-2 '>
              <div className='flex gap-5 items-center border-r border-r-caribbeangreen-300 px-7 max-sm:border-0 max-sm:pb-6  max-sm:border-b max-sm:border-r-caribbeangreen-300'>
                <p className='text-3xl font-bold'>10</p>
                <p className='text-caribbeangreen-300 text-sm'>Years of experience</p>
              </div>

              <div className='flex gap-5 items-center px-7 max-sm:mt-5'>
                <p className='text-3xl font-bold'>250</p>
                <p className='text-caribbeangreen-300 text-sm'>Types of courses</p>
              </div>

          </div>
          
        </div>

      </div>

    </div>
  )
}

export default LearningLengugeSection
