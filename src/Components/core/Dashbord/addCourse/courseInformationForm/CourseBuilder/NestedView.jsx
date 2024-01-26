import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxDropdownMenu } from "react-icons/rx";
import { MdModeEdit , MdDelete } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import SubSectionModal from './SubSectionModal';
import ConfarmationMadal from '../../../../Common/ConfarmationMadal';
import { setCourse } from '../../../../../../slices/courseSlice';
import { deleteCourseSection , deleteCourseSubsection} from '../../../../../../Services/operations/courseDetailAPI';


const NestedView = ({handleChangeEditSectionName}) => {

    const {course} = useSelector (( state) => state.course);
    const {token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [addSubSection , setAddSubSection] = useState(null);
    const [viewSubSuction , setViewSubSuction] = useState(null);
    const [editSubSection, setEditSubsection] = useState(null);
    const [conformationModal , setConfirmationModal] = useState(false);

    const handleDeleteSection = async (sectionId) => {
        const result =  await deleteCourseSection ({
            sectionId,
            courseId:course._id},
            token
        )

        if(result){
            dispatch(setCourse(result));
        }
        setConfirmationModal(false);
    }

    const handleDeleteSubSection = async (subSectionId ,sectionId) => {
        const result = await deleteCourseSubsection ({
            subSectionId,
            sectionId,
            courseId:course._id,
            token
        })

        if(result){
            // need extra
            dispatch(setCourse(result));
        }
        setConfirmationModal(false);
    }

  return (
    <div className='bg-richblack-700 p-6 rounded-md px-6'>
        <div className='text-white flex flex-col gap-5'>
            {
                course.courseContent.map((section) => (
                    <details key={section._id} >
                        <summary className='flex justify-between border-b-[1px] p-3 border-b-richblack-300 gap-2 border-white'>
                            <div className='flex  gap-4 items-center'>
                                <RxDropdownMenu className ='w-5'/>
                                <p className='text-richblack-50'>{section.sectionName}</p>
                            </div>
                            <div className='flex items-center gap-2 text-richblack-300'>
                               <button onClick={()=> handleChangeEditSectionName(section._id,section.sectionName)}>
                                    <MdModeEdit />
                               </button>

                               <button onClick={() => {
                                setConfirmationModal({
                                    text1:"Delete this Section",
                                    text2:"All the lectures in this Section will be deleted",
                                    btn1Text:"Delete",
                                    btn2Text : "Cencle",
                                    btn1Handler: () => handleDeleteSection(section._id),
                                    btn2Handler : () => setConfirmationModal(null)
                                })
                               }}>
                                    <MdDelete/>
                               </button>
                               <span >|</span>
                               <BiSolidDownArrow className={`text-xl`}/>
                            </div>
                        </summary>

                        <div className='flex flex-col gap-3 mt-3 ml-6'>
                            {
                                section.subSection.map( (data) => (
                                    <div key={data._id} 
                                    className='flex items-center p-3 justify-between bg-richblack-800 rounded-md gap-2 gap-x-3 border-b-[1px] border-richblack-100'>
                                        <div onClick={() => setViewSubSuction(data)} className='flex cursor-pointer  gap-4 items-center'>
                                            <RxDropdownMenu/>
                                            <p className='text-white'>{data.title}</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <button onClick={ () => setEditSubsection({...data,sectionId:section._id})}>
                                                <MdModeEdit/>
                                            </button>

                                            <button onClick={() =>  setConfirmationModal({
                                                    text1:"Delete this sub Section",
                                                    text2:"Selected lectures will be deleted",
                                                    btn1Text:"Delete",
                                                    btn2Text : "Cencle",
                                                    btn1Handler: () => handleDeleteSubSection(data._id ,section._id),
                                                    btn2Handler : () => setConfirmationModal(null)
                                                })}>

                                                <MdDelete/>
                                            </button>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <button onClick={ ()=> setAddSubSection(section)}
                            className='mt-5 flex max-w-[150px] rounded-md  items-center gap-2 text-yellow-50 border-[2px] py-3 px-3 border-yellow-50'>
                                <FaPlus/>
                                Add Lacture
                            </button>
                        </div>
                    </details>
                ))
            }
            
                {
                    addSubSection? (<SubSectionModal
                        modalData = {addSubSection}
                        setModalData = {setAddSubSection}
                        add = {true}
                    />) 
                    : viewSubSuction ? (<SubSectionModal
                        modalData = {viewSubSuction}
                        setModalData = {setViewSubSuction}
                        view = {true}
                    />) 
                    : editSubSection ? (<SubSectionModal
                        modalData = {editSubSection}
                        setModalData = {setEditSubsection}
                        edit = {true}
                    />) 
                    : (<div></div>)
                    
                   
                    
                }
                {
                    conformationModal ? (
                        <ConfarmationMadal modalData={conformationModal}/>
                       
                    ) :  (<div></div>)
                }
                
            
        </div>

    </div>
  )
}

export default NestedView
