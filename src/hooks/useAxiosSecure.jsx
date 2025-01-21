import AuthContext from "@/provider/AuthContext";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    
    // const navigate = useNavigate();
    // const {logoutUser} = useContext(AuthContext);

    //------request interceptor ---------//
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },

    //--------------request error------------//
        function (error) {
            return Promise.reject(error);
        });


    //------response interceptor ---------//
    axiosSecure.interceptors.response.use(function (response) {
    return response;
    },
        async (error) => {
        const status = error.response.status;

    //----------logout the user for 401 or 403-------------//
            if (status === 401 || status === 403) {
                // await logoutUser();
                // navigate('/login');
            }
            return Promise.reject(error);
        })

    return axiosSecure;
};

export default useAxiosSecure;