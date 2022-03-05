import React, { createContext, useContext, useState } from 'react';

const droneContext = createContext();

const Context = ({children}) => {
    const [search, setSearch] = useState("");
    const [move, setMove] = useState(false);
    const [moveAuth, setMoveAuth] = useState(false);
    const [toggle, setToggle] = useState(false);
  return (
    <droneContext.Provider value={{
        search, setSearch,
        move, setMove,
        moveAuth, setMoveAuth,
        toggle, setToggle,
    }}>
        {children}
    </droneContext.Provider>
  )
}

export default Context;

export const DroneState = () => useContext(droneContext);