import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";

const RequirementField = ({name,label,register,errors,setValue,getValue}) => {
    const [requirement,setRequirement]= useState("");
    const [requirmentList , setRequiremtList] = useState([]);

    useEffect ( ()=> {
        register(name, {
            requied:true,
            validate:(value) => value.length > 0
        })
    },[]);

    useEffect ( ()=> {
        setValue(name,requirmentList);
    },[requirmentList])

    const handleAddRequiremt = () => {
        if(requirement){
            setRequiremtList([...requirmentList,requirement]);
            setRequirement("");
        }
        
    }

    const handleRemoveRequiremt = (index) => {
        const updateRequirmentList = [...requirmentList];
        updateRequirmentList.splice(index,1);
        setRequiremtList(updateRequirmentList);
    }

  return (
    <div className='flex flex-col gap-[6px] items-start w-full'>
      <label className='text-sm font-inter font-normal'htmlFor={name}>
        {label} 
        <sup className='text-[#de1212] text-center'>*</sup>
      </label>
      <div className='w-full'>
        <input type="text" id={name} value={requirement} 
        placeholder={"Enter course requirment"}
        onChange={(e)=>setRequirement(e.target.value)} 
        className='bg-richblack-700  w-full rounded-[0.5rem] border-b-[2px] border-b-richblack-400 text-richblack-5 p-[12px]'
        />
        <button type='button' onClick={()=>handleAddRequiremt()} 
        className='font-semibold text-yellow-50 mt-3'>Add</button>
      </div>
      {
        requirmentList.length > 0 && (
            <ul className='flex flex-col gap-2'>
                {
                    requirmentList.map((requirement,index) => {
                       return <li key={index} className='flex gap-2 transition-all duration-75 items-center'>
                            <span className='text-sm font-inter text-richblack-900 bg-yellow-200 py-1 px-2 rounded-md'>{requirement}</span>
                            <RxCross1 onClick={() =>handleRemoveRequiremt(index)} className='cursor-pointer text-richblack-50'/>
                        </li>
                    })
                }
            </ul>
        )
      }
      {
        errors[name] && (
            <span className='text-[#de1212] text-sm font-medium mt-1'>{label} is required *</span>
        )
      }
    </div>
  )
}

export default RequirementField
