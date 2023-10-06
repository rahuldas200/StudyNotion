import React from 'react' 
import { Link, matchPath } from 'react-router-dom'
import logo from '../../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks } from '../../../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {BsCartDash} from 'react-icons/bs'


const Navbar = () => {
  const {token} = useSelector( (state) => state.auth);
  const {user} = useSelector( (state) => state.profile);
  const {totalItems} = useSelector ( (state) => state.cart);

  const location = useLocation();

  // for select current route color in nav bar ::: after click in any nav link if your current location and nav link path are same 
  
  const matchRoute = (route) => {
    return matchPath({path:route},location.pathname);

  }


  return (
    <div className='flex h-14 items-center justify-center border-b border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>

        <Link to={"/"}>
          <img src={logo} alt=''
           width={160} height={42}
          />
        </Link>

        {/* nav links */}

        <nav>
          <ul className='flex gap-x-6 text-richblack-25'>
            {
              NavbarLinks.map( (link , index) => {
                 return <li key={index}>
                    {
                      link.title === 'Catalog'? (<div></div>) : (
                        <Link to={link?.path}>
                            <p className={`${matchRoute(link?.path) ? " text-yellow-25" : " text-richblack-25"}`}>
                              {link.title}
                            </p>
                        </Link>
                      )
                    }
                  </li>
              })
            }
          </ul>
        </nav>

        {/* login | signup | dashbord */}

        <div className='flex gap-x-4 items-center'>
          {
            user && user?.accountType !== "Instructor" && (
              <Link to={'/dashbord/card'} className='relative'>
                <BsCartDash/>
                {
                  totalItems > 0 && (
                    <span>
                      {totalItems}
                    </span>
                  )
                }
              </Link>
            )
          }
          
        </div>
        
      </div>
      
    </div>
  )
}

export default Navbar

