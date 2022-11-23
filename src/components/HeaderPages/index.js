import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function HeaderPages() {

  const navigation = useNavigation();

  return(
    <View style={styles.menu}>
        <View style={styles.areaMenuIcon}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Icon name="arrow-left" color="#000" size={30} />
            </TouchableOpacity>
            <Text style={styles.tituloMenu}>Voltar</Text>
        </View>
        <View style={styles.areaMenuName}>
        </View>
    </View>
    );
}
          
    const styles = StyleSheet.create({
        menu:{
            height: 60,
            paddingTop: 13,
            paddingLeft: 20,
            backgroundColor: '#fff',
            justifyContent: 'center',
            flexDirection:'row',
            borderBottomColor:'#ddd',
            borderBottomWidth: 1,
        },
        areaMenuIcon:{
            flex:1,
            flexDirection:'row',
        },
        tituloMenu:{
            fontSize: 20,
            marginLeft: 10,
            marginTop: -1
        },
    })