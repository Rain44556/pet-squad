import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '@/components/loading/Loading';
import {AuthContext} from '@/provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/register"} state={{from: location}} replace></Navigate>;


};

export default PrivateRoute;
