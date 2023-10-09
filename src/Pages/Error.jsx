import React from 'react'
import {TbError404} from 'react-icons/tb'
import {BiSolidLeftArrowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-screen w-screen text-[#ED2121] text-2xl flex flex-col justify-center items-center gap-5'>
      <div className='flex flex-col items-center shadow-[0px_0px_0px_5px_#c53030] p-5 rounded-lg'>
        <p>Opps</p>
        <TbError404 className='text-5xl'/>
        <p>Page not found</p>
      </div>
      <Link to={"/"}>
        <div className='flex mt-5 items-center text-blue-200 cursor-pointer'>
          <BiSolidLeftArrowAlt className='w-6 mt-1'/>
          <p className='text-blue-200 text-xl  underline '>
            back to home page
          </p>
        </div>
      </Link>
    </div>

  )
}

export default Error
