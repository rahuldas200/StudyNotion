import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { removeFromCart } from '../../../../slices/cartSlice'

const RenderCartCourse = () => {

    const {cart} = useSelector( (state) => state.cart)
    const dispatch = useDispatch();

  return (
    <div>
      {
        cart.map( (course,index) => {
            <div>
                <div>
                    <img src={course?.thumbnail}/>
                    <div>
                        <p>{course?.courseName}</p>
                        <p>{course?.catagory?.name}</p>
                        <div>
                            <span>4.8</span>
                            {/* <ReactStar
                                count={5}
                                size={20}
                                edit={false}
                                activecolor = "fffff"
                                emptyIcon={}
                                fullIcon={}
                            /> */}
                            <span>{course?.retingAndReviews?.length} Rating</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        onClick={()=> dispatch(removeFromCart(course._id))}
                    >
                        <RiDeleteBin6Line/>
                        <span>Remove</span>
                    </button>

                    <p>{course?.price}</p>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default RenderCartCourse
