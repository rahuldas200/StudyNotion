import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import {COURSE_STATUS} from '../../../../../utils/constants'
import { resetCourseState } from '../../../../../slices/courseSlice';
import {editCourseDetails}from '../../../../../Services/operations/courseDetailAPI'
import { setStep } from '../../../../../slices/courseSlice';
import {  useNavigate } from 'react-router-dom';

const PublishForm = () => {

   const { register , handleSubmit , setValue , getValues} = useForm();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {course} = useSelector( (state) => state.course);
   const {token} = useSelector( (state) => state.auth);
  
   const [loading , setLoading] = useState(false);

   console.log(course);


  useEffect ( () => {
    if(course?.status === COURSE_STATUS.PUBLISHED){
      setValue("public",true);
    }
  })

  const goToCourses  = () => {
    dispatch(resetCourseState());
    // navigate to my Course
    navigate("/dashboard/my-courses");
  }

  const  handleCoursePublich = async () =>{

    if(course?.status === COURSE_STATUS.PUBLISHED && getValues("Public") === true
      || (course?.status === COURSE_STATUS.DRAFT && getValues("public") === false)){
        // no update in form
        // no need to api call
        goToCourses();
        console.log(course);
        return;
    }

    // is form update
    const formData = new FormData();
    formData.append("courseId",course._id);
       
    const courseStatus = getValues("public") ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
    formData.append("status",courseStatus);
    setLoading(true);
    const result = await editCourseDetails (formData,token);
    console.log(result);

    if(result){
      // dispatch(resetCourseState());
      navigate("dashboard/my-profile");
      dispatch(setStep(1));
      
    }
    setLoading(false);

  }
   

  const onSubmit = () => {
    handleCoursePublich();
  }

  const goBack = () => {
    dispatch(setStep(2));
  }

  return (
    <div className='bg-richblack-800 border-[2px] rounded-md border-richblack-700 p-6 flex flex-col gap-6 '>
      <h1 className='font-inter  text-2xl font-semibold leading-8 text-richblack-25'>Publish setting</h1>
      <form className='flex gap-4 flex-col' onSubmit={handleSubmit(onSubmit)}>
       <div className='flex gap-3 items-center'>

          <input type="checkbox" 
            className='rounded-md h-4 w-4 cursor-pointer' 
            id='public' 
            {...register("public")}
          />

          <label htmlFor="public" className='text-base text-richblack-400'>Make this Course Public</label>
       </div>
       <div className='flex gap-4 justify-end '>
          <button disabled = {loading} type='button' onClick={goBack} className='p-4 bg-yellow-100 rounded-md  text-richblack-900 cursor-pointer'>Back</button>
          <button disabled = {loading} type='submit' className='p-4 bg-yellow-100 rounded-md text-richblack-900 cursor-pointer'>Save changes</button>
       </div>

      </form>
    </div>
  )
}

export default PublishForm
