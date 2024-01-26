import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseCategories , addCourseDetails } from '../../../../../Services/operations/courseDetailAPI'
import { PiCurrencyInrFill } from "react-icons/pi";
import RequirementField from './RequirementField';
import ChipInput from './ChipInput';
import Upload from './Upload';
import { setStep } from '../../../../../slices/courseSlice';
import { setCourse } from '../../../../../slices/courseSlice';




const CourseInformationForm = () => {

  const { 
    register , 
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },

  } = useForm();
  
  const dispatch = useDispatch();
  
  const {course , editCourse} = useSelector( (state) => state.course);
  const {token} = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [ courseCategaries , setCourseCategories] = useState([]);

  useEffect( () => {
    const getCategories = async() => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if(categories.length > 0){
        setCourseCategories(categories);
      }
      setLoading(false);
    }
    console.log(course);
    console.log(editCourse);

    if(editCourse){
      setValue("courseTitle" , course.courseName);
      setValue("courseShortDesc" , course.courseDescription);
      setValue("coursePrice" , course.price);
      setValue("courseTags" , course.tag);
      setValue("courseBenifites" , course.whatYouWillLearn);
      setValue("courseCategory" , course.category);
      setValue("courseRequirment" , course.instractions);
      setValue("courseImage" , course.thumbnail);
    }

    getCategories();
  },[])

  const isFormUpdated = () => {
    const currentValues = getValues();

    if(currentValues.courseTitle !== course.courseName
      ||currentValues.courseShortDesc !== course.courseDescription
      ||currentValues.coursePrice !== course.price
      ||currentValues.courseTags.toString() != course.courseTags.toString()
      ||currentValues.courseBenifites !== course.whatYouWillLearn
      ||currentValues.courseCategory !== course.category
      ||currentValues.courseRequirment.toStrings() !== course.instractions.toString()
      ||currentValues.courseImage != course.thumbnail 
    )
      return true;
    else
      return false;
  }

  // handle next button click
  const onSubmit = async (data) => {

    // if(isFormUpdated){
    //   const currentValue = getValues();
    //   const currentFormData = new FormData();

    //   // currentFormData.append()
    // }
  
    const formData = new FormData();
    formData.append("courseName",data.courseTitle);
    formData.append("courseDescription",data.courseShortDesc);
    formData.append("price",data.coursePrice);
    formData.append("tag",JSON.stringify(data.courseTags));
    formData.append("whatYouWillLearn",data.courseBenifites);
    formData.append("category",data.courseCategory);
    formData.append("instructions",JSON.stringify(data.courseRequirment));
    formData.append("thumbnailImage",data.courseImage);

    setLoading(true);
    const result = await addCourseDetails(formData,token);

    if(result){
      dispatch(setStep(2));
      dispatch(setCourse(result));
    }

    setLoading(false);
  };

  


  return (
    <form onSubmit={handleSubmit(onSubmit)} 
      className='flex gap-3 flex-col mb-10 '>
      <div className='flex flex-col gap-6 rounded-md border-richblack-700 bg-richblack-800 p-6 '>

        <div className='flex flex-col gap-[6px] items-start w-full'>
          <label className='text-sm font-inter font-normal'>Course Title 
            <sup className='text-[#de1212]'>*</sup>
          </label>
            <input id='courseTitle'  placeholder='Enter course title'
              {...register("courseTitle", {required:true})} 
              className='bg-richblack-700 rounded-[0.5rem] border-b-[2px] border-b-richblack-400 text-richblack-5 w-full p-[12px]'
            />
            {
              errors.courseTitle &&(
                <span className='text-[#de1212] text-sm font-medium mt-1'>Course Title is required *</span>
              )
            }
        </div>

        <div className='flex flex-col gap-[6px] items-start w-full'>
          <label className='text-sm font-inter font-normal'>
            Course Short Description
            <sup className='text-[#de1212] text-center'>*</sup>  
          </label>
          <textarea  id="courseShortDesc" placeholder='Enter Description'
          {...register("courseShortDesc", {required:true})}
          className='bg-richblack-700 min-h-[130px] rounded-[0.5rem] border-b-[2px] border-b-richblack-400 text-richblack-5 w-full p-[12px]'
          />

          {
            errors.courseShortDesc && (
              <span className='text-[#de1212] text-sm font-medium mt-1'>Course Description is required *</span>
            )
          }
        </div>

        <div className='flex flex-col gap-[6px] items-start w-full'>
          <label className='text-sm font-inter font-normal'>
            Course price 
            <sup className='text-[#de1212] text-center'>*</sup>
          </label>
            <input id='coursePrice'  placeholder='Enter course price'
            {...register("coursePrice", {required:true,valueAsNumber:true})} 
            className='bg-richblack-700 rounded-[0.5rem] border-b-[2px] border-b-richblack-400 text-richblack-5 w-full p-[12px]'/>
            <PiCurrencyInrFill/>
            
            {
              errors.courseTitle &&(
                <span className='text-[#de1212] text-sm font-medium mt-1'>Course Price is required *</span>
              )
            }
        </div>

        <div className='flex flex-col gap-[6px] items-start w-full'>
          <label className='text-sm font-inter font-normal'>
             Course category 
             <sup className='text-[#de1212] text-center'>*</sup>
          </label>
          <select id="courseCategory" defaultValue={""}
            {...register("courseCategory",{required:true})} 
            className='bg-richblack-700 rounded-[0.5rem] border-b-[2px] border-b-richblack-400 text-richblack-5 w-full p-[12px]'
          >
            <option className='text-richblack-25'> Choose a category</option>
              {!loading && courseCategaries.map((category, index) => (
                <option className='text-richblack-25' key={index} value={category?._id}>
                    {category?.name}
                </option>
              ))}

          </select>
          {
            errors.courseCategory && (
              <span className='text-[#de1212] text-sm font-medium mt-1'>Course category is required *</span>
            )
          }
        </div>

        {/* create a custom component for handaling tag inputs */}

        <ChipInput
          label = 'Tags'
          name="courseTags"
          placeholder="Enter tags and press enter"
          register={register}
          errors={errors}
          setValue={setValue}
          getValue={getValues}
        />

        {/* create a component for uploading and showing preview for media */}
        <Upload
          label='Course Thumbnail'
          name="courseImage"
          register={register}
          errors={errors}
          setValue ={setValue}
          getvalues={getValues}         
        />

        <div className='flex flex-col gap-[6px] items-start w-full'>
          <label className='text-sm font-inter font-normal'>
            Benefites of the course 
            <sup className='text-[#de1212] text-center'>*</sup>
          </label>
          <textarea  id="courseBenifites" placeholder='Benefites of the course'
          {...register("courseBenifites",{required:true})}
          className='bg-richblack-700 min-h-[130px] w-full rounded-[0.5rem] border-b-[2px] border-b-richblack-400 text-richblack-5 p-[12px]'>

          </textarea>

          {
          errors.courseBenifites &&(
            <span className='text-[#de1212] text-sm font-medium mt-1'>Benefits is required*</span>
          )
        }
        </div>
        <RequirementField
          name='courseRequirment'
          label='Requirment/Instractions'
          register={register}
          errors={errors}
          setValue={setValue}
          getValue={getValues}
        />   
      </div>

      <div>
          {
            editCourse && (
              <button>
                Continue without saving
              </button>
            )
          }

      </div>
        
      <button type='submit' className='bg-yellow-100 text-richblack-900 py-3 px-4 rounded-md'>Next</button>
    </form>
  )
}

export default CourseInformationForm
