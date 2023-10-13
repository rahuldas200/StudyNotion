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


  return (
    <div className='relative flex min-h[calc(100vh-3.5rem)]'>
      <SideBar/>

      <div className='h-[calc(100vh-3.5rem)] w-full'>
      {/* mx-auto w-11/12  max-w-[1000px]*/}
            <div className=''>
                <Outlet/>
            </div>
      </div>
    </div>
  )
}

export default Dashbord
