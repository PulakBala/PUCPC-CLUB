import React from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    const [user, setUser] = useState({displayName: 'Pulak'});


    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {user,createUser,signIn}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;