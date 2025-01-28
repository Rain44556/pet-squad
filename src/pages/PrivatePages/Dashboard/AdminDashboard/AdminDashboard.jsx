import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext } from 'react';

const AdminDashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
              <h2 className="text-4xl text-center text-colorPrimary">
                <span>Welcome </span>
                {
                    user?.displayName ? user.displayName : 'No admin found'
                }
            </h2>
        </div>
    );
};

export default AdminDashboard;