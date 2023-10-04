import React from 'react'
import FooterLogo from "../../../assets/Logo/Logo-Full-Light.png"
import FooterComponent from './FooterComponent'
import { FooterLink2 } from '../../../data/footer-links'
import {FooterLeftLink_1 , FooterLeftLink_2 ,
        FooterLeftLink_3 , FooterLeftLink_4 , 
        FooterLeftLink_5 } from '../../../data/footer-left'

import {BsFacebook , BsGoogle , BsTwitter, BsYoutube} from 'react-icons/bs'


const Nav = () => {
  return (
    <footer className='bg-richblack-800'>
        <div className='w-11/12 max-w-maxContent mx-auto  flex flex-col py-14 sm:mx-auto '>
                    {/* top section */}
            <div className='w-[100%] flex max-sm:w-fit max-sm:flex-col'>
                {/* left section */}
                <div className='w-[50%] flex gap-8 border-r-[1px] border-r-[#2C333F] 
                    max-sm:flex-wrap max-sm:w-full max-sm:gap-x-12 max-sm:border-0'>

                    <div className='flex flex-col gap-3 max-sm:items-start'>
                        <img src={FooterLogo} alt="" className='w-[10rem] h-8 ml-7 max-sm:ml-0' />
                        <div className=''>
                            <FooterComponent footerData = {FooterLeftLink_1} />
                            <div className='flex gap-4 ml-7 mt-5 max-sm:ml-0'>
                            <div className='text-blue-300 text-lg cursor-pointer'><BsFacebook/></div>
                            <div className='text-lg cursor-pointer text-[#01A32F]'><BsGoogle/></div>
                            <div className='text-blue-100 text-lg cursor-pointer'><BsTwitter></BsTwitter></div>
                            <div className='text-[#F50303] text-lg cursor-pointer'><BsYoutube/></div>
                            </div>
                        </div>
                    </div>

                    <div className='ml-5 '>
                        <FooterComponent footerData = {FooterLeftLink_2} />    
                        <FooterComponent footerData = {FooterLeftLink_3} />
                    </div>

                    <div className='ml-5 max-sm:flex max-sm:w-full  max-sm:ml-0 gap-x-28' >
                        <FooterComponent footerData = {FooterLeftLink_4} /> 
                        <FooterComponent footerData = {FooterLeftLink_5} /> 
                    </div>
                   

                </div>

                {/* right section */}
                <div className='ml-5 max-sm:ml-0 max-sm:flex max-sm:gap-64'>
                    <FooterComponent footerData = {FooterLink2}/>
                </div>
            </div>

            {/* button section */}

            <div className='flex text-[14px] font-medium text-richblack-300 justify-between pt-6 mt-5 border-t-[1px] border-t-[#2C333F]
                max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-4 '>
                <div className='flex  gap-4 max-sm:gap-0 '>
                    <p className='max-sm:px-2 max-sm:border-r max-sm:border-r-richblack-50'>Privacy Policy</p>
                    <p className='max-sm:px-2 max-sm:border-r max-sm:border-r-richblack-50'>Cookie Policy</p>
                    <p className='max-sm:px-2'>Terms</p>
                </div>
                <div>
                    <p>Made with <span className='text-pink-200'>♥</span>  CodeHelp © 2023 Studynotion</p>
                </div>
            </div>
        </div>
      
    </footer>
  )
}

export default Nav
