import { apiConnector } from "../apiconnector";
import { profileEndpoints } from '../apis';
import { toast } from 'react-hot-toast';

const {
    GET_USER_DETAILS_API,
    GET_ENROLLED_COURSES_API,
} = profileEndpoints;



export async function getUserEnrolledCourses(token) {
    const toastId = toast.loading("Loading..."); // Corrected typo in the loading message
    let result = [];

    try {
        const response = await apiConnector(
            "GET",
            GET_ENROLLED_COURSES_API,
            null,
            {
                Authorization: `Bearer ${token}`,
                
            }
        );

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        result = response.data.data;
    } catch (error) {
        console.log("GET_USER_ENROLLED_COURSE_API_ERROR...", error);
        toast.error("Could Not Get Enrolled Courses");
    }

    toast.dismiss(toastId);
    return result;
}

export function getUserDetails(token, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
          Authorization: `Bearer ${token}`,
        })
        console.log("GET_USER_DETAILS API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        const userImage = response.data.data.image
          ? response.data.data.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
        dispatch(setUser({ ...response.data.data, image: userImage }))
      } catch (error) {
        dispatch(logout(navigate))
        console.log("GET_USER_DETAILS API ERROR............", error)
        toast.error("Could Not Get User Details")
      }
      toast.dismiss(toastId)
      dispatch(setLoading(false))
    }
  }