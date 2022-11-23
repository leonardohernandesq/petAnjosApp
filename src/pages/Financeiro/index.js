import React, {useEffect, useState, useContext} from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';

import api from '../../services/api'

import { AuthContext } from '../../contexts/auth'

import FinanceiroData from './financeiro'

var dt = new Date();
var dtold = new Date();

dt = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
dtold = dtold.getFullYear() - 1

export default function Financeiro(){
    
    const { user } = useContext(AuthContext);
    const [bankbill, setBankBill] = useState('');
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function loadFinanceiro(){
            const response = await api.get('rest/WSANJFINAN/bankbill?', {
                params: {
                    'Contract': user.contrato,
                    'Dataini': dtold + '/01/01',
                    'Datafim': dt,
                },
            })
            
            .then((response) => {
                setBankBill(response.data.bankbill)
                console.log(bankbill)
                setLoading(false)
              })
              .catch((error) => {
                console.log(error.response.data);
                setLoading(false)
              });
        }

        loadFinanceiro();
    }, []);

    return(
        loading ? 
            <View style={styles.containerLoading}>
                <ActivityIndicator size="large" color="#000" />
            </View>
            
        :
        <View style={styles.container}>
            <FlatList
                data={bankbill}
                keyExtractor={item => String(item.duedate)}
                renderItem={ ({ item }) => <FinanceiroData data={item} /> }
            />
        </View>

    );

}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#fff'
},
containerLoading:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
}
})