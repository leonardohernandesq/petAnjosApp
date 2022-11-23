import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import HeaderPages from '../../components/HeaderPages';

export default function Obitos(){
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Text style={styles.tituloObito}>Estou com um óbito de um dependente, como devo proceder?</Text>

            <Text style={styles.textoObito}>1) Verificar o atestado de óbito no local de falecimento, caso seja falecimento fora de área hospitalar o SAMU indicará todos os procedimentos necessários para conseguir essa documentação, é uma guia amarela, que vem para a empresa para seguirmos com os outros passos.</Text>
            <Text style={styles.textoObito}>2) Entrar em contato com a nossa central de atendimento 24 horas no 4751.6340 (Atendemos toda a Região do Alto Tietê)</Text>
            <Text style={styles.textoObito}>3) Para a finalização dos serviços precisamos que um ente da família compareça a empresa para assinar os documentos.</Text>
            <Text style={styles.textoObito}>Assim liberamos o motorista para retirada do óbito e realização dos serviços de preparação e sepultamento. Os horários para velório e sepultamento são agendados e informados aos familiares de acordo com disponibilidade de salas e horários de sepultamentos disponíveis.</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        height:'100%',
      },
    tituloObito:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:30,
        marginRight:30,
        marginTop:20,
        marginBottom:3,
    },
    textoObito:{
        marginLeft:30,
        marginRight:30,
        fontSize: 16,
        margin:5,
    },
})
