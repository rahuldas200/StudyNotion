import React from 'react'
import * as Icons from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { NavLink, matchPath, useLocation } from 'react-router-dom'

const SideBarLink = ({link ,iconName}) => {

    const Icon = Icons[iconName]
    const location = useLocation();
    const dispatch = useDispatch();

    const mathchRoute = (route) => {
        return matchPath({path:route},location.pathname);
    }


  return (
   <NavLink 
        to={link.path}
        // onClick={}
        className={`relative px-6 py-2 ${mathchRoute(link.path) ? "bg-yellow-800 text-yellow-50": "bg-opacity-0 text-richblack-300"}`}
    >
        <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-300
        ' ${mathchRoute(link.path) ? " bg-yellow-300" : "bg-opacity-0"}`}>

        </span>

        <div className='flex items-center gap-x-2 p-1'>
            <Icon className="text-lg"/>
            <span className='text-sm'>{link.name}</span>

        </div>

   </NavLink>
  )
}

export default SideBarLink
