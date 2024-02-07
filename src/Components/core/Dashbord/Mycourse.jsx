import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { fetchInstructorCourse } from '../../../Services/operations/courseDetailAPI';
import { CiCirclePlus } from "react-icons/ci";
import InstructorCourse from './InstructorCourse';

const Mycourse = () => {

  const {token} = useSelector( (state) => state.auth);
  const {user} = useSelector( (state) => state.profile);
  const navigate = useNavigate();
  const [courses , setCourses] = useState([]);

  useEffect( () => {
    const fetchCourse = async () => {
      const result = await fetchInstructorCourse(user._id,token);
        if(result){
         setCourses(result);
        }    
    }
    fetchCourse();
  },[]);

  




  return (
    <div className='text-white pl-3'>

      <div className='flex justify-between mr-32 p-6 items-center'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-3'>
            <p>Home</p>/
            <p>Dashboard</p>/
            <p>Courses</p>
          </div>
          <h1 className='text-3xl '>My Courses</h1>
        </div>
       <Link to={"/dashboard/add-course"}>
        <button  className='flex items-center gap-1 px-6 py-3 bg-yellow-100 text-richblack-900 rounded-md text-base font-bold'>
            <CiCirclePlus/>
            <p>New</p>
          </button>
       </Link>
      </div>

     {
      courses.length === 0 ? (
        <p>You have not any Courses</p>
      ) 
      : 
      (
        <div className='ml-3 mr-32 border-richblack-600 border-[2px] rounded-md mt-3'>
          <div className='flex justify-between '>
            <p className='p-4'>Course</p>
            <div className='flex gap-7'>
              <p className='p-4'>Duration</p>
              <p  className='p-4'>Price</p>
              <p  className='p-4'>Action</p>
            </div>
          </div>

            {
              courses && (<InstructorCourse courses={courses}/>)
            }

      </div>
      )
     }


    </div>
  )
}

export default Mycourse
