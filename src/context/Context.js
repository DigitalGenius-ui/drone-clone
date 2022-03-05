import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../components/auth/firebase';

const droneContext = createContext();

const Context = ({children}) => {
    const [search, setSearch] = useState("");
    const [move, setMove] = useState(false);
    const [moveAuth, setMoveAuth] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState(null);
    
    const [user, setUser] = useState("");
    const [secondE, setSecondE] = useState("");
    const [rePassword, serRePassword] = useState("");
    const [secondP, setSecondP] = useState("");

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, isAuth => {
        if(isAuth) setIsAuth(isAuth);
        else setIsAuth(null);
      })
      return () => {
        unsubscribe()
      }
    },[]);
  return (
    <droneContext.Provider value={{
        search, setSearch,
        move, setMove,
        moveAuth, setMoveAuth,
        toggle, setToggle,
        password, setPassword,
        email, setEmail,
        user, setUser,
        secondP, setSecondP,
        rePassword, serRePassword,
        secondE, setSecondE,
        isAuth
    }}>
        {children}
    </droneContext.Provider>
  )
}

export default Context;

export const DroneState = () => useContext(droneContext);