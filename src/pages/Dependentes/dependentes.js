import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

    export default function Dependente({ data }){
    return(
            <View style={styles.containerCenter}>
                <View style={styles.divDependentes}>
                    <Text style={styles.typeDependentes}>{data.type.split(' ')[0]}</Text>
                </View>
                <View style={styles.divNomeDependentes}>
                    <Text>{data.name}</Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    containerCenter:{
        flex:1,
        width:'100%',
        alignItems:'center',
    },
    divNomeDependentes:{
        flex:1,
        justifyContent:'center',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:7,
        height: 50,
        width: '87%',
        paddingLeft: 10,
    },
    divDependentes:{
        marginTop: 10,
    },
    typeDependentes:{
        fontSize: 16,
        fontWeight:'bold',
        textAlign:'center'
    },
})