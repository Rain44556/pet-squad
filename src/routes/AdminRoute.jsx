import useAdmin from '@/hooks/useAdmin';
import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [admin, loadingAdmin] = useAdmin();

    if (loading || loadingAdmin) {
        return <progress className="progress w-48"></progress>
    }

    if (user && admin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;