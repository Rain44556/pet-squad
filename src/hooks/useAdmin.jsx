import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '@/provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useContext(AuthContext)


    const { data: admin, isPending: loadingAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            console.log('is admin or not', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })
    return [admin, loadingAdmin];
};

export default useAdmin;