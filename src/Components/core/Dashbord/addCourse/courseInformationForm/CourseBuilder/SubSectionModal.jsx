import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setCourse } from '../../../../../../slices/courseSlice';
import { RxCross2 } from "react-icons/rx";
import { createSubSection, updateSubSection } from '../../../../../../Services/operations/courseDetailAPI';
import Upload from '../Upload';

const SubSectionModal = ({
    modalData,
    setModalData,
    add = false,
    view = false,
    edit = false,
}) => {

    const { 
        register , 
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    
      } = useForm();

    const dispatch = useDispatch();
    const [loading , setLoading] = useState(false);
    const {course} = useSelector((state) => state.course);
    const {token} = useSelector((state) => state.auth);


    useEffect ( () => {
        if(view || edit){
            setValue("lectuteTitle",modalData.title);
            setValue("lectureDesc",modalData.description);
            setValue("lectuteVideo",modalData.videoUrl);
        }

    },[]);

    const isFromUpadted = () => {
        const currentValues = getValues();
        if( currentValues.LectuteTitle !== modalData.title ||
            currentValues.LectureDesc !== modalData.description ||
            currentValues.LectuteVideo !== modalData.videoUrl ) {

                return true;
        }
        else {
            return false;
        }

    }


    const handleEditSubsection = async () => {
        const currentValues = getValues();
        const formData = new FormData();

        formData.append("sectionId",modalData._id);
        formData.append("courseId",course._id);

        if(currentValues.lectuteTitle !== modalData.title){
            formData.append("title",currentValues.lectuteTitle);
        }
        if(currentValues.lectureDesc !== modalData.description){
            formData.append("description",currentValues.lectureDesc);
        }
        if(currentValues.lectuteVideo !== modalData.videoUrl){
            formData.append("video",currentValues.lectuteVideo);
        }

        setLoading(true);
        const result = await updateSubSection(formData,token);

        if(result) {
            // to do
            dispatch(setCourse(result));
        }

        setModalData(false);
        setLoading(false);

    }

    const onSubmit = async (data) => {

        if(view){
            return ;
        }

        if(edit){
            if(!isFromUpadted){
                toast.error("No changes my to the form");
            }

            else {
                handleEditSubsection ();
            }
            return;
        }

        const formData = new FormData();

        formData.append("sectionId",modalData._id);
        formData.append("courseId",course._id);
        formData.append("title",data.lectuteTitle);
        formData.append("description",data.lectureDesc);
        formData.append("video",data.lectuteVideo);

        setLoading(true);

        // api call

        const result = await createSubSection(formData,token);
        if(result){
            // todo
            dispatch(setCourse(result));

        }
        setModalData(false);
        setLoading(true);
    }



  return (
    <div className='fixed top-0 left-0 text-richblack-900 bg-[#080e23d1] overscroll-none  subSectionModal 
        w-screen h-screen flex justify-center items-center transition-transform '>
        <div className='bg-richblack-800  w-[50%] border-richblack-600 border-[1px] rounded-md '>
            <div className='flex justify-between py-6 px-4 bg-richblack-700 rounded-md'>
                <p className='text-2xl text-richblack-50 font-semibold '>
                    {view && "Viewing"} 
                    {add && "Adding"} 
                    {edit && "Editing"} lecture
                </p>
                <button onClick={() => (!loading ? setModalData(false) : {})} >
                    <RxCross2 className='text-richblack-25 text-2xl '/>
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='p-8 flex flex-col gap-2'>
                <Upload
                    label = 'Lecture Video'
                    name="lectuteVideo"
                    register={register}
                    errors ={errors}
                    setValue = {setValue}
                    getvalues = {getValues}
                    
                    video={true}
                    viewData={view ? modalData.videoUrl:null}
                    editData = {edit ? modalData.videoUrl:null}
                />

                <div className='flex flex-col gap-2'>
                    <label htmlFor="lectureTitle" className='text-sm font-inter font-normal text-richblack-5'>
                        Lecture Title 
                        <sup  className='text-[#de1212] text-center'>*</sup>
                    </label>
                    <input 
                        id='lectureTitle' 
                        placeholder='Enter lucture title'
                        readOnly={view}
                        {...register("lectuteTitle",{required:true})}
                        
                        className='bg-richblack-600 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />

                    {
                        errors.lectuteTitle && (
                            <span>Lecture Title is required </span>
                        )
                    }
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-sm font-inter font-normal text-richblack-5'>
                        Lecture Description 
                        <span  className='text-[#de1212] text-center'>*</span>
                    </label>
                    <textarea
                        id="lectureDesc"
                        placeholder='Enter Lecture Description'
                        readOnly={view}
                        {...register("lectureDesc",{required:true})}
                        className='bg-richblack-600 rounded-[0.5rem] min-h-[130px] text-richblack-5 w-full p-[12px]'>
                    </textarea>
                    {
                        errors.lectureDesc && (
                            <span>Video Lecture Description is required</span>
                        )
                    }
                </div>

                {
                    !view && (
                        <div>
                            <button type='submit' className='text-black bg-yellow-50 rounded-md p-3'>
                                {
                                    loading ? "Loading" : edit ? "Save changes" : "Save"
                                }
                            </button>
                        </div>
                    )
                }

            </form>

        </div>

    </div>
  )
}

export default SubSectionModal
