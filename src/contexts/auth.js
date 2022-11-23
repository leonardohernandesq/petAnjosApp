import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Exemplo de payload:
// {
//     "fullname": "ARIOVALDO FARIAS DE SOUZA",
// 	   "username": "11131992881",
//     "password": "11941",
//     "listuser": "l"
// }

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user')

            if (storageUser) {
                setUser(JSON.parse(storageUser));
            }
        }

        loadStorage()
    }, []);


    const [user, setUser] = useState({});

    async function Login(username, password) {
        const response = await api.get('rest/wsanjusers/users?', {
            params: {
                'username': username,
                'password': password,
            },
        })
            .then((response) => {
                if (username !== '' && password !== '') {
                    let data = {
                        username: username,
                        nome: response.data.username,
                        contrato: response.data.contract,
                    }
                    console.log(data)
                    setUser(data);
                    storageUser(data);
                }
            })
            .catch((error) => {
                alert(error)
            });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut(){
        await AsyncStorage.removeItem('Auth_user')
        setUser({})
    }

    return (
        <AuthContext.Provider value={{ Login, user, storageUser, setUser, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;