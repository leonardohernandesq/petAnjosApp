import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth'
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  return(
    <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.toggleButton}>
                <Icon name="menu" color="#000" size={30} />
            </TouchableOpacity>
            <Text style={styles.tituloMenu}>Olá, {user.nome.split(' ').shift()}</Text>
    </View>
    );
}
          
    const styles = StyleSheet.create({
        menu:{
            display:'flex',
            height: 60,
            paddingLeft: 20,
            backgroundColor: '#fff',
            alignItems:'center',
            flexDirection:'row',
            borderBottomColor:'#ddd',
            borderBottomWidth: 1,
        },
        tituloMenu:{
            fontSize: 20,
            textTransform: 'capitalize'
        },
        toggleButton:{
            marginRight: 10,
        }
    })