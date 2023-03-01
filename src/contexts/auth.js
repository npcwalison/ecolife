import React, { createContext, useState } from "react";


export const  AuthContext = createContext({});

import { useNavigation } from "@react-navigation/native";

import api from '../services/api';


function AuthProvider({ children }){
    const [user, setUser] = useState({
        name: "Matheus"
    });

    const navigation = useNavigation();

    async function signUp(name, email, password){
        console.log(`${name}\n${email}\n${password}`)
        try{
            const response = await api.post('/users', {
                name: name,
                email: email,
                password: password
            })

            navigation.goBack()
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