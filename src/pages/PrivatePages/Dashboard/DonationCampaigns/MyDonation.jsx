import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import { RiRefund2Line } from "react-icons/ri";

const MyDonation = () => {
      const [myDonation, setMyDonation] = useState([]);
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    console.log(myDonation);

      const fetchMyDonation = async () => {
        const res = await axiosSecure(`/myDonation?email=${user.email}`)
        console.log(res);
        setMyDonation(res.data);
      }
    
      useEffect(() => {
        if (user?.email) {
            fetchMyDonation();
        }
      }, [user?.email]);

    const handleRefund = () =>{

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
                <TableHead className="w-[100px]">SL. No</TableHead>
                <TableHead>Pet Image</TableHead>
                <TableHead>Pet Name</TableHead>
                <TableHead>Donated Amount</TableHead>
                <TableHead>Refund</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {
            //   myDonation.length !== 0 &&
                (myDonation.map((donation, idx) => (
                  <TableRow key={donation._id}>
                    <TableCell className="font-medium">{idx + 1}</TableCell>
                    <TableCell>{donation.petName}</TableCell>
                    <TableCell>{donation.amount}</TableCell>
                    <TableCell><img className='w-16 rounded-3xl' src={donation.image}></img></TableCell>                    
                    <TableCell><button onClick={()=>handleRefund(donation)}><RiRefund2Line className='text-colorPrimary' size={23} /></button></TableCell>
                  </TableRow>
                )))
              } */}
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

export default MyDonation;