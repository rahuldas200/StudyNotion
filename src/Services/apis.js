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
}