import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import React from "react";


const GlobalState = (props) => {
    const [cursos, setCursos] = useState([]) 
    
    const states = {cursos}
    const setters = {setCursos}
    const requests = {}

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}} >
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState