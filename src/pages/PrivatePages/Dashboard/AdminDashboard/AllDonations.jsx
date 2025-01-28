import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useDonation from '@/hooks/useDonation';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const AllDonations = () => {
    const [donationCampaign,loading,refetch] = useDonation();

      const handlePause = async (id, isPaused) => {
        const pauseStatus = { isPaused };
        console.log(pauseStatus);
    
        const res = await axiosSecure.put(`/donationCampaign/${id}`, pauseStatus)
        console.log(res);
    
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `${isPaused ? "Unpaused" : "Paused"} the campaign`,
            icon: "success",
            draggable: true
          });
        }
      }

    return (
        <Table>
            <TableCaption>A list of Your Selected Pets.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]"></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Profile Image</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    (donationCampaign.map((donation, idx) => (
                        <TableRow key={donation._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell>{donation.petName}</TableCell>
                            <TableCell>{donation.campaignOwnerEmail}</TableCell>
                            <TableCell><img className='w-16 rounded-3xl' src={donation.image}></img></TableCell>
                            <TableCell>
                                <button className='px-4 py-2 bg-colorPrimary rounded-lg text-white mr-2'>Delete</button>
                               <Link to={`/dashboard/updateDonationCampaign/${donation._id}`}> <button className='px-4 py-2 bg-colorSecondary rounded-lg mr-2'>Edit</button></Link>
                                <button onClick={handlePause(donation._id, !donation.isPaused)} className='px-4 py-2 bg-black text-white rounded-lg '>{donation.isPaused ? "Unpause" : "Pause"}</button>
                            </TableCell>
                        </TableRow>
                    )))
                }
            </TableBody>
        </Table>
    );
};

export default AllDonations;