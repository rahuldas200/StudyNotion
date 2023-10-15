import React, { useState } from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { logout } from '../../../Services/operations/authAPI'
import { useDispatch, useSelector } from 'react-redux'
import SideBarLink from './SideBarLink'
import { VscSettingsGear, VscSignOut } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import ConfarmationMadal from '../Common/ConfarmationMadal'

const SideBar = () => {

    const {user ,loading: profileLoading} = useSelector( (state) => state.profile)
    const {loading:authLoading} = useSelector ( (state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ConfirmationMadal , setConfirmationModal] = useState(null)
    

    if(profileLoading || authLoading){
        return (
            <div className='mt-10'>
                Loading..
            </div>
        )
    }

  return (
    <div className=''>
      
        <div className='flex min-w-[222px] flex-col border-r border-r-richblack-700
            h-[calc(100vh-3.5rem)] bg-richblack-800 py-10'>
                <div className='flex flex-col'>
                    {
                        sidebarLinks.map( (link) => {
                            if(link.type && user?.accountType !== link.type)
                                return null;
                                return(
                                    <SideBarLink key={link.id} link={link} iconName={link.icon}/>
                                )
                        })
                    }

                </div>

                <div className='mx-auto mt-6 mb-1 h-[1px] w-10/12 bg-richblack-600'></div>
                
                <div className='flex flex-col'>
                    <SideBarLink
                        link={
                                {
                                    name:"Settings" ,
                                    path : "/dashboard/settings"
                                }
                            }
                        iconName={"VscSettingsGear"}
                    />

                    <button 
                        onClick={ () => setConfirmationModal({
                            text1:"Are you Sure?",
                            text2: "You will be logged out of your account",
                            btn1Text:"Log out",
                            btn2Text :"Cancel",
                            btn1Handler : () => dispatch(logout(navigate)),
                            btn2Handler : () => setConfirmationModal(null)
                        })}

                        className='text-sm font-medium text-richblack-300   px-6 py-2'                        
                    >
                       
                        <div
                            className='flex items-center gap-x-2 p-1'>
                            <VscSignOut className='text-lg'/>
                            <span>Logout</span>
                        </div>
                    
                    </button>

                    

                </div>
        </div>
    {ConfirmationMadal && <ConfarmationMadal modalData= {ConfirmationMadal} />}
    </div>
  )
}

export default SideBar
