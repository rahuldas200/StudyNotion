import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../Slices/authSlice"
import cartReducer from "../Slices/cartSlice"
import courseReducer from "../Slices/courseSlice"
import profileReducer from "../Slices/profileSlice"
import viewCourseReducer from "../Slices/viewCourseSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  course: courseReducer,
  cart: cartReducer,
  viewCourse: viewCourseReducer,
})

export default rootReducer
