

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const usePets = () => {
    const axiosSecure = useAxiosSecure();

    const {
        data: pets = [], 
        isPending: loading, 
        refetch,
        } = useQuery({
        queryKey: ['pets'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/pets');
            return res.data;
        }
    });
    return [pets,loading,refetch]
};

export default usePets;