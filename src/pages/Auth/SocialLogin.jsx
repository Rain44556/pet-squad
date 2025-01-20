import AuthContext from '@/provider/AuthContext';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAxiosPublic from '@/hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { loginWithGoogle, setUser,loginWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                const user = res.user;
                setUser(user);
                const userInfoInDB =
                {
                    email: res.user?.email,
                    photo: res.user?.photoURL,
                    name: res.user?.displayName,
                    role: "user"
                };
                axiosPublic.post('/users', userInfoInDB)
                    .then(res => {
                        // console.log(res.data);
                        // if (res.data.insertedId) {
                        //     Swal.fire({
                        //         title: " You’re now ready to explore!",
                        //         icon: "success",
                        //         draggable: true
                        //       });
                        // }           
                        navigate("/");          
                    })
            })
    }

    const handleGithub = () => {
        loginWithGithub()
            .then(res => {
                const user = res.user;
                setUser(user);
                const userInfoInDB =
                {
                    email: res.user?.email,
                    photo: res.user?.photoURL,
                    name: res.user?.displayName,
                    role: "user"
                };
                axiosPublic.post('/users', userInfoInDB)
                .then(res => {
                    // console.log(res.data);
                    // if (res.data.insertedId) {
                    //     Swal.fire({
                    //         title: " You’re now ready to explore!",
                    //         icon: "success",
                    //         draggable: true
                    //       });
                    // }  
                    navigate("/");                   
                })
            })
    }

    return (
        <div className=''>
             <div class="flex items-center justify-center my-4">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="mx-4 text-gray-500">OR</span>
                <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <p>
                <button
                    onClick={handleGoogleLogin}
                    className="w-full border py-3 my-4 flex justify-center gap-2"><FaGoogle size={20}></FaGoogle> Sign Up With Google</button>
            </p>
            <p>
                <button
                    onClick={handleGithub}
                    className="w-full border py-3 flex justify-center gap-2"> <FaGithub size={20}/> Sign Up With Github</button>
            </p>
        </div>
    );
};

export default SocialLogin;