import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderPages from '../../components/HeaderPages';

export default function Promocoes() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.banner}
                source={require('../../img/banner-amigoprotegido.jpg')}
            />
            <View style={styles.viewPromotion}>
                <Text style={styles.titlePromotion}>Amigo Protegido</Text>
                <Text style={styles.contentPromotion}>Indique o seu amigo e ganhe uma mensalidade</Text>
                <TouchableOpacity style={styles.buttonContact} onPress={() => { Linking.openURL('https://api.whatsapp.com/send/?phone=551128571815&text&app_absent=0'); }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 5 }} colors={['#009670', '#0059bf']} style={styles.linearGradient}>
                        <Text style={styles.buttonText}>Entre em contato</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    linearGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        marginTop: 5,
        padding: 10,
        borderRadius: 7,
        width: '100%',
    },
    banner: {
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30
    },
    viewPromotion: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    titlePromotion: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    contentPromotion: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5,
    },
    buttonText: {
        fontSize: 15,
        color: '#fff'
    },
})