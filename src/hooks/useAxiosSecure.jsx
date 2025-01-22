
import axios from "axios";
import {AuthContext} from "@/provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import useAuth from "./useAuth";



const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    
    const {logoutUser} = useAuth();
    const navigate = useNavigate();

    // ------request interceptor ---------//
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
        //----------logout the user for error-------------//
         (error) => {
        const status = error.response.status;
            if (status === 401 || status === 403) {
                 logoutUser();
                navigate('/login');
            }
            return Promise.reject(error);
        })

    return axiosSecure;
};

export default useAxiosSecure;