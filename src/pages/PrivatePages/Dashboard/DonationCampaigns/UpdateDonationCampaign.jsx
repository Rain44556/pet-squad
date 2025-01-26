import useAxiosPublic from '@/hooks/useAxiosPublic';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateDonationCampaign = () => {
    const { petName, amount, lastDate, shortDescription, longDescription, _id } = useLoaderData();
    // console.log(donationCampaign);

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_API, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const updateDonationData = {
                petName: data.name,
                image: res.data.data.display_url,
                amount: data.amount,
                "last date": data.lastDate,
                "short description": data.shortDescription,
                "long description": data.longDescription,
                campaignOwnerEmail: user.email
            }

            const updateDonationRes = await axiosSecure.put(`/donationCampaign/${_id}`, updateDonationData);
            console.log(updateDonationRes.data);

            if (updateDonationRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Your donation information has been updated successfully!`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/myDonationCampaigns');
            }
        }
    }
    return (
        <div>
            <Helmet><title>Edit Donation | Pet Squad</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full my-6">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <div className="w-full my-6">
                    <label>
                        <span className="text-sm font-medium text-gray-700">Name*</span>
                    </label>
                    <input
                        defaultValue={petName}
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
                        defaultValue={amount}
                        type="text"
                        placeholder="Enter the maximum amount"
                        {...register('amount', { required: true })}
                        className="w-full mt-1 border border-gray-300 p-2 rounded-lg" />
                </div>

                <div className="w-full my-6">
                    <label>
                        <span className="text-sm font-medium text-gray-700">Last Date</span>
                    </label>
                    <input
                        defaultValue={lastDate}
                        type="date"
                        placeholder="Enter"
                        {...register('lastDate', { required: true })}
                        className="w-full mt-1 border border-gray-300 p-2 rounded-lg" />
                </div>

                <div className="w-full my-6">
                    <label>
                        <span className="text-sm font-medium text-gray-700">Short Description</span>
                    </label>
                    <input
                        defaultValue={shortDescription}
                        type="text"
                        placeholder="Enter a short description"
                        {...register('shortDescription', { required: true })}
                        className="w-full mt-1 border border-gray-300 p-2 rounded-lg" />
                </div>

                <div>
                    <label>
                        <span className="text-sm font-medium text-gray-700">Long Description</span>
                    </label>
                    <textarea {...register('longDescription')}
                        defaultValue={longDescription}
                        className="w-full mt-1 border border-gray-300 p-2 rounded-lg h-28" placeholder="Provide detailed information"></textarea>
                </div>

                <div className='flex justify-center'>
                    <button className="border-2 bg-colorPrimary px-6 py-2 rounded-md text-white mt-5 hover:rounded-xl font-headingFont">
                        Submit</button>
                </div>


            </form>
        </div>
    );
};

export default UpdateDonationCampaign;