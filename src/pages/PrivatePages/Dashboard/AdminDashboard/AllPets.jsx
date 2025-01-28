import React, { useContext } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import usePets from '@/hooks/usePets';
import { Link } from 'react-router-dom';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const AllPets = () => {
    const [pets,loading,refetch] = usePets();
    // const {user} = useContext()
    const axiosSecure = useAxiosSecure();

const handleDelete = async (id) =>{
    const res = await axiosSecure.delete(`/pets/${id}`);
          // console.log(res);
           if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Delete the pet successfully",
                      showConfirmButton: false,
                      timer: 3000
                    });
                  }
}
const handleAdopt = async (id, adopt) =>{
    const data = {adopted: adopt === "false" ? 'true' : 'false'}
    const res = await axiosSecure.patch(`/pets/adopt/${id}`, data);
          console.log(res);
           if (res.data.modifiedCount> 0) {
                    refetch();
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Delete the pet successfully",
                      showConfirmButton: false,
                      timer: 3000
                    });
                  }
}




    
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
                               <Link to={`/dashboard/updatePet/${pet._id}`}> <button className='px-4 py-2 bg-colorPrimary rounded-lg text-white mr-2'>Update</button></Link>
                                <button onClick={()=>handleDelete(pet._id)} className='px-4 py-2 bg-colorSecondary rounded-lg mr-2 '>Delete</button>
                                <button onClick={()=>handleAdopt(pet._id, pet.adopted)} className='px-4 py-2 bg-colorSecondary rounded-lg'>{pet.adopted !== "false" ? 'adopt' : 'not adopted'}</button>
                                </TableCell>
                        </TableRow>
                    )))
                }
            </TableBody>
        </Table>
    );
};

export default AllPets;