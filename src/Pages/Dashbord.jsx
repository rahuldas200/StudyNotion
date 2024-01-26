import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import SideBar from '../Components/core/Dashbord/SideBar'

const Dashbord = () => {

    const {loading:authLoading } = useSelector( (state) => state.auth);
    const {loading:profileLoading } = useSelector( (state) => state.profile);

    if(profileLoading || authLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    // min-h[calc(100vh-3.5rem)]
    // h-[calc(100vh-3.5rem)]
  return (
    <div className='flex relative'>
      <SideBar/>

      <div className='w-full'>
            <div className=''>
                <Outlet/>
            </div>
      </div>
    </div>
  )
}

export default Dashbord
