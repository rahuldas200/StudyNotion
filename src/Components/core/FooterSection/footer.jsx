import React from 'react'
import FooterLogo from "../../../assets/Logo/Logo-Full-Light.png"
import FooterComponent from './FooterComponent'
import { FooterLink2 } from '../../../data/footer-links'
import {FooterLeftLink_1 , FooterLeftLink_2 ,
        FooterLeftLink_3 , FooterLeftLink_4 , FooterLeftLink_5 } from '../../../data/footer-left'

const Nav = () => {
  return (
    <footer className='w-screen py-14 px-28 flex flex-col bg-richblack-800'>
        {/* top section */}
        <div className='w-[100%] flex '>
            {/* left section */}
            <div className='w-[50%] flex gap-8 border-r-[1px] border-r-[#2C333F] '>

                <div className='flex flex-col gap-5'>
                    <img src={FooterLogo} alt="" className='w-[10rem] h-8 ml-7' />
                    <div className=''>
                        <FooterComponent footerData = {FooterLeftLink_1} />
                    </div>
                </div>

                <div className='ml-5'>
                    <FooterComponent footerData = {FooterLeftLink_2} />    
                    <FooterComponent footerData = {FooterLeftLink_3} />
                </div>

                <div className='ml-5'>
                    <FooterComponent footerData = {FooterLeftLink_4} /> 
                    <FooterComponent footerData = {FooterLeftLink_5} /> 
                </div>
                

            </div>

            {/* right section */}
            <div className='ml-5'>
                <FooterComponent footerData = {FooterLink2}/>
            </div>
        </div>

        {/* button section */}

        <div className='flex text-[14px] font-medium text-richblack-300 justify-between pt-6 mt-5 border-t-[1px] border-t-[#2C333F] '>
            <div className='flex  gap-4'>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Terms</p>
            </div>
            <div>
                <p>Made with <span className='text-pink-200'>♥</span>  CodeHelp © 2023 Studynotion</p>
            </div>
        </div>
      
    </footer>
  )
}

export default Nav
