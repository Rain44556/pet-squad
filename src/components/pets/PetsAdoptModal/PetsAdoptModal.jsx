import useAxiosPublic from '@/hooks/useAxiosPublic';
import usePets from '@/hooks/usePets';
import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PetsAdoptModal = ({ pet, closeModal }) => {
    const axiosPublic = useAxiosPublic();
     const { user } = useContext(AuthContext);
     const [, , refetch] = usePets();
     const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const phone = e.target.phone.value;
        const address = e.target.address.value;

        const adoptionData = {
            petId: pet._id,
            petName: pet.name,
            petImage: pet.image,
            userName: user.name,
            adopterEmail: user.email,
            ownerEmail: pet.ownerEmail,
            phone,
            address,
            date: new Date(),
            status: "pending",
        }

        const adoption = await axiosPublic.post('/adoption', adoptionData);
        console.log(adoption);
        if (adoption.data.insertedId) {
            refetch();
            Swal.fire("adopton done");
        }
        navigate('/dashboard/adoptionRequest')
    }

return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 font-bodyFont">
        <div className="bg-white w-96 p-6 rounded-md shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-center text-colorPrimary">{pet.name}</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                    <label className="block text-colorSecondary">User Name</label>
                    <input
                    name='name'
                        type="text"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none"
                        required
                        value={user.displayName}
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-colorSecondary">Email</label>
                    <input
                    name='email'
                        type="email"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none"
                        required
                        value={user.email}
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-colorSecondary">Phone Number</label>
                    <input
                    name='phone'
                        type="text"
                        placeholder='Enter Your Number'
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-colorSecondary">Address</label>
                    <textarea
                     name='address'
                     placeholder='Enter Your Current Address'
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-colorPrimary text-white px-4 py-2 rounded-md hover:rounded-3xl w-full"
                >
                    Submit
                </button>
            </form>
            <button
                onClick={closeModal}
                className="mt-4 text-colorPrimary hover:underline w-full"
            >
                Close
            </button>
        </div>
    </div>
);
};

export default PetsAdoptModal;