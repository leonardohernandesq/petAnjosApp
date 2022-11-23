import React, { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { AuthContext } from '../../contexts/auth'

import { useNavigation } from '@react-navigation/native'

import { Container, Logo, AreaInput, Input, SubmitButton, SubmitText, SubmitButtonOff, SubmitTextOff } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function SignIn() {

    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [hidePass, setHidePass] = useState(true);
    const [loading, setLoading] = useState(true);

    const { Login, user } = useContext(AuthContext);


    if (hidePass === true) {
        var nameicon = 'eye'
    } else {
        var nameicon = 'eye-off'
    }

    async function handleLogin() {
        Login(username, password)

        if (user.nome !== undefined) {
            navigation.navigate('Home')
            setLoading(false)
        }

        setLoading(false)
    }


    return (
        <ImageBackground source={require('../../img/Open.jpg')} resizeMode="cover" style={styles.image}>
            <Container>
                {/* <Logo source={require('../../img/logo200white.png')}/> */}

                <AreaInput>
                    <Input
                        placeholder="Login"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />

                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={hidePass}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                        <Icon name={nameicon} color="#fff" size={25} />
                    </TouchableOpacity>
                </AreaInput>

                <SubmitButton onPress={() => handleLogin()}>
                    {
                        !loading ?
                            <SubmitText>Carregando...</SubmitText>
                        :
                            <SubmitText>Acessar</SubmitText>

                    }
                    
                </SubmitButton>

                <SubmitButtonOff onPress={() => navigation.navigate('OffPage')}>
                    <SubmitTextOff>Entrar sem login</SubmitTextOff>
                </SubmitButtonOff>
            </Container>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    image: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        width: '15%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b94a',
    },

})