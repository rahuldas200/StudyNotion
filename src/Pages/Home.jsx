import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HighlightText from '../Components/core/HomePage/HighlightText'
import CTAButton from '../Components/core/HomePage/Button'
import banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../Components/core/HomePage/CodeBlocks'
import Footer from '../Components/core/FooterSection/footer'
import TimeLineSection from "../Components/core/HomePage/TimeLineSection"
import LearningLengugeSection from '../Components/core/HomePage/LearningLengugeSection'
import InstructorSection from '../Components/core/HomePage/InstructorSection'
import ExploreMore from "../Components/core/HomePage/ExploreMore"


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

            <div className='mx-3 my-16 max-w-2xl  rounded-md shadow-[-15px_-18px_156px_0px_#2c5282] sm:'>
                <video
                muted
                loop
                autoPlay src={banner} type = 'video' className='rounded-md shadow-[8px_6px_0px_0px_#f7fafc]'>
                
                </video>
            </div>

            {/* code section 1 */}

            <div>
                <CodeBlocks
                    position ={"lg:flex-row sm:flex-col"}
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

            {/* explore Sectio */}

            <ExploreMore/>

        </div>


        {/* section 2 */}

        <div className='bg-pure-greys-5 text-richblack-700  mt-8'>
            {/* part 1 */}
            <div className='homepage_bg h-[333px] flex justify-center mt-10'>
                <div className='w-11/12 max-w-maxContent flex items-center justify-center gap-5 max-auto'>
                    <div className='flex gap-7 text-white'>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-2'>
                                    Explore full catalog
                                    <FaArrowRight/>
                                </div>
                               
                            </CTAButton>
                    </div>

                    <div className='shadow-[0px_0px_7px_5px_#718096] rounded-lg'>
                      <CTAButton active={false} linkto={"/signUp"}>
                        Learn more
                      </CTAButton>
                    </div>

                </div>
            </div>

            {/* part 2 */}
            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-7'>
                <div className=' flex flex-row gap-14 my-12'>
                    <div className='font-semibold text-4xl w-[45%] '>
                        Get the skills you need for a
                        <HighlightText text={"job that is in demand"}/>
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                        <p className='text-[16px]'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive
                            specialist requires more than professional skills.</p>
                        <CTAButton active={true} linkto={"/signUp"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>

                    </div>

                </div>
                
                
            {/* part 3 */}
                <LearningLengugeSection/>
            {/* part 4 */}
                <TimeLineSection/>

            </div>

        </div>



        {/* section 3 */}

        <div className='w-12/11 mx-auto max-w-maxContent flex flex-col items-center justify-center gap-8
               bg-richblack-900 text-white '>

                <InstructorSection/>

                <h2 className='text-center text-4Xl font-semibold mt-10 mb-6'>
                    Review from other Learner
                </h2>

                {/* review slider */}

        </div>



        {/* footer */}
        
        <Footer/>

    </div>
  )
}

export default Home
