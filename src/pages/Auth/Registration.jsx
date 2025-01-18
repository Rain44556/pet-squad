

import React, { useContext } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "@/provider/AuthContext";
import { Label } from '@/components/ui/label';
import Swal from 'sweetalert2'

const Registration = () => {
    const { registerUser, setUser, userUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;


        registerUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);
                Swal.fire({
                    title: 'Register Successfully!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                userUpdateProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/")
                    }).catch(err => {
                        toast(err);
                    })

            })
            .catch((error) => {
                toast.error(error.message);
            })

    }


    return (
        <div>
            <Helmet>
                <title>Register | Pet Squad</title>
            </Helmet>
            <div className="grid lg:grid-cols-2 gap-10 justify-center items-center min-h-screen bg-secondary">
                <div className="w-full max-w-md bg-primary-foreground rounded-lg shadow-lg p-14 mx-auto">

                    <h2 className="text-2xl font-extrabold text-center text-colorPrimary font-headingFont">Create Your Account!!</h2>

                    <form
                        onSubmit={handleRegister}
                        className="space-y-4 mt-6">

                        <div>
                            <Label htmlFor="name">
                                Name
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Full Name"
                                className="mt-1"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="email"
                                className="mt-1"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="password"
                                className="mt-1"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="photo">
                                Photo URL
                            </Label>
                            <Input
                                id="photo"
                                type="photo"
                                placeholder="photo url"
                                className="mt-1"
                                required
                            />
                        </div>


                        <div>
                            <Button
                                type="submit"
                                className="w-full bg-[#4f455e] hover:bg-purple-900 text-white font-medium py-2 px-4 rounded-md transition"
                            >
                                Register
                            </Button>
                        </div>
                    </form>


                    <div className="mt-4 text-center text-sm text-gray-500">
                        <p>
                            Have already account?
                            <Link
                                to="/login"
                                className="text-[#695d79] text-lg hover:underline font-medium ml-2"
                            > Go to Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;