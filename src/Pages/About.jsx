import React, { useState } from 'react'
import HighlightText from '../Components/core/HomePage/HighlightText'
import about1 from '../assets/Images/aboutus1.webp'
import about2 from '../assets/Images/aboutus2.webp'
import about3 from '../assets/Images/aboutus3.webp'
import AboutPart2 from '../Components/core/AboutPage/AboutPart2'
import About4 from '../assets/Images/FoundingStory.png'
import CTAButton from '../Components/core/HomePage/Button'
import Component2 from '../Components/core/AboutPage/Component2'
import Footer from '../Components/core/Common/FooterSection/Footer'

import countryCodes from '../data/countrycode.json'
import ContactFrom from '../Components/core/Common/ContactFrom'



const UserData = [
    {
        Number: "5K",
        relatedString:"Active Students",
    },
    {
        Number: "10K+",
        relatedString:"Mentors",
    },
    {
        Number: "20+",
        relatedString:"Courses",
    },
    {
        Number: "50+",
        relatedString:"Awards",
    },

]

const About = () => {

  return (
    <div className=''>

        {/* about part 1  */}
        <div className='bg-richblack-800'>
            <div className='w-11/12 mx-auto h-[618px] pt-20 flex flex-col text-white  items-center gap-8 relative'>
                <div className='px-2 py-1 text '>
                        <p className='text-richblack-400'>About us</p>
                </div>
                <div className='flex flex-col px-14 max-w-[913px] gap-4 max-sm:max-w-maxContentTab max-sm:items-start max-sm:p-0 font-inter'>
                        <h1 className='text-4xl text-center max-sm:text-start max-sm:text-3xl'>Driving Innovation in Online Education for a <HighlightText text={"Brighter Future"}/> </h1>
                        <p className='text-center text-richblack-400 max-sm:text-start font-inter'> 
                            Studynotion is at the forefront of driving innovation in online education. 
                            We're passionate about creating a brighter future by offering cutting-edge courses,
                            leveraging emerging technologies, and nurturing a vibrant learning community.
                        </p>
                </div>

                <div className='flex gap-6 mt-8 lg:absolute -bottom-20  max-sm:invisible'>
                        <div>
                            <img src={about1} alt="" className='rounded-md' />
                        </div>
                        <div>
                            <img src={about2} alt="" className='rounded-md' />
                        </div>
                        <div>
                            <img src={about3} alt="" className='rounded-md' />
                        </div>
                </div>
            </div>
        </div>

        {/* about part 2 */}

        <div className='w-11/12 mx-auto max-sm:max-w-maxContentTab'>
            <div className='text-4xl text-white mt-[80px] py-44 text-center px-16 font-inter max-sm:text-start max-sm:p-0 max-sm:text-3xl'>
                " We are passionate about revolutionizing the way we learn. Our innovative platform <HighlightText text={"combines technology"}/>, 
               <span className='About-c1'> expertise </span>, and community to create an <span className='About-c2'>unparalleled educational experience</span>."
            </div>

        </div>

        <div className='w-11/12 mx-auto flex gap-24 max-sm:flex-col max-sm:mt-20'>
            
            <div className='w-[50%] max-sm:w-full'>
                <AboutPart2 
                        BigText={"Our Founding Story"}
                        smallText_1 = {`Our e-learning platform was born out of a shared vision and passion for transforming education.
                                        It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible,
                                        flexible, and high-quality learning opportunities in a rapidly evolving digital world.`}
                        smallText_2 = {`As experienced educators ourselves, we witnessed firsthand the limitations and challenges 
                                        of traditional education systems. We believed that education should not be confined to the walls 
                                        of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge
                                        these gaps and empower individuals from all walks of life to unlock their full potential`}
                        Color = {"AboutPart1_Color_1"}
                />
            </div>
            

            <div className='w-[50%] pr-6 py-6 max-sm:w-full max-sm:p-0'>
                <img className='p-3'
                 src={About4} alt="" />
            </div>

        </div>

        <div className='w-11/12 mx-auto flex gap-24 py-24 max-sm:flex-col '>
            <div className='w-[50%] pl-20 max-sm:w-full max-sm:pl-0 '>
                <AboutPart2 
                    BigText={"Our Vision"}
                    smallText_1={`With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize 
                                the way people learn. Our team of dedicated experts worked tirelessly to develop a
                                robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic
                                and interactive learning experience.`}
                    Color={"Our_Vision"}
                />
            </div>

            <div className='w-[50%] pl-6 max-sm:w-full max-sm:pl-0'>
                <AboutPart2 
                    BigText={"Our Mission"}
                    smallText_1={`our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners,
                                where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment 
                                of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.`}
                    Color={"Our_Mission"}
                />
            </div>
        </div>

        <div className='bg-richblack-700'>
            <div className='w-11/12 mx-auto mb-3'>
                <div className='flex justify-between gap-3 w-full py-20 max-sm:grid max-sm:grid-cols-2 '>
                    {
                        UserData.map( (element , index) => {
                        return( 
                            <div className='text-white flex flex-col w-full text-center rounded-md bg-richblack-800 p-3 gap-2
                                ' key={index}>
                                        <p className=' text-3xl text-richblack-50 font-bold'>
                                            {element.Number}
                                        </p>
                                        <div className='text-richblack-400'>
                                            {element.relatedString}
                                        </div>
                            </div>
                        )
                        })
                    }
                </div>
            </div>

        </div>

        <div className='w-11/12 mx-auto py-24 flex flex-col'>
           <div className='flex gap-14 h-[50%] max-sm:flex-col'>
                <div className='text-white w-[50%] max-sm:w-full'>
                        <h1 className='text-4xl mb-4 font-bold font-inter'>
                            World-Class Learning for <HighlightText text={" Anyone, Anywhere"}/>
                        </h1>
                        <p className='text-richblack-300 font-inter'>Studynotion partners with more than 275+ leading universities and 
                            companies to bring flexible, affordable, job-relevant online learning 
                            to individuals and organizations worldwide.
                        </p>

                        <div className='pt-9 w-32'>
                            <CTAButton active={true} linkto={"/signup"}>
                                lern more
                            </CTAButton>
                        </div>
                    </div>

                    <div className='flex w-[50%] h-[294px] max-sm:w-full max-sm:flex-col'>
                        <Component2 
                            bigText={"Curriculum Based on Industry Needs"}
                            smallText={"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."}
                            color={"bg-richblack-700"}
                        />
                        <Component2 
                            bigText={"Our Learning Methods"}
                            smallText={"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."}
                            color={"bg-richblack-800"}
                        />
                    </div>
           </div>

           <div className='flex  justify-between ml-[56px] h-[294px] max-sm:w-full max-sm:flex-col max-sm:h-auto max-sm:m-0'>
                    <Component2 
                            bigText={""}
                            smallText={""}
                            color={"bg-richblack-900 max-sm:invisible"}
                    />
                    <Component2 
                            bigText={"Certification"}
                            smallText={"The learning process uses the namely online and offline."}
                            color={"bg-richblack-700"}
                    />
                    <Component2 
                            bigText={"Rating Auto-grading"}
                            smallText={"You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor."}
                            color={"bg-richblack-800"}
                    />
                    <Component2 
                            bigText={"Ready to Work"}
                            smallText={"Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program."}
                            color={"bg-richblack-700"}
                    />
            </div>
        </div>

        <div className='w-11/12 max-w-maxContent mx-auto mt-24  flex-col justify-center items-center '>
            <div className='flex flex-col max-w-[700px] mx-auto gap-8 mb-11'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl font-bold text-richblack-25'>Get in Touch</h1>
                    <p className='text-base text-richblack-300'>We’d love to here for you, Please fill out this form.</p>
                </div>
                <div className='p-8'>
                    <ContactFrom/>
                </div>
            </div>

        </div>

        <div className='w-11/12 mx-auto'>
            <h2 className='text-center text-4xl font-semibold mt-10 mb-6 text-white'>
                    Review from other Learner
            </h2>

        </div>

        <Footer/>
    </div>
  )
}

export default About
