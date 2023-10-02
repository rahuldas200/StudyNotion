import React from 'react'
import CTAButton from './Button'
import {FaArrowRight} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({
    position , heading ,subhading ,Catabtn1 ,Catabtn2,backgtoundGradiant,CodeBlocks,text
}) => {

  return (
    <div className={`flex ${position} py-24 px-32 justify-between gap-20`}>

        {/* section 1 */}
        <div className='w-[50%] flex flex-col gap-8 my-3 ml-4 p-1 '>
            <div className='font-inter text-3xl'>
                {heading}   
            </div>
            <div className='text-richblack-300 font-bold'>
                {subhading}
            </div>

            <div className='flex gap-7 mt-7'>

                <CTAButton active={Catabtn1.active} link={Catabtn1.linkto}> 
                    <div className='flex gap-1 items-center'>
                        {Catabtn1.btnText}
                        <FaArrowRight/>
                    </div>
                </CTAButton>

                <CTAButton active={Catabtn2.active} link={Catabtn2.linkto}>       
                    {Catabtn2.btnText}
                </CTAButton>

            </div>

        </div>

        {/* section 2 */}

        <div className='text-[14px] w-[100%] h-[100%] lg:w-[500px] relative'>
            <div className='w-[372.949px] h-[257.054px] codeBlockgradient  absolute'></div>
            {/* home hork - Bg greadient */}
            <div className='codeBlockColor pt-1 pb-1 flex my-3 mt-6 pr-10' >
                <div className=' text-center flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>
                <div className={`w-[90%] flex flex-col gap-2 font-bold ${text} font-mono  pr-2`}>
                    <TypeAnimation 
                        sequence={[CodeBlocks ,1000]}  
                        repeat={Infinity}
                        omitDeletionAnimation = {true}
                    />

                </div>
            </div>
        </div>
      
    </div>

    
  )
}

export default CodeBlocks
