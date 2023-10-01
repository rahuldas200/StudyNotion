import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HighlightText from '../Components/core/HomePage/HighlightText'
import CTAButton from '../Components/core/HomePage/Button'
import banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../Components/core/HomePage/CodeBlocks'

function Home() {

  return (
    <div>
        {/* section 1 */}

        <div className='relative mx-auto flex flex-col w-11/12 items-center
            text-white max-w-maxContent'>

            <Link to={"/signup"}>

                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                 transition-all duration-200 hover:scale-95 w-fit'>
                    <div className='flex items-center gap-2 rounded-full px-10 py-[5px]
                    group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>

            </Link>

            <div className='text-center text-4xl font-semibold mt-4'>
                Empower Your Future with
                <HighlightText text={"Coding Skills"}/>
            </div>

            <div className='w-[90%] text-center text-lg font-bold text-richblack-300 mt-2'>
                With our online coding courses, you can learn at your own pace, 
                from anywhere in the world, and get access to a wealth of resources, 
                including hands-on projects, 
                quizzes, and personalized feedback from instructors
            </div>

            <div className='flex gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>

                <CTAButton active={false} linkto={"/login"}>
                    Book a Damo
                </CTAButton>

            </div>

            <div className='mx-3 my-16 max-w-2xl  rounded-md shadow-[-15px_-18px_156px_0px_#2c5282]'>
                <video
                muted
                loop
                autoPlay src={banner} type = 'video' className='rounded-md shadow-[8px_6px_0px_0px_#f7fafc]'>
                
                </video>
            </div>

            {/* code section 1 */}

            <div>
                <CodeBlocks
                    position ={"lg:flex-row"}
                    heading ={
                        <div>
                            Unlock your 
                            <HighlightText text = {"coding protential"}/>
                            with our online courses
                        </div>
                    }
                    subhading = {"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."} 
                    Catabtn1 = {
                        {
                            btnText:"try it yourself",
                            linkto:"/signup",
                            active:true,
                        }
                    }

                    Catabtn2 = {
                        {
                            btnText:"learn more",
                            linkto:"/login",
                            active:false,
                        }
                    }
                    CodeBlocks = {`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n <h1><ahref="/">Header</a></h1>\n <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                    text = {"text-yellow-200"}

                />
            </div>

            {/* code section 2 */}
            <div>
                <CodeBlocks
                    position ={"lg:flex-row-reverse"}
                    heading ={
                        <div>
                            Start coding <br/>
                            <HighlightText text = {"in seconds"}/>
                        </div>
                    }
                    subhading ={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson"} 
                    Catabtn1 ={
                        {
                            btnText:"Continue Lesson",
                            linkto:"/signup",
                            active:true,
                        }
                    }

                    Catabtn2 ={
                        {
                            btnText:"learn more",
                            linkto:"/login",
                            active:false,
                        }
                    }
                    CodeBlocks = {`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n <h1><ahref="/">Header</a></h1>\n <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                    text = {"text-yellow-200"}

                />
            </div>



        </div>


        {/* section 2 */}



        {/* section 3 */}



        {/* footer */}

    </div>
  )
}

export default Home
