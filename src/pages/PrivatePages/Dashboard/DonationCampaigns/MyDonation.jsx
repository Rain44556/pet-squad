import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { AuthContext } from '@/provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { RiRefund2Line } from "react-icons/ri";

const MyDonation = () => {
      // const [myDonation, setMyDonation] = useState([]);
      // console.log(myDonation);

    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    

    const { data: myDonation = [] } = useQuery({
      queryKey: ['myDonation', user?.email],
      queryFn: async () => {
          const res = await axiosSecure.get(`/myDonation/${user.email}`)
          return res.data;
      }
})

      // const fetchMyDonation = async () => {
      //   const res = await axiosSecure(`/myDonation?email=${user.email}`)
      //   console.log(res);
      //   setMyDonation(res.data);
      // }
    
      // useEffect(() => {
      //   if (user?.email) {
      //       fetchMyDonation();
      //   }
      // }, [user?.email]);

    const handleRefund = () =>{

    }


    return (
        <div>

        <SectionTitle
          title={"My Donation"}
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
              {
            //   myDonation.length !== 0 &&
                (myDonation.map((donation, idx) => (
                  <TableRow key={donation._id}>
                    <TableCell className="font-medium">{idx + 1}</TableCell>
                    <TableCell><img className='w-16 rounded-3xl' src={donation.image}></img></TableCell>                    
                    <TableCell>{donation.name}</TableCell>
                    <TableCell>{donation.donatedAmount}</TableCell>
                    {/* <TableCell><button onClick={()=>handleRefund(donation)}><RiRefund2Line className='text-colorPrimary' size={23} /></button></TableCell> */}
                  </TableRow>
                )))
              }
            </TableBody>
          </Table>
        </div>
  
      </div>
    );
};

export default MyDonation;