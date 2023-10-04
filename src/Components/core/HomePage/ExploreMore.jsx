import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import HighlightText from './HighlightText';
import {FaUsers }from 'react-icons/fa'
import{TbBinaryTree} from 'react-icons/tb'


const tabName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
];

const ExploreMore = () => {

    const [currentTab ,setCurrentTab] = useState([tabName[0]]);
    const [courses ,setCourses] = useState(HomePageExplore[0].courses);
   

    const setMyCard = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses)        
    }

  return (
    <div className='relative w-11/12 flex flex-col justify-center items-center max-sm:w-full max-sm:items-start'>
        <div className='font-semibold text-4xl mb-5 '>
            Unlock the 
            <HighlightText text={"Power of code"}/>

        </div>

        <p className=' text-richblack-300 text-lg  mt-1'>
                Learn to build anything you can imagin
        </p>

        <div className='flex flex-row items-center justify-center w-fit text-white bg-richblack-800
         mb-5 border-[1px] rounded-md px-1 py-1 border-richblack-100 mt-16
           max-sm:w-full max-sm:flex-wrap'>
            {
                tabName.map( (element,index) => {
                    return (
                        <div key ={index} 
                            onClick={ () => setMyCard(element)}                           
                            className={`text-[16px] flex flex-row item-center gap-2 mx-2
                                max-sm:text-[16px] max-sm:mx-[7px] max-sm:my-[4px] max-sm:gap-2 max-sm:p-[9px]
                                ${currentTab === element 
                                ? "bg-richblack-900 text-richblack-5 font-medium"
                                : "text-richblack-200"} 
                                    rounded-md transition-all duration-200 cursor-pointer
                                    hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2 text-white`}> 
                            {element} 
                        </div>
                    )
                })
            }
        </div>

        <div className=' h-[180px] max-sm:h-0'></div>
        {/* course card grup */}
        <div className='absolute flex flex-row gap-9 justify-between w-full -bottom-36 
                        max-sm:relative max-sm:flex-col'>
            {
                courses.map( (element, index) => {
                    return (
                        <div key={index} 
                            className={`${index === 0 ? "bg-white text shadow-[12px_12px_0px_0px_#FAEF03] " : "bg-richblack-800"}`}>
                            <div className='flex gap-4 flex-col pt-8 px-6 pb-12'>
                                <h1 className={`${index === 0 ? "text-richblack-900" : "text-richblack-25"}
                                font-bold text-2xl`}>
                                    {element.heading}
                                </h1>
                                <div className={`${index === 0 ? "text-richblack-600" : "text-richblack-300"}`}>
                                    {element.description}
                                </div>
                            </div>

                            <div className={`${index === 0 ? "text-blue-300 border-t-blue-300" : "text-richblack-300 border-t-richblack-500"}
                                flex gap-6 justify-between py-4 px-8 text-base font-bold border-dashed border-t-2 `}>
                                <div className='flex items-center gap-3'>
                                    <FaUsers/>
                                    {element.level}
                                </div>
                                <div className='flex items-center gap-3'>
                                    <TbBinaryTree/>
                                    {element.lessionNumber}
                                </div>
                            </div>

                        </div>
                    );
                })
            }
        </div>

      
    </div>
  )
}

export default ExploreMore
