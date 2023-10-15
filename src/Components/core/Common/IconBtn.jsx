import React from 'react'
import {FiEdit} from 'react-icons/fi'

const IconBtn = ({
    text,
    onClick,
    children,
    disabled,
    outline=false,
    customClasses,
    type
}) => {
  return (
    <div
    disabled={disabled}
    onClick={onClick}
    type={type}
    className='bg-yellow-50 px-5 py-2 text-base font-bold text-richblack-900 rounded-md cursor-pointer'
    >
      {
        children ? (
            <>
                <span >
                    {text}
                </span>
                {children}
            </>
            ) : (
              <div className='flex gap-2 items-center '>
                {/* <FiEdit/> */}
                {text}
              </div>
            )
      }
    </div>
  )
}

export default IconBtn
