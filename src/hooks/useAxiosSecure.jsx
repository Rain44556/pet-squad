import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    //------request interceptor ---------//
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },

    //--------------request error------------//
        function (err) {
            return Promise.reject(err);
        });


    //------response interceptor ---------//
    axiosSecure.interceptors.response.use(function (response) {
    return response;
    },
        async (err) => {
        const status = err.response.status;

    //----------logout the user for 401 or 403-------------//
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login');
            }
            return Promise.reject(err);
        })

    return axiosSecure;
};

export default useAxiosSecure;