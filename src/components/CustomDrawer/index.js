import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth'

export default function CustomDrawer(props) {

  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView style={styles.DrawerContent} {...props}>
      <View style={styles.WelcomeView}>
        <Text style={styles.WelcomeFontTitle}> Bem-Vindo {user.nome?.split(' ')[0]}</Text>
        <Text style={styles.WelcomeFont}> N° do contrato: {user.contrato}</Text>
        <Text style={styles.WelcomeFont}> CPF do Titular: {user.username}</Text>
      </View>
      <DrawerItemList {...props} />
        <DrawerItem label="Sair" onPress={() => signOut()} icon={() => <Ionicons color={'#00644A'} size={18} name={'exit'} style={styles.icon} /> }/> 
    </DrawerContentScrollView>
  );
  }

const styles = StyleSheet.create({
  UploadButton: {
    marginTop: 20,
    backgroundColor: '#dedede',
    width: 85,
    height: 85,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  UploadText: {
    zIndex: 9,
    position: 'absolute',
    fontSize: 55,
    color: '#00644A',
    opacity: 0.4,
  },
  Avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
    opacity: 0.9,
  },
  ButtonClose:{
    marginStart: 20,
    marginTop: 10
  },
  WelcomeFont:{
    color:'#fff',
    marginTop: 2,
    fontSize: 16,
  },
  WelcomeView:{
    paddingStart:10,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#00644A',
    borderBottomColor: '#00644A',
    borderBottomWidth:1,
    marginBottom: 20,
  },
  WelcomeFontTitle:{
    textTransform:'capitalize',
    fontWeight:'bold',
    color:'#fff',
    marginTop: 2,
    fontSize: 16,
  },
  CloseView:{
    display:'flex',
    flexDirection:'row',
  },
  icon:{
    marginRight: -20,
    marginStart:2,
  }
})