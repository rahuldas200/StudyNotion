import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../Common/IconBtn';
import { IoMdTime } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { PiCurrencyInr } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Mycourse = () => {
    const user = localStorage.getItem("user");

    const handleEdit = (e) => {
        console.log("click Edit");
    }

    const handleDelete = (e) => {
        console.log("click Delete button");
    }

  return (
    <div className='text-white'>
      <div>
        <h1>My Courses</h1>
        <Link to={"add-course"}>
            <IconBtn
                text={"new"}
                
            />
        </Link>
      </div>

      <div>
        <div>
            <p>Courses</p>
            <p>Duration</p>
            <p>Price</p>
            <p>Action</p>
        </div>

        {
            user.courses ? (
                user.courses.map ((course,index) => {
                    <div key={index}>
                        <div>
                            <img src={course.thumbnail} alt="" />
                            <div>
                                <h1>{course.courseName}</h1>
                                <p>{course.courseDescription}</p>
                                <p>Created:</p>
                                <div>
                                    {
                                        course.status === Draft ? (<IoMdTime/>) : (<FaCheckCircle/>)
                                    }
                                <p>{course.status}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>{course.courseDescription}</p>
                            <p><PiCurrencyInr/> {course.price}</p>
                            <div>
                                <button
                                    onClick={handleEdit}
                                > 
                                    <MdModeEdit/> 
                                </button>
                                <button onClick={handleDelete}>
                                     <AiTwotoneDelete/>
                                </button>
                            </div>
                        </div>
                    </div>
                })
            ) 
            : (<div>You have not any course</div>)
        }
      </div>
    </div>
  )
}

export default Mycourse
