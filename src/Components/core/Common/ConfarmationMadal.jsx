import React from 'react'
import IconBtn from './IconBtn'

const ConfarmationMadal = ({modalData}) => {
  console.log(modalData);
    
  return (
    <div className='fixed top-0 left-0 text-richblack-900 bg-[#080e23d1] overscroll-none   w-screen h-screen flex justify-center items-center transition-transform z-10'>
      <div className='flex flex-col gap-2 w-[25%] bg-richblack-5 p-4 rounded-md -mt-16 overscroll-none '>
        <p className='text-black text-3xl text-center font-bold'>
            {modalData.text1}
        </p>
        <p className='text-center'>
            {modalData.text2}
        </p>

        <div className='flex justify-between mt-5 cursor-pointer'>
            <IconBtn
                onClick={modalData?.btn1Handler}
                text={modalData?.btn1Text}
            />
            <button onClick={modalData?.btn2Handler} 
              className='text-black bg-yellow-50 px-6 py-2 font-bold rounded-md '>
                {modalData?.btn2Text}
            </button>
        </div>

      </div>
    </div>
  )
}

export default ConfarmationMadal
