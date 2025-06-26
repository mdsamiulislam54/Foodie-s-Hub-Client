import React, { useEffect, useState } from 'react'
import { UserContext } from './userContext'
import auth from '../firbase-config.js';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';


const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logingUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUserWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return auth.signOut();
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    })

    const userInfo = {
        createUser,
        user,
        logingUser,
        loading,
        setLoading,
        createUserWithGoogle,
        logOut,
    }
  return (
    <UserContext.Provider value={userInfo}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider