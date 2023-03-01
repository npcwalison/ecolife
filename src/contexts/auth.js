import React, { createContext, useState } from "react";


export const  AuthContext = createContext({});

import api from '../services/api';


function AuthProvider({ children }){
    const [user, setUser] = useState({
        name: "Matheus"
    });

    async function signUp(name, email, password){
        console.log(`${name}\n${email}\n${password}`)
        try{

        }catch(err){
            console.log(`Error Cadastro: ${err}`)
        }
    }

    return(
        <AuthContext.Provider value={{ user, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;