import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



const InstructorCourse = ({courses}) => {
    console.log(courses);
  return (
    <div className='flex flex-col gap-3'>
        {
            courses.map((course) => (
                <div key={course._id} className='flex justify-between bg-richblack-800 rounded-md m-2'>
                    <div className='p-4 flex gap-3'>
                       <div>
                            <img src={course.thumbnail} alt="" className='w-[221px] h-[148px] rounded-md' />
                       </div>
                       <div className='flex flex-col gap-2'>
                            <h1 className='text-xl text-richblack-5'>{course?.courseName} :</h1>
                            <p className='text-sm text-richblack-100'>{course?.courseDescription}</p>
                            <p className='text-richblack-25'>Created at : </p>
                            <p className={`flex gap-2 items-center bg-richblack-700 px-2 py-1 rounded-lg w-fit ${ course?.status === "Published" ?"text-yellow-100": "text-richblack-200"}`}>
                                {
                                    course?.status === "Published" ? (<FaCheckCircle className='text-yellow-50'/>) : (<FaRegClock className='text-[#ED2121]'/>)
                                }
                                <p>{course?.status}</p>
                            </p>
                       </div>
                    </div>
                    <div className='flex gap-7 justify-center items-center '>
                        <p className='p-4'>Duration</p>
                        <div className='flex items-center p-4'>
                            <MdOutlineCurrencyRupee />
                            <p>{course?.price}</p>
                        </div>
                        <p className='flex gap-3 items-center p-4'>
                            <button>
                                <MdEdit/>
                            </button>
                            <button>
                                <MdDelete/>
                            </button>
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default InstructorCourse

