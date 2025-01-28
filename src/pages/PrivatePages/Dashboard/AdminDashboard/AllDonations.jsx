import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useDonation from '@/hooks/useDonation';


const AllDonations = () => {
    const [donationCampaign,loading,refetch] = useDonation();
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
                                <button className='px-4 py-2 bg-colorSecondary rounded-lg mr-2'>Edit</button>
                                <button className='px-4 py-2 bg-black text-white rounded-lg '>Pause</button>
                            </TableCell>
                        </TableRow>
                    )))
                }
            </TableBody>
        </Table>
    );
};

export default AllDonations;