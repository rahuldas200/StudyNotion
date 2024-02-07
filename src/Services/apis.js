const BASE_URL = "http://localhost:4000/api/v1"
console.log(BASE_URL);

export const categories = {
    CATEGORIES_API:BASE_URL + "/course/showAllCategories",
};

export const endpoints = {
    SENDOTP_API :BASE_URL+ "/auth/sendotp",
    SIGNUP_API : BASE_URL + "/auth/signup",
    LOGIN_API : BASE_URL + "/auth/login",
    RESETPASSWORDTOKEN_API : BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API : BASE_URL + '/auth/reset-password',
};

export const profileEndpoints = {
    GET_USER_DETAILS_API :BASE_URL+"/profile/getUserDetails",
    GET_ENROLLED_COURSES_API :BASE_URL+ "/profile/getEnrolledCourses",
}

export const courseEndpoints = {
    CREATE_COURSE_API : BASE_URL+"/course/createCourse",
    ADD_COURSE_SECTION_API : BASE_URL+"/course/addSection",
    UPDATE_COURSE_SECTION_API :BASE_URL+"/course/updateSection",
    DELETE_COURSE_SECTION_API : BASE_URL+"/course/deleteSection",
    ADD_SUB_SECTION_API : BASE_URL+"/course/addSubSection",
    UPDATE_SUB_SECTION_API : BASE_URL+"/course/updateSubSection",
    DELETE_SUB_SECTION_API : BASE_URL+"/course/deleteSubSection",
    GET_ALL_COURSE_API : BASE_URL+"/course/getAllCourses",
    GET_COURSE_DETAIL_API : BASE_URL+"/course/getCourseDetails",
    UPADTE_COURSE_DETAILS_API : BASE_URL+"/course/editCourse",
    GET_INSTRUCTOR_ALL_COURSE : BASE_URL+"/course/getInstructorCourse"
}

export const categoriEndpoints = {
    CREATE_CATEGORY_API : BASE_URL+"/course/createCategory",
    GET_ALL_CATEGORY_API : BASE_URL+"/course/showAllCategories",
    GET_CATEGORY_PAGE_DETAIL_API : BASE_URL+"/course/getCategoryPageDetails",

}

export const RetingAndReviewEndpionts = {
    CREATE_RETING_API : BASE_URL+"/course/createRating",
    GET_AVERAGE_RETING_API : BASE_URL+"/course/getAverageRating",
    GET_REVIEW_API : BASE_URL+"/course/getReviews",
}