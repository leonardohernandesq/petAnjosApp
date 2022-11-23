import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

    export default function FinanceiroData({ data }){
    return(
            <View style={styles.containerCenter}>
                <View style={styles.divFinanceiro}>
                    <Text style={styles.nameFinanceiro}>Codigo de Barras: {data.barcodes}</Text>
                    <Text style={styles.nameFinanceiro}>Vencimento: {data.duedate.split(' ')[0]}</Text>
                    <Text style={styles.nameFinanceiro}>Valor: {data.billvalue.split(' ')[0]}</Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    containerCenter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
    },
    divFinanceiro:{
        flex:1,
        width:'90%',
        padding: 10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid'
    }
})