import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function OffHeaderPages() {

    const navigation = useNavigation();

    return (
        <View style={styles.menu}>
            <View style={styles.areaMenuIcon}>
                <TouchableOpacity onPress={() => navigation.navigate('OffPage')}>
                    <Icon name="arrow-left" color="#000" size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        height: 60,
        paddingTop: 13,
        paddingLeft: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    areaMenuIcon: {
        flex: 1,
        backgroundColor: '#fff',
    },
    areaMenuName: {
        flex: 4,
    },
    tituloMenu: {
        fontSize: 20,
    },
})