import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '@/firebase/firebase.config';

const googleAuthProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userUpdateProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    const loginWithGithub = ()=>{
        return signInWithPopup(auth, githubProvider);
    }

    const userInfo = {
        user,
        setUser,
        loading,
        loginUser,
        registerUser,
        userUpdateProfile,
        logoutUser,
        loginWithGoogle,
        loginWithGithub

    }

    //set observer to get the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;