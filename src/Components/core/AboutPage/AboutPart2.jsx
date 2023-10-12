import React from 'react'

const AboutPart2 = ({BigText ,smallText_1 ,smallText_2,Color}) => {
  return (
    <div className='text-white flex flex-col gap-6 pl-6 max-sm:p-0'>
      <h1 className={`${Color} text-4xl font-bold`}>
        {BigText}
      </h1>
      <div className=' text-richblack-600 text-base'>
        <p>{smallText_1}</p>
      </div>
      {
        smallText_2 ? (
          <div className='text-richblack-600 text-base'>
            {smallText_2}
          </div>
        ) 
        : (<div></div>)
      }
    </div>
  )
}

export default AboutPart2
