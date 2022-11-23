import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import HeaderPages from '../../components/HeaderPages';

export default function ContUteis(){
    return(
        <View>
            
            <View style={styles.container}>

                <TouchableOpacity style={styles.containerTel} onPress={()=>{Linking.openURL('tel:180');}}>
                    <Text style={styles.numberName}>Central de Atendimento à Mulher</Text>
                    <Text style={styles.number}>180</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerTel} onPress={()=>{Linking.openURL('tel:181');}}>
                    <Text style={styles.numberName}>Disque Denúncia</Text>
                    <Text style={styles.number}>181</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerTel} onPress={()=>{Linking.openURL('tel:190');}}>
                    <Text style={styles.numberName}>Polícia</Text>
                    <Text style={styles.number}>190</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerTel} onPress={()=>{Linking.openURL('tel:192');}}>
                    <Text style={styles.numberName}>Emergência de Saúde</Text>
                    <Text style={styles.number}>192</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerTel} onPress={()=>{Linking.openURL('tel:193');}}>
                    <Text style={styles.numberName}>Bombeiro</Text>
                    <Text style={styles.number}>193</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        paddingTop: 15,
        backgroundColor:'#fff',
        height:'100%'
    },

    titulo:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10,
    },

    containerTel:{
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#dedede',
        margin:5,
        marginLeft:25,
        marginRight:25,
        borderRadius:10,
    },
    numberName:{
        fontSize:16,
    },
    number:{
        fontSize:16,
        fontWeight:'bold',
        color:'red'
    }
})
