import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";

const ChipInput = ({label,name,placeholder,register,errors,setValue,getvalue}) => {

    const [tag,setTag] = useState("");
    const [taglist , setTagList] = useState([]);

    useEffect ( ()=> {
        register(name, {
            requied:true,
            validate:(value) => value.length > 0
        })
    },[]);

    useEffect( ()=> {
        setValue(name,taglist);
        
    },[taglist]);

    const handleAddTag = ()=> {
        if(tag){
            setTagList([...taglist,tag]);
            setTag("");
        }
        return ;
    }

    const handleKeyDown = (event)=> {
        if(event.key === ',' || event.keyCode === 13 ){
            handleAddTag();
            event.preventDefault();
        }
    }

    const handleRemoveTag = (index) => {
        const updatedTagList = [...taglist];
        updatedTagList.splice(index,1);
        setTagList(updatedTagList);
    }

   

  return (
    <div className='flex flex-col gap-[6px] items-start w-full '>
      <label className='text-sm font-inter font-normal'>
        {label} 
        <sup className='text-[#de1212] text-center'>*</sup>
        </label>
      <div className='flex flex-wrap gap-4'>
        {
            taglist.map( (tag,index) =>(
                <div key={index} className='flex gap-2 justify-center items-center mb-4 rounded-md text-black'>
                    <p className='px-2 py-1 bg-yellow-100 rounded-md'>{tag}</p>
                    <RxCross1 onClick={()=> handleRemoveTag(index)} className='text-richblack-25 cursor-pointer' />
                </div>
            )) 
        }
      </div>

      <div className='w-full'>
        <input type="text" id={name} value={tag} placeholder={placeholder}
            onChange={ (e)=> setTag(e.target.value)}
            onKeyDown={handleKeyDown}
            className='bg-richblack-700 w-full rounded-[0.5rem] border-b-[2px] border-b-richblack-400 text-richblack-5 p-[12px]'
         />
         {
            errors.name &&  (
                <span className='text-[#de1212] text-sm font-medium mt-1'>Tags are required ** </span>
            )
         }
      </div>


    </div>
  )
}

export default ChipInput
