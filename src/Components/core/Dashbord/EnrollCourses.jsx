
import ProgressBar from '@ramonak/react-progress-bar';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserEnrolledCourses } from '../../../Services/operations/profileAPI';
import { getAllCourses } from '../../../Services/operations/courseDetailAPI';

const EnrollCourses = () => {

  const {token} = useSelector((state) => state.auth);
  const [enrolledCourses , setEnrolledCourses] = useState(null);

  const getEnrolledCourses = async() => {
    try{
      const response =  await getUserEnrolledCourses(token);
      setEnrolledCourses(response);

    }catch{
      console.log("Unable to fetch enroll courses");
    }
  }

  useEffect( ()=> {
    getEnrolledCourses();
  },[])

  return (
    <div>
      <h1 className='text-white'>Enrolled Courses</h1>
      {
        !enrolledCourses ? (<div> 
          loading... 
        </div>)
        : !enrolledCourses.length ? (<p className='text-white'> You have not enrolled any courses</p>)
        :(
          <div>
            <div>
              <p>Course Name</p>
              <p>Durations</p>
              <p>progress</p>
            </div>
            {/* cars */}
            {
              enrolledCourses.map((course,index) => {
                <div>
                  <div>
                    <img src={course.thumbnail}/>
                    <div>
                      <p>{course.courseName}</p>
                      <p>{course.courseDescription}</p>
                    </div>
                  </div>

                  <div>
                      {course?.totalDuration} 
                  </div>

                  <div>
                    <p>progress: {course.progressPercentage || 0}%</p>
                    
                    <ProgressBar
                      completed={course.progressPercentage} 
                      height='8px'
                      isLabelVisible={false}
                    />
                  </div>
                </div>
              })
            }
          </div>
        )
      }
      
    </div>
  )
}

export default EnrollCourses


