import React from 'react'


export default function FooterComponent({footerData}) {
  return (
    <footer className='text-white flex gap-16 ml-10'>
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
