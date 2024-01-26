import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { CiCirclePlus } from "react-icons/ci";
import { addCourseSection ,updateCourseSection } from '../../../../../../Services/operations/courseDetailAPI';
import { setCourse, setEditCourse, setStep } from '../../../../../../slices/courseSlice';
import toast from "react-hot-toast";
import NestedView from './NestedView';



const CourseBuilderForm = () => {
  
  const { 
    register , 
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },

  } = useForm();
  
  const [loading,setLoading] = useState(false);

  const {course,editCourse} = useSelector((state)=> state.course);
  const {token} = useSelector( (state) => state.auth);
  const [editSectionName,setEditSectionName] = useState(null);
  const dispatch = useDispatch();

 
  const cancleEdit = () => {
    setEditSectionName(null);
    setValue("sectionName","");
  }

  const onSubmit = async (data) => {
    setLoading(true);
    let result;

    if(editSectionName){
      result = await updateCourseSection ( 
        {
          sectionName : data.sectionName,
          sectionId : editSectionName,
          courseId :course._id,
        }, token
      )
    }
    
    else {
      result = await addCourseSection(data.sectionName,course._id,token)
    }
    
    if(result){
      dispatch(setCourse(result));
      setEditSectionName(null);
      setValue("sectionName","");
    }

    setLoading(false);

  }

  console.log(editCourse)
  console.log(course);
  
  const goBack = () => {
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  }

  const goToNext = () => {
    if(course.courseContent.length === 0){
      toast.error("please add atleast one section")
      return;
    }
    if(course.courseContent.some( (section) => section.subSection === 0)){
      toast.error("please add atleast one lecture in each section");
      return;
    }

    // if every thing is good go to next step
    dispatch(setStep(3));

    //update Values

   

  }

  const handleChangeEditSectionName = (sectionId , sectionName) => {
    
    if(editSectionName === sectionId){
      cancleEdit();
      return;
    }
    setEditSectionName(sectionId);
    setValue("sectionName",sectionName);
  }



  return (
    <div className='flex flex-col gap-40'>
      <div className='bg-richblack-800 flex flex-col gap-6 p-6 rounded-md'>
        <p className='font-semibold text-2xl'>Course Builder</p>

        {
        
        course?.courseContent?.length > 0 && (
          <NestedView
          handleChangeEditSectionName = {handleChangeEditSectionName}
          />
          // <div></div>
        )
        }

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="sectionName" className='text-sm font-inter font-normal'>
              Section name 
              <sup className='text-[#de1212] text-center'>*</sup>
            </label>
            <input type="text" placeholder='Add a section to build your course'
            id='sectionName' {...register("sectionName",{required:true})}
            className='bg-richblack-700 w-full rounded-[0.5rem] border-[2px] border-richblack-400 text-richblack-5 p-[12px]'/>

            {
              errors.sectionName && (
                <span className='text-sm font-inter font-normal'>Section name is required *</span>
              )
            }
          </div>

        <div className='flex items-center gap-4'>
            <button type='submit' 
            className='flex py-3 px-6 mt-6 text-yellow-50 justify-center items-center gap-3 border-[2px] border-yellow-50 rounded-md'>   
              <CiCirclePlus className='font-bold text-lg'/>      
              {
                editSectionName ? (<p>Edit section name</p>) : (<p>Create section</p>)
              }
              
            </button>

            {
                editSectionName && (
                <button type='submit' onClick={cancleEdit}className='flex py-3 px-6 mt-6 text-richblack-900 justify-center items-center gap-3  rounded-md bg-yellow-50'>
                  Cancle Edit
                </button>)
            }
          </div>
        
        </form>

        {/* create nasted view */}
        

      

      </div>

      <div>
        <div className='flex justify-end gap-2'>
          <button onClick={goBack} className='py-3 px-6 bg-richblack-700 text-richblack-900 rounded-md font-medium'>
            Back
          </button>
          <button onClick={goToNext} className='py-3 px-6 bg-yellow-50 text-richblack-900 rounded-md font-medium'>
            Next
          </button>
        </div>
      </div>

    </div>
  )
}

export default CourseBuilderForm
