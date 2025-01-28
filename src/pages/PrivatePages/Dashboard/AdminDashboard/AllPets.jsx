import React, { useContext } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import usePets from '@/hooks/usePets';


const AllPets = () => {
    const [pets,loading,refetch] = usePets();
    // const {user} = useContext()
    return (
        <Table>
            <TableCaption>A list of All Pets.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]"></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    (pets.map((pet, idx) => (
                        <TableRow key={pet._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell>{pet.name}</TableCell>
                            <TableCell><img className='w-16 rounded-3xl' src={pet.image}></img></TableCell>
                            <TableCell>{pet.ownerEmail}</TableCell>
                            <TableCell>
                                <button className='px-4 py-2 bg-colorPrimary rounded-lg text-white mr-2'>Update</button>
                                <button className='px-4 py-2 bg-colorSecondary rounded-lg '>Delete</button>
                                </TableCell>
                        </TableRow>
                    )))
                }
            </TableBody>
        </Table>
    );
};

export default AllPets;