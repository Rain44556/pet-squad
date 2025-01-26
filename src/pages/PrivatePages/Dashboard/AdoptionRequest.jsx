import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import usePets from '@/hooks/usePets';
import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AdoptionRequest = () => {
    const axiosSecure = useAxiosSecure();
    const [adoptionRequest, setAdoptionRequest] = useState([]);
    const [myRequest, setMyRequest] = useState([]);
    const [, , refetch] = usePets();
    const [tab, setTab] = useState(0);
    const { user } = useContext(AuthContext);
    // console.log(user.email);

    const fetchAdoptionList = async () => {
        const res = await axiosSecure(`/adoption/request?email=${user.email}`)
        console.log(res);
        setAdoptionRequest(res.data);
    }

    const fetchMyRequest = async () => {
        const res = await axiosSecure(`/adoption/myRequest?email=${user.email}`)
        console.log(res);
        setMyRequest(res.data);
    }


    useEffect(() => {
        if (user?.email) {
            fetchAdoptionList();
            fetchMyRequest();
        }

    }, [user?.email]);



    const handleUpdateAdoption = async (_id, command) => {

        const updatedData = { command }
        console.log(updatedData);

        const adoptionRequest = await axiosSecure.put(`/adoption/update/${_id}`, updatedData);
        console.log(adoptionRequest);
        if (adoptionRequest.data.acknowledged) {
            refetch();
            Swal.fire({
                title: `Adoption Request ${command}ed`,
                icon: "success",
                draggable: true
            });
            fetchAdoptionList();
        }
    }


    return (

        <div className='my-10'>

            <div>
                <button onClick={() => setTab(0)}>My Request</button>
                <button onClick={() => setTab(1)}>Adoption Request</button>
            </div>


            {
                tab === 0 && (
                    <Table>
                        <TableCaption>A list of Your Requested Pets.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Serial Number</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Number</TableHead>
                                <TableHead>Location</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {myRequest.map((petInfo, idx) => (
                                <TableRow key={petInfo._id}>
                                    <TableCell className="font-medium">{idx + 1}</TableCell>
                                    <TableCell>{petInfo.petName}</TableCell>
                                    <TableCell>{petInfo.phone}</TableCell>
                                    <TableCell>{petInfo.address}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )
            }

            {
                tab === 1 && (
                    <Table>
                        <TableCaption>A list of Your Selected Pets.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Serial Number</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Number</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead className='text-center'>Action</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {adoptionRequest.map((petInfo, idx) => (
                                <TableRow key={petInfo._id}>
                                    <TableCell className="font-medium">{idx + 1}</TableCell>
                                    <TableCell>{petInfo.petName}</TableCell>
                                    <TableCell>{petInfo.phone}</TableCell>
                                    <TableCell>{petInfo.address}</TableCell>
                                    <TableCell className="justify-center flex">
                                        <button
                                            onClick={() => handleUpdateAdoption(petInfo._id, 'accept')}
                                            className='border-2 px-5 py-1 rounded-lg bg-green-500 text-white mr-1'>Accept</button>
                                        <button
                                            onClick={() => handleUpdateAdoption(petInfo._id, 'reject')}
                                            className='border-2 px-5 py-1 rounded-lg bg-red-500 text-white mr-1'>Reject</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )
            }
        </div>

    );
};

export default AdoptionRequest;