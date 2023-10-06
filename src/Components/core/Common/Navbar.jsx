import React, { useEffect, useState } from 'react' 
import { Link, matchPath } from 'react-router-dom'
import logo from '../../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks } from '../../../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {BsCartDash} from 'react-icons/bs'
import ProfileDropDown from '../Auth/ProfileDropDown'
import { apiConnector } from '../../../Services/apiconnector'
import { categories } from '../../../Services/apis'
import {BsFillCaretDownFill } from 'react-icons/bs'

const sublinks = [
  {
    title:"Python",
    link:"catalog/python",
  },
  {
    title:"WebDev",
    link:"catalog/webDev",
  }
]


const Navbar = () => {
  const {token} = useSelector( (state) => state.auth);
  const {user} = useSelector( (state) => state.profile);
  const {totalItems} = useSelector ( (state) => state.cart);

  const location = useLocation();

  // const [subLinks ,setSubLinks] = useState([]);


  // const fetchSublinks = async () =>{
  //   try{

  //     const result = await apiConnector("GET",categories.CATEGORIES_API);
  //     console.log("printing sunlinks result " , result);
  //     setSubLinks(result.data.data);

  //   }catch(error) {
  //     console.log("could not fetch categori list")
  //   }
  // }

  // useEffect( () => {
  //   fetchSublinks();
  // },[])

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
                      link.title === 'Catalog'? (
                       <div className='relative flex text-white items-center gap-2 group cursor-pointer'>

                          <p>{link.title}</p>
                          <BsFillCaretDownFill/>

                          <div className='z-10 invisible absolute left-[50%] translate-x-[-50%] translate-y-[50%]  -top-5 flex flex-col rounded-md 
                          bg-richblack-900 text-richblack-25 
                            opacity-0 transition-all duration-200 p-3 group-hover:visible
                            group-hover:opacity-100 lg:max-w-[300px] w-[200px] shadow-[0px_0px_0px_2px_#319795] text-base'>

                              {/* <div className='absolute left-[51%] top-1 h-5 w-6 rotate-45  bg-richblack-900
                                translate-x-[80%] translate-y-[-45%]'>
                              </div> */}

                              {
                                sublinks.length ? (
                                  sublinks.map( (element , index) => {
                                    return <Link to={`${element.link}`} key={index}>
                                      <div className='flex flex-col items-center my-[6px] py-1 shadow-[0px_0px_0px_2px_#319795] rounded-md'>
                                        {element.title}
                                      </div>
                                    </Link>
                                  })
                                ) : (<div></div>)
                              }

                          </div>

                        </div>
                      ) : (
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

          {
            token === null && (
              <Link to= {'/login'}>
                <button className='border border-richblack-800 px-2 py-1 text-richblack-100 rounded-md shadow-[0px_0px_0px_2px_#319795]'>
                  login
                </button>
              </Link>
            )
          }
          {
            token === null && (
              <Link to= {'/signup'}>
                <button className='border border-richblack-800 px-2 py-1 text-richblack-100 rounded-md shadow-[0px_0px_0px_2px_#319795]'>
                  Sign up
                </button>
              </Link>
            )
          }
          {
            token !== null && <ProfileDropDown />
          }
          
        </div>
        
      </div>
      
    </div>
  )
}

export default Navbar

