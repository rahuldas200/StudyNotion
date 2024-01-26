import { useSelector } from "react-redux"

import RenderCartCourse from "./RenderCartCourse";
import RenderTotalAmount from "./RenderTotalAmount";


export default function Cart() {
    const {total ,totalitem} = useSelector( (state) => state.auth);


    return (
        <div className="text-white">
            <h1>Your Cart</h1>
            <p>{totalitem} Courses in cart</p>

            {
                total > 0 
                ?(<div>
                    <RenderCartCourse/>
                    <RenderTotalAmount/>
                </div>)
                : (<div>
                    your cart is Empty
                </div>)
            }
        </div>
    )
}
