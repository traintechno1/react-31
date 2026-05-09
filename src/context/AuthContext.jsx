import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(null);
    const [counter, setCounter] = useState(0);
    return(
        <AuthContext.Provider value={{token, setToken, counter, setCounter}}>
            {children}
        </AuthContext.Provider>
    )
}