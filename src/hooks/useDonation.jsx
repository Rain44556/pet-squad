import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '@/provider/AuthProvider';

const useDonation = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {
        data: donationCampaign = [], 
        isPending: loading, 
        refetch,
        } = useQuery({
        queryKey: ['donationCampaign', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/donationCampaign/myDonationCampaign?email=${user.email}`);
            return res.data;
        }
    });
    return [donationCampaign,loading,refetch]
}

export default useDonation;