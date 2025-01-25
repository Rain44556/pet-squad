import useAxiosPublic from '@/hooks/useAxiosPublic';
import usePets from '@/hooks/usePets';
import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';

const PetsAdoptModal = ({ pet, closeModal }) => {
    const axiosPublic = useAxiosPublic();
     const { user } = useContext(AuthContext);
     const [, , refetch] = usePets();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const phone = e.target.phone.value;
        const address = e.target.address.value;

        const adoptionData = {
            petId: pet.id,
            petName: pet.name,
            petImage: pet.image,
            userName: user.name,
            email: user.email,
            phone,
            address,
            date: new Date().toISOString(),
        }

        const adoption = await axiosPublic.post('/adoption', adoptionData);
        console.log(adoption);
        if (adoption.data.insertedId) {
            refetch();
            Swal.fire("adopton done");
        }
    }

return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-96 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Adopt {pet.name}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone Number</label>
                    <input
                    name='phone'
                        type="text"
                        placeholder='Enter Your Number'
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <textarea
                     name='address'
                     placeholder='Enter Your Current Address'
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-colorPrimary text-white px-4 py-2 rounded-md"
                >
                    Submit
                </button>
            </form>
            <button
                onClick={closeModal}
                className="mt-4 text-gray-500 hover:underline"
            >
                Close
            </button>
        </div>
    </div>
);
};

export default PetsAdoptModal;