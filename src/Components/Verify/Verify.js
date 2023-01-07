import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Verify = () => {
    const {user} =useContext(AuthContext);
    console.log(user?.email)
    return (
        <div>
            <h2>This is verify page</h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default Verify;