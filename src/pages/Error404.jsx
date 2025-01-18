import React from 'react';
import error from '../assets/404.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const Error404 = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
        <Lottie className='w-1/5' animationData={error}></Lottie>
        <SectionTitle
            title={"Whoops! We couldn’t find the page you’re looking for. Let’s get you back on track!"}
            >
            </SectionTitle>
        <Link
            to="/"
            className="text-[#48375e] hover:underline"
        >
            Back to Home
        </Link>
    </div>
    );
};

export default Error404;