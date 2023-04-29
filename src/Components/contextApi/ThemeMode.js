import React, { useState } from 'react'
import { createContext } from 'react'

const Mode = createContext();

const ThemeMode = (props) => {

    const [lightMode,setLightMode] = useState(false);
    const toggleMode = ()=>{
        setLightMode(!lightMode);
    }
    return (
    <>
        <Mode.Provider value={{lightMode,toggleMode}}>
            {props.children}
        </Mode.Provider>
    </>
    )
}

export {Mode,ThemeMode}