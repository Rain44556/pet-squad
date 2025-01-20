import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.json'
import Lottie from 'lottie-react';
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import AuthContext from '@/provider/AuthContext';
import { Helmet } from 'react-helmet-async';
import SocialLogin from './SocialLogin';


const Login = () => {

    const { loginUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                setUser(user);
                Swal.fire({
                    title: 'Welcome back! You’re now logged in and ready to explore!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error("Something is wrong!!");
            })
    }


    return (
        <div>
            <Helmet>
                <title>Login | Pet Squad</title>
            </Helmet>
            <div className="grid lg:grid-cols-2 gap-10 justify-center items-center min-h-screen bg-secondary">
                <div className="w-full max-w-md bg-primary-foreground rounded-lg shadow-lg p-14 mx-auto">

                    <h2 className="text-2xl font-extrabold text-center text-colorPrimary font-headingFont">Login to Pet Squad</h2>
                    <p className="mt-2 text-center text-gray-600">
                        Welcome back! To proceed, please enter your login and password!!
                    </p>

                    <form
                        onSubmit={handleLogin}
                        className="space-y-4 mt-6">

                        <div>
                            <Label htmlFor="email" className="text-gray-700">
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1"
                                required
                            />
                        </div>


                        <div>
                            <Label htmlFor="password" className="text-gray-700">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="mt-1"
                                required
                            />
                        </div>


                        <div>
                            <Button
                                type="submit"
                                className="w-full bg-[#4f455e] hover:bg-purple-500 text-white font-medium py-2 px-4 rounded-md transition"
                            >
                                Login
                            </Button>
                        </div>
                        <SocialLogin></SocialLogin>
                    </form>


                    <div className="mt-4 text-center text-sm text-gray-500">
                        <p>
                            New here? Create an account now!
                            <Link
                                to="/register"
                                className="text-[#695d79] text-lg hover:underline font-medium ml-2"
                            > Register
                            </Link>
                        </p>
                        <p className="mt-2">
                            <Link
                                href="/forgot-password"
                                className="text-[#48375e] hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </p>
                    </div>
                </div>

                <div>
                    <Lottie
                        animationData={login}
                        loop={true}
                        className='max-w-md' />
                </div>
            </div>
        </div>

    );
};

export default Login;