import React, { useEffect, useState } from 'react';
import { SlCloudUpload } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { IoCloudUploadOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import toast from 'react-hot-toast';

const ImageUpload = ({label,name,register,setValue,getvalues,errors,video,viewData,editData}) => {

  const [isDragging , setIsDragging] = useState(null);
  const [selectedFile , setSelectedFile] = useState(null);
  const [selectedVideo , setSelectedVideo] = useState(null);
  const [selectedImage , setSelectedImage] = useState(null);
  const {step } = useSelector( (state) => state.course);

  useEffect ( ()=> {
    register(name, {
        requied:true,
    })
  },[]);

  useEffect ( () => {
    setValue(name,selectedFile);
  },[selectedFile]);


  
  
  useEffect ( () => {
    if(viewData){
      setSelectedFile(viewData);
      setSelectedVideo(viewData)
    }
    else if(editData){
      setSelectedFile(editData);
      setSelectedVideo(editData);
    }
  },[])




  const fileCheck = (file) => {
    if(file) {
      setSelectedFile(file);
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (['mp4', 'avi', 'mkv', 'mov'].includes(fileExtension)) {
        setSelectedVideo(URL.createObjectURL(file));
      } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
       setSelectedImage(URL.createObjectURL(file));
      }
      else {
        toast.error("you can choose only image or video ")
        setSelectedFile(null);
      }
    }
    
  }

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  }
  const handleDragOver = (e) =>{
    e.preventDefault();
  }
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files[0];
    fileCheck(droppedFile);
    setIsDragging(false);
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    fileCheck(selectedFile);
    
  };

  const handleFileCancle = () =>{
    setSelectedFile(null);
    setSelectedImage(null);
    setSelectedVideo(null);
  }



  return (
    <div>

      <label htmlFor="" className='text-sm font-inter font-normal text-richblack-5'>
        {label} <sup className='text-[#de1212] text-center'> * </sup>
      </label>
      {
        selectedFile ? (
          <div  className='bg-richblack-600 p-3 rounded-md'>
            <div className='flex justify-between mx-5 my-1'>
              {
                viewData !== null ? (
                  <></>
                ) : (
                  <>
                    <p className='text-white'>Selected file name : {selectedFile.name}</p>
                    <button onClick={handleFileCancle} className='text-white'><RxCross2/></button>
                  </>
                )
              }
            </div>
            {
              selectedVideo &&  (
                <>                
                  <video controls className='w-full h-56 object-cover rounded-md'>
                    <source src={selectedVideo} />
                  </video>  
                </>
              )
            }

            {
              selectedImage && (
                <div>
                  <img src={selectedImage} className='w-full' alt="" />
                </div>
              )
            }
          </div>
        )
        : 
        (
      
          <div 
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className=' bg-richblack-600 py-8 px-3 flex flex-col gap-3 justify-center items-center border-[1px]  rounded-md border-dashed border-blue-400' >
          
            <div className='mt-5'>
              <div className='p-3 bg-richblack-800 rounded-full'>
                <IoCloudUploadOutline className='text-2xl text-yellow-100'/>
              </div>
            </div>

            <div>
              <div className='flex flex-col gap-3 text-base text-richblack-300'>
                <div>
                  <span>Drag and drop an image, or </span>
                  <input
                    type="file"
                    id={name}
                    className="hidden"
                    onChange={handleFileChange}
                    // ref={register}
                  />
                  <label htmlFor={name} className="text-yellow-100 cursor-pointer">Browse</label>
                </div>            
                <span>Max 6MB each (12MB for videos)</span>
              </div>

            </div>
            <ul className='flex justify-between  w-full px-36 text-richblack-300'>
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
            </ul>
            {
              errors.name && (
                <div>
                    {
                      step === 1 ? "Course thampnail is required" : "Lecture Video is required"
                    }
                </div>
              )
            }
          </div>
        )
      }
      
    </div>
  )
}
  


export default ImageUpload;
