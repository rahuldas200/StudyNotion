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
  const [clicked , setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className='text-white relative'>

      <div onClick={handleClick}
        className='flex gap-2 justify-center items-center  cursor-pointer'>
          <img src={user?.image} alt=""  className='w-7 h-7 rounded-full'/>
          <AiFillCaretDown/>
      </div>
      
      {
        clicked ? (
          <div className= 'absolute z-10 top-12 -left-6 text-base  bg-richblack-800  flex flex-col gap-1 py-2 px-1 rounded-md'>
            <div className='hover:bg-yellow-100 p-3  rounded-md cursor-pointer'>
              <Link to={"dashboard/my-profile"}
                className='flex gap-3 items-center '>
                <GiNetworkBars/>
                <p>Dashbord</p>          
              </Link>
            </div>

            <div onClick={ () => dispatch(logout(navigate))}
              className='flex gap-3 items-center hover:bg-yellow-50 p-3 rounded-md cursor-pointer'>
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
