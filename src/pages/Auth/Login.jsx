import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { Link } from 'react-router-dom';
import login2 from '../../assets/login2.json'
import Lottie from 'lottie-react';

const Login = () => {

    return (
        <div className="grid lg:grid-cols-2 gap-10 justify-center items-center min-h-screen bg-purple-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-14 mx-auto">
          
          <h2 className="text-2xl font-extrabold text-center text-[#695d79] font-headingFont">Login to Pet Squad</h2>
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
                className="w-full bg-[#4f455e] hover:bg-purple-900 text-white font-medium py-2 px-4 rounded-md transition"
              >
                Login
              </Button>
            </div>
          </form>
  

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
            New here? Create an account now!
              <Link
                to="/register"
                className="text-[#695d79] text-lg hover:underline font-medium"
              >
                 {" "} Register
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
        animationData={login2} 
        loop={true} 
        className='max-w-md' />
        </div>
      </div>
    );
};

export default Login;