import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {AiFillCaretDown} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import {GiNetworkBars} from 'react-icons/gi'
import {CiLogout} from 'react-icons/ci'
import {logout} from '../../../Services/operations/authAPI'



const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector( (state) => state.profile);
  const {image} = user;
  const [clicked , setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className='text-white relative cursor-pointer group select-none'>

      <div onClick={handleClick}
        className='flex gap-2 justify-center items-center '>
          <img src={image} alt=""  className='w-7 h-7 rounded-full'/>
          <AiFillCaretDown/>
      </div>
      
      {
        clicked ? (
          <div className= 'absolute top-12 -left-8 text-base  bg-richblack-800 flex flex-col gap-1 py-2 px-1 rounded-md group-hover:visible'>
            <Link className='flex gap-3 items-center hover:bg-richblack-500 p-3 rounded-md'>
              <GiNetworkBars/>
              <p>Dashbord</p>          
            </Link>

            <div onClick={ ()=> dispatch(logout(navigate))}
              className='flex gap-3 items-center hover:bg-richblack-500 p-3 rounded-md'>
              <CiLogout/>
              <p className='text-[#ED2121]'>Log out</p>
            </div>
      </div>
        ) : (
        <div></div>
        )
      }
      

    </div>
  )
}

export default ProfileDropDown
