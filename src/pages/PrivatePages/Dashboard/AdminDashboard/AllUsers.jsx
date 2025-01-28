import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    //make admin 
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            // console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
         <Table>
                 <TableCaption>A list of All Users.</TableCaption>
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
                     (users.map((user, idx) => (
                       <TableRow key={user._id}>
                         <TableCell className="font-medium">{idx + 1}</TableCell>
                         <TableCell>{user.name}</TableCell>
                         <TableCell>{user.email}</TableCell>
                         <TableCell><img className='w-16 rounded-3xl' src={user.photo}></img></TableCell>
                         <TableCell>{ user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className=" bg-colorPrimary px-4 py-2 rounded-sm text-white">
                                        make admin
                                    </button>}</TableCell>
                       </TableRow>
                     )))
                   }
                 </TableBody>
               </Table>
    );
};

export default AllUsers;