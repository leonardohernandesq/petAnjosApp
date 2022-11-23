import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import emailjs from '@emailjs/browser';
import { ScrollView } from 'react-native-gesture-handler';

export default function Locacoes(){
    const [nomeInput, setNomeInput] = useState("");
    const [tel, setTel] = useState("");
    const [checked, setChecked] = useState('Cadeira de Rodas')

    function enviarForm(){
        if(nomeInput === '' && tel === ''){
            alert('Preencha todos os dados')
        } else {
            Linking.openURL(`mailto:contato@anjosassistencia.com.br?subject=Locação App&body= Desejo alugar uma ${checked} \n Nome: ${nomeInput} \n Telefone: ${tel}`)
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.titleLocacao}>Planos de equipamentos traumato ortopédicos</Text>
            </View>

            <View style={styles.formContainer}>
                <TextInput style={styles.formInput}
                    label="Nome"
                    value={nomeInput}
                    theme={{ colors: { primary: '#00644A' } }}
                    activeunderlineColor="#00644A"
                    onChangeText={nomeInput => setNomeInput(nomeInput)}
                />
            </View>

            <View style={styles.formContainer}>
                <TextInput style={styles.formInput}
                    label="Telefone"
                    theme={{ colors: { primary: '#00644A' } }}
                    activeunderlineColor="#00644A"
                    keyboardType = 'numeric'
                    value={tel}
                    onChangeText={tel => setTel(tel)}
                />
            </View>

            <View style={styles.containerLocacao}>
                <View style={styles.viewLocacao}>
                    <RadioButton
                        value="Cadeira de Rodas"
                        status={ checked === 'Cadeira de Rodas' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Cadeira de Rodas')}
                        color='#fff'
                        uncheckedColor='#fff'
                    />
                    <Text style={styles.textLocacao}>Cadeira de rodas</Text>
                </View>

                <View style={styles.viewLocacao}>
                    <RadioButton
                        value="Cadeira de Banho"
                        status={ checked === 'Cadeira de Banho' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Cadeira de Banho')}
                        color='#fff'
                        uncheckedColor='#fff'
                    />
                    <Text style={styles.textLocacao}>Cadeira de Banho</Text>
                </View>
                <View style={styles.viewLocacao}>
                    <RadioButton
                        value="Muleta"
                        status={ checked === 'Muleta' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Muleta')}
                        color='#fff'
                        uncheckedColor='#fff'
                    />  
                    <Text style={styles.textLocacao}>Muleta</Text>
                </View>

            </View>

            <View style={styles.containerLocacao}>
                <View style={styles.viewLocacao}>
                    <RadioButton
                        value="Bengala"
                        status={ checked === 'Bengala' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Bengala')}
                        color='#fff'
                        uncheckedColor='#fff'
                    />  
                    <Text style={styles.textLocacao}>Bengala</Text>
                </View>

                <View style={styles.viewLocacao}>
                    <RadioButton
                        value="Cama Hospitalar"
                        status={ checked === 'Cama Hospitalar' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Cama Hospitalar')}
                        color='#fff'
                        uncheckedColor='#fff'
                    />  
                    <Text style={styles.textLocacao}>Cama Hospitalar</Text>
                </View>

                <View style={styles.viewLocacao}>
                    <RadioButton
                        value="Andador"
                        status={ checked === 'Andador' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Andador')}
                        color='#fff'
                        uncheckedColor='#fff'
                    />  
                    <Text style={styles.textLocacao}>Andador</Text>
                </View>
            </View>

            <View style={styles.containerLocacao}>
                <View style={styles.viewLocacaoOutros}>
                    <RadioButton
                        value="Outros"
                        status={ checked === 'Outros' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Outros')}
                        color='#fff'
                        uncheckedColor='#fff'
                    />  
                    <Text style={styles.textLocacao}>Outros</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.botaoEnviar} onPress={() => enviarForm()}>
                <Text style={styles.textBotao}>Enviar</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingBottom:20,
        backgroundColor:'#fff',
        height:'100%',
    },
    formContainer:{
        margin:10,
        marginTop:5,
        padding:0,
    },
    formInput:{
        padding:0,
        height:55,
    },
    containerLocacao:{
        flexDirection:'row',
        marginLeft:5,
        marginRight:5,
    },
    titleLocacao:{
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom:10,
        color:'#444'
    },
    viewLocacao:{
        flex:2,
        backgroundColor:'#00644A',
        borderRadius:8,
        height:90,
        justifyContent:'center',
        alignItems: 'center',
        margin: 5,
        paddingLeft:20,
        paddingRight:20,
    },
    viewLocacaoOutros:{
        flex:1,
        backgroundColor:'#00644A',
        borderRadius:8,
        height:90,
        justifyContent:'center',
        alignItems: 'center',
        margin: 5,
        paddingLeft:20,
        paddingRight:20,
    },
    textLocacao:{
        fontSize: 15,
        color:'#fff',
        textAlign:'center',
    },
    botaoEnviar:{
        height: 60,
        margin: 10,
        justifyContent:'center',
        alignItems: 'center',
        borderColor: '#00644A',
        borderWidth: 2,
        borderRadius:8,
    },
    textBotao:{
        fontSize: 15,
        color: '#00644A',
    }
})