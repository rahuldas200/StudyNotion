import React from 'react'
import { useSelector } from 'react-redux'


const RenderTotalAmount = () => {
    const {total,cart} = useSelector( (state)=> state.cart);

    const handleBuyCourse = () => {
        const courses = cart.map((course)=> course._id);
        console.log("Bought those Course",courses);
    }

  return (
    <div>
      <p>Total :</p>
      <p>Rs {total}</p>
      {/* <IconBtn
        text="Buy now"
        onclick={handleBuyCourse}
        customClass={"w-full justify-center"}
      /> */}
      

    </div>
  )
}

export default RenderTotalAmount
