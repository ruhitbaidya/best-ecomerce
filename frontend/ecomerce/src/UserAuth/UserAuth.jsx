import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase.config";


export const userContext = createContext();

const UserAuth = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const signinemailpassowrd = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logoutuser = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        let unSubscribe = onAuthStateChanged(auth, (person)=>{
            setUser(person)
            setLoading(false)
        })

        return ()=>{
            unSubscribe();
        }
    })

    const info = {user, signinemailpassowrd, loading, logoutuser, signInUser}
  return (
    <userContext.Provider value={info}>
        {children}
    </userContext.Provider>
  )
}

export default UserAuth