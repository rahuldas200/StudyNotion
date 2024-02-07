import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { courseEndpoints } from "../apis"; 
import { categoriEndpoints } from "../apis";

const {
    CREATE_COURSE_API,
    ADD_COURSE_SECTION_API,
    UPDATE_COURSE_SECTION_API,
    DELETE_COURSE_SECTION_API,
    ADD_SUB_SECTION_API,
    UPDATE_SUB_SECTION_API,
    DELETE_SUB_SECTION_API,
    GET_ALL_COURSE_API,
    UPADTE_COURSE_DETAILS_API,
    GET_INSTRUCTOR_ALL_COURSE
    // GET_COURSE_DETAIL_API,
} = courseEndpoints;

const {
    GET_ALL_CATEGORY_API,
} = categoriEndpoints;

export async function getAllCourses () {
    const toastId = toast.loading("Loading..");
    let result = [];

    try {
        const response = await apiConnector("GET",GET_ALL_COURSE_API);
        if(!response?.data?.data){
            console.log("Could not fatch courses");
            
        }
        result = response?.data?.data;
        toast.dismiss(toastId);
        
    } catch (err) {
        console.log("Get all courses api error");
        console.error(err.message);
        toast.dismiss(toastId);
    }
    return result;
}

// fatching the available course categoris
export const fetchCourseCategories = async () => {
    let result = [];
    try{

        const response = await apiConnector("GET" , GET_ALL_CATEGORY_API);
        if(!response?.data?.data){
            throw new Error("Could not fatch All Course categoies");
        }
        result = response?.data?.data
        
    } catch(error){
        console.log("GET_ALL_CATEGORY_API Error.......",error);
        toast.error(error.message);
    }
    return result;     
}

export const addCourseDetails = async (data, token) => {
    let result = null ;
    const toastId = toast.loading("Loading....");

    try {
        const response  = await apiConnector("POST",CREATE_COURSE_API,data,{
            "Content-Type":"multipart/form-data",
            Authorization: `Bearer ${token}`,
        })

        console.log("CREATE COURSE API RESPONSE",response);

        if(!response.data.message){
            throw new Error("Could not Add course details");
        }
        toast.success("Course details added successfully");
        result = response?.data?.data

    }catch(error) {
        console.log("CREATE COURSE API ERROR .....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const addCourseSection = async (sectionName,courseId,token) => {
    let result = null;
    const toastId = toast.loading("Loading...");

    try{
        const response = await apiConnector("POST",ADD_COURSE_SECTION_API,{
            "sectionName":sectionName,
            "courseId":courseId,
        },{
            Authorization: `Bearer ${token}`,
        })
        console.log("Add course section api response",response);
        if(!response.data.message){
            throw new Error("Could not add course section");
        }
        toast.success("Course section add successfully");
        result = response?.data?.updatedCourse;

    }catch(error){
        console.log("Create Course section api error",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
    
}

export const updateCourseSection = async (data,token) => {
    let result = null ;
    const toastId = toast.loading("Loading...");


    try{
        const response = await apiConnector("POST",UPDATE_COURSE_SECTION_API , data,{
            Authorization: `Bearer ${token}`,
        })

        console.log("Update section API response",response);
        if(!response?.data?.message){
            throw new Error ("Could not update section");
        }
        toast.success("Section name is updated");
        result = response?.data.data;

    }catch(error){
        console.log("UPADATE SECTION API ERROR.....", error)
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const deleteCourseSection = async (data,token) => {
    let result = null;
    const toastId = toast.loading("Loading....");
    console.log(data);

    try{
        const response =  await apiConnector("POST",DELETE_COURSE_SECTION_API,data,{
            Authorization: `Bearer ${token}`,
        })

        console.log("Delete section API response",response);

        if(!response.data.success){
            throw new Error("could not delere section");
        }
        result = response?.data?.data

        console.log(result);

    }catch (error){
        console.log("DELETE SECTION API ERROR",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const createSubSection = async (data,token) => {
    let result = null;
    const toastId = toast.loading("Loading..");
        
    try{
        const response = await apiConnector("POST",ADD_SUB_SECTION_API, data ,{
            "Content-Type":"multipart/form-data",
            Authorization: `Bearer ${token}`,
        })

        console.log("Update sub section API response",response);

        if(!response){
            throw new Error("could not update sub section");
        }

        result = response?.data?.data;

    } catch(error) {
        console.log("Update SUBSECTION API ERROR",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const updateSubSection = async (data,token) =>{
    let result = null;
    const toastId = toast.loading("Loading..");
        
    try{
        const response = await apiConnector("POST",UPDATE_SUB_SECTION_API, data ,{
            "Content-Type":"multipart/form-data",
            Authorization: `Bearer ${token}`,
        })

        console.log("Update sub section API response",response);

        if(!response){
            throw new Error("could not update sub section");
        }

        result = response?.data?.data;
        console.log(result);

    } catch(error) {
        console.log("Update SUBSECTION API ERROR",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const deleteCourseSubsection = async (data,token) => {
    let result = null;
    const toastId = toast.loading("Loading..");
        
    try{
        const response = await apiConnector("POST",DELETE_SUB_SECTION_API, data ,{
            Authorization: `Bearer ${token}`,
        })

        console.log("Delete sub section API response",response);

        if(!response){
            throw new Error("could not delete sub section");
        }
        toast.success(response?.data?.message);

        result = response?.data?.data;

    } catch(error) {
        console.log("DELETE SUBSECTION API ERROR",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const editCourseDetails = async (data,token) => {
    const toastId = toast.loading("Loading..");
    let result = null;

    try {
        const response  = await apiConnector("POST",UPADTE_COURSE_DETAILS_API,data,{
            Authorization: `Bearer ${token}`,
        });

        console.log("Edit Course api response", response);
        if(!response?.data?.message){
            throw new Error("updation faild due to server error");
        }
        toast.success(response?.data?.message);
        result = response?.data?.data;

    }catch (error) {
        console.log("Edit course API error",error);
        toast.error(error);
    }

    toast.dismiss(toastId);
    return result;
}

export const fetchInstructorCourse = async (data,token) => {
    const toastId = toast.loading("Loading....");
    let result = null;
    console.log(token);

    try {
        console.log("Fetching instructor courses...");
        const response = await apiConnector("GET", GET_INSTRUCTOR_ALL_COURSE,data, {
            Authorization: `Bearer ${token}`,
        });

        console.log("Instructor all course API response:", response);

        if (!response?.data?.data) {
            throw new Error("Could not fetch instructor courses due to server error");
        }

        toast.success(response.data.message);
        result = response.data.data;
    } catch (error) {
        console.error("Error fetching instructor courses:", error);
        toast.error(error.response?.data?.message || "An error occurred while fetching instructor courses");
    }

    toast.dismiss(toastId); // Dismiss the toast in both success and error cases
    console.log("Fetched instructor courses:", result);
    return result; // Return the fetched data
};

