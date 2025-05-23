import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { AuthContext } from '@/provider/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { MdBrowserUpdated } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const MyAddedPets = () => {
  const axiosSecure = useAxiosSecure();
  const [addedPets, setAddedPets] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchAddedPets = async () => {
    const res = await axiosSecure(`/pets/myPets?email=${user.email}`)
    console.log(res);
    setAddedPets(res.data);
  }

  useEffect(() => {
    if (user?.email) {
      fetchAddedPets();
    }
  }, [user?.email]);

  const handleDeletePet = (pet) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/pets/${pet._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${pet.name} has been deleted`,
            showConfirmButton: false,
            timer: 3000
          });
        }
      }
    });
  }

  return (
    <div>

      <SectionTitle
        title={"My Added Pets"}
      ></SectionTitle>


      <div className='my-10'>
        <Table>
          <TableCaption>A list of Your Selected Pets.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Serial Number</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Adoption Status</TableHead>
              <TableHead>Update</TableHead>
              <TableHead>Delete</TableHead>
              <TableHead>Adopted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {addedPets.length !== 0 &&
              (addedPets.map((pet, idx) => (
                <TableRow key={pet._id}>
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell>{pet.name}</TableCell>
                  <TableCell>{pet.category}</TableCell>
                  <TableCell><img className='w-16 rounded-3xl' src={pet.image}></img></TableCell>
                  <TableCell>
                    {pet.adopted === "true" ? "Adopted" : "Not Adopted"}
                    </TableCell>
                  <TableCell><Link to={`/dashboard/updatePet/${pet._id}`}><button><MdBrowserUpdated size={25} /></button></Link></TableCell>
                  <TableCell><button onClick={() => handleDeletePet(pet)}><MdDeleteForever size={25} /></button></TableCell>
                  <TableCell><button>{pet.adopted}</button></TableCell>
                </TableRow>
              )))
            }
          </TableBody>


          {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{pet.length}</TableCell>
        </TableRow>
      </TableFooter> */}
        </Table>
      </div>

    </div>
  );
};

export default MyAddedPets;