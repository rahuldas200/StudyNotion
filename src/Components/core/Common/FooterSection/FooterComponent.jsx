import React from 'react'


export default function FooterComponent({footerData}) {
  return (
    <footer className='text-white flex gap-16 ml-10 max-sm:ml-0 max-sm:gap-x-24 max-sm:gap-y-1 max-sm:flex-wrap '>
      {footerData.map((section, index) => (

        <div  key={index} className=''>
          <h3 className='font-inter text-[16px] font-semibold leading-6 text-richblack-100
            '>{section.title}</h3>
          <ul>
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex} className='text-richblack-400 text-[14px] my-2'>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>

        </div>
      ))}
    </footer>
  )
}
