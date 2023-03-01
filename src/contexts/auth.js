import React, { createContext, useState } from "react";


export const  AuthContext = createContext({});

import { useNavigation } from "@react-navigation/native";

import api from '../services/api';


function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const navigation = useNavigation();

    async function signUp(name, email, password){
        setLoadingAuth(true);
        try{
            const response = await api.post('/users', {
                name: name,
                email: email,
                password: password
            })

            setLoadingAuth(false);
            navigation.goBack()
        }catch(err){
            console.log(`Error Cadastro: ${err}`)
            setLoadingAuth(false);
        }
    }

    return(
        <AuthContext.Provider value={{ user, signUp, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;