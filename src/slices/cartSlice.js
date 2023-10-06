import {createSlice} from "@reduxjs/toolkit"
// import { Toast } from "react-hot-toast";

const initialState = {
    totalItem : localStorage.getItem("totalItem") ? JSON.parse(localStorage.getItem("totalItem")) : 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setTotalItem(state , value) {
            state.token = value.payload;
        }

        // add to card
        // removefromCard
        //reset card
    }
})
 

export const {setTotalItem} = cartSlice.actions;
export default cartSlice.reducers