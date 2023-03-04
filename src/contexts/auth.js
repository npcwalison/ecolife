import React, { createContext, useState, useEffect } from "react";


export const  AuthContext = createContext({});

import { useNavigation } from "@react-navigation/native";

import api from '../services/api';

import AsyncStorage from "@react-native-async-storage/async-storage";

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loadingApp, setLoadingApp] = useState(true)

    const navigation = useNavigation();

    useEffect(()=>{
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('@EcoApp');

            //console.log(`storageUser: ${storageUser}`)

            if(storageUser){

                const response = await api.get('/me', {
                    headers: {
                        'Authorization' : `Bearer ${storageUser}`
                    }
                })
                .catch(()=>{
                    setUser(null)
                })

                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
                setUser(response.data)
                setLoadingApp(false)

                //console.log(`response: ${response}`)
            }
            setLoadingApp(false)
        }

        loadStorage()

    }, [])

//--------------------------------------------------------------
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

//---------------------------------------------------------------
    async function signIn(email, password){
        setLoadingAuth(true);
        try{
            const response = await api.post('/login', {
                email: email,
                password: password
            })

            const { id, name, token } = response.data;

            const data ={
                id,
                name,
                token,
                email,
            }
            
            await AsyncStorage.setItem('@EcoApp', token)

            api.defaults.headers['Authorization'] = `Bearer ${token}`;


            setUser({
                id,
                name,
                email,
            })

            //console.log(`auth: ${user}`)

            setLoadingAuth(false);
        }catch(err){
            console.log(`Error Cadastro: ${err}`)
            setLoadingAuth(false);
        }
    }
    

    async function signOut(){
        await AsyncStorage.clear()
        .then(()=>{
            setUser(null)
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth, signIn, loadingApp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;