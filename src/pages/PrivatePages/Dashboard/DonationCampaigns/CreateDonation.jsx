import useAxiosPublic from '@/hooks/useAxiosPublic';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateDonation = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_API, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const donationData = {
                petName: data.name,
                image: res.data.data.display_url,
                amount: data.amount,
                "last date": data.lastDate,
                "short description": data.shortDescription,
                "long description": data.longDescription,
                "date and time": new Date(res.data.data.time * 1000).toLocaleString(),
                campaignOwnerEmail: user.email,
                campaignOwnerName: user.displayName,
            }

            const donation = await axiosSecure.post('/donationCampaign', donationData);
            console.log(donation.data);

            if (donation.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Created Donation Campaign Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/myDonationCampaigns')
            }
        }
    };

    return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <div className="w-full my-6">
                        <label>
                            <span className="text-sm font-medium text-gray-700">Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Please enter the name of your pet"
                            {...register('name', { required: true })}
                            className="w-full mt-1 border border-gray-300 p-2 rounded-lg" />
                    </div>

                    <div className="w-full my-6">
                        <label>
                            <span className="text-sm font-medium text-gray-700">Amount*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Maximum Donation Amount"
                            {...register('amount', { required: true })}
                            className="w-full mt-1 border border-gray-300 p-2 rounded-lg" />
                    </div>

                    <div className="w-full my-6">
                        <label>
                            <span className="text-sm font-medium text-gray-700">Last Date</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Last Date of Donation"
                            {...register('lastDate', { required: true })}
                            className="w-full mt-1 border border-gray-300 p-2 rounded-lg" />
                    </div>

                    <div className="w-full my-6">
                        <label>
                            <span className="text-sm font-medium text-gray-700">Short Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter a short description"
                            {...register('shortDescription', { required: true })}
                            className="w-full mt-1 border border-gray-300 p-2 rounded-lg" />
                    </div>

                    <div>
                        <label>
                            <span className="text-sm font-medium text-gray-700">Long Description</span>
                        </label>
                        <textarea {...register('longDescription')} className="w-full mt-1 border border-gray-300 p-2 rounded-lg h-28" placeholder="Provide Detailed Information"></textarea>
                    </div>

                    <div className='flex justify-center'>
                        <button className="border-2 bg-colorPrimary px-6 py-2 rounded-md text-white mt-5 hover:rounded-xl font-headingFont">
                            Submit</button>
                    </div>


                </form>
            </div>
    );
};

export default CreateDonation;