import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import IconBtn from '../Common/IconBtn';

const Myprofile = () => {

  const {user} = useSelector( (state) => state.profile);
  const navigate = useNavigate();
  console.log(user)
  const location = useLocation();

  return (
    <div className='flex flex-col'>
      
      <div className='py-6 w-full pl-6'>
        <div className=' flex gap-3 text-richblack-300 '>

          <p>Home</p> /
          <p>Dashboard</p> /
          <p className='text-yellow-300'>{location.pathname.split("/")[2]}</p> 

        </div>
        
        <h1 className='text-richblack-5 text-3xl mt-2 font-inter'>
          My profile
        </h1>
      </div>


      {/* section 1 */}

      <div className=' w-11/12 mx-auto my-8 flex flex-col gap-4 ml-52 '>
        <div className='text-white  flex justify-between p-6 gap-5 rounded-md bg-richblack-800 items-center max-w-[700px]'>
          <div className='flex gap-6 items-center '>
            <img src={user?.image} 
                alt={`profile-${user.firstName}`} 
                className='aspect-square w-[78px] object-cover rounded-full'
            />

            <div className='flex flex-col gap-1'>

              <p className='text-lg text-richblack-5'>
                {`${user?.firstName} ${user?.lastName}`}
              </p>

              <p className='text-richblack-300'>
                {user?.email}
              </p>

            </div>

          </div>

          <div className='w-fit'>

            <IconBtn
              text="Edit"
              onClick = { () => {
                navigate("/dashbord/settings")
              }}
            />
          </div>
        </div>

        <div className='p-6 bg-richblack-800 flex flex-col gap-4 rounded-md max-w-[700px]'>
            <div className='flex justify-between items-center'>
              <h1 className='text-lg text-richblack-5 font-inter'>
                Personal Details
              </h1>

              <div className='w-fit'>

                <IconBtn
                  text="Edit"
                  onClick = { () => {
                    navigate("/dashbord/settings")
                  }}
                />
              </div>
            </div>

            <div className=' flex'>
              <div className='text-white  w-[50%]'>
                <p className='text-richblack-600'> First name</p>
                <p>{user?.firstName}</p>
              </div>

              <div className='text-white'>
                <p className='text-richblack-600'>Last name</p>
                <p>{user?.lastName}</p>
              </div>

            </div>

            <div className=' flex'>
              <div className='text-white  w-[50%]'>
                <p className='text-richblack-600'>Email</p>
                <p>{user?.email}</p>
              </div>

              <div className='text-white'>
                <p className='text-richblack-600'>Phone Number</p>
                <p>{user?.additionalDetails?.contactNumber}</p>
              </div>

            </div>

        </div>
      </div>
    </div>
  )
}

export default Myprofile
