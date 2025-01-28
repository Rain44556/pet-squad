import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext } from 'react';

const UserDashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
        <h2 className="text-3xl text-center text-colorSecondary">
            <span>Welcome </span>
            {
                user?.displayName ? user.displayName : 'User not found'
            }
        </h2>
    </div>
    );
};

export default UserDashboard;