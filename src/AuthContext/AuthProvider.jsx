import { AuthContext } from "./AuthContext";
import { auth } from "./../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";


const AuthProvider = ({ children }) => {
      const [loading, setLoading] = useState(true);
      const [user, setUser] = useState(null);

      const createUser = (email, password) => {
            setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
      };

      const loginUser = (email, password) => {
            setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
      };

      // logout
      const logOutUser = ()=>{
            setLoading(true);
            return signOut(auth);
      }

      const provider = new GoogleAuthProvider();
      const googleLogin = ()=>{
            setLoading(true);
            return signInWithPopup(auth, provider);
      }

      //observer
      useEffect(()=>{
          const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
                  console.log('observer', currentUser);
                  setUser(currentUser);
                  setLoading(false);
            });
            return ()=>{
                  unSubscribe();
            }
      }, []);

  const authInfo = {
     user,
     loading,
    createUser,
    loginUser,
    googleLogin,
    logOutUser,
  };

  return(
       <AuthContext value={authInfo}>
      {children}
      </AuthContext>
  )
};

export default AuthProvider;
