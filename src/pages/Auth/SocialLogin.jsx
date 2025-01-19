import AuthContext from '@/provider/AuthContext';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const { loginWithGoogle, setUser,loginWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

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
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfoInDB)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast.success("Welcome!!");
                            navigate("/")
                        }
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
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfoInDB)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast.success("Welcome!!");
                            navigate("/")
                        }
                    })
            })
    }

    return (
        <div className=''>
            <p>
                <button
                    onClick={handleGoogleLogin}
                    className="w-full border py-3 my-4"> Sign Up With Google</button>
            </p>
            <p>
                <button
                    onClick={handleGithub}
                    className="w-full border py-3"> Sign Up With Github</button>
            </p>

            <div class="flex items-center justify-center my-4">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="mx-4 text-gray-500">OR</span>
                <div class="flex-grow border-t border-gray-300"></div>
            </div>
        </div>
    );
};

export default SocialLogin;