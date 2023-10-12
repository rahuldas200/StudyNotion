import React from 'react'

const Component2 = ({bigText , smallText ,color}) => {
  return (
    <div className={`${color} text-white p-8 pr-14 flex flex-col gap-8 min-w-[25%] h-full `}>
      <h1 className='text-lg font-bold'>
        {bigText}
      </h1>
        <p className='text-sm text-richblack-100'>
            {smallText}
        </p>
    </div>
  )
}

export default Component2
