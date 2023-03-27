import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Context = createContext();
export const States = ({ children }) => {

    var goto = useNavigate("");

    const [ background,setBackground ] = useState ("darkbg");
    const[grid,setgrid] = useState("darkgrid");

    return(
        <Context.Provider value={{
            background,
            setBackground,
            grid,
            setgrid,
            goto
        }}
        >{children}
        </Context.Provider>
    );
};
export const useStates = () => useContext(Context);