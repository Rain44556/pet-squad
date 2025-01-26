import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useDonation = () => {
    const axiosSecure = useAxiosSecure();

    const {
        data: donation = [], 
        isPending: loading, 
        refetch,
        } = useQuery({
        queryKey: ['donation'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/donation');
            return res.data;
        }
    });
    return [donation,loading,refetch]
}

export default useDonation;