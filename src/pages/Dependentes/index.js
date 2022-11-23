import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView, Modal, Platform, TextInput, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoadingPage from '../../components/LoadingPage';

import Feather from 'react-native-vector-icons/Feather'

import { AuthContext } from '../../contexts/auth'

import api from '../../services/api';
import Dependente from '../../pages/Dependentes/dependentes'

export default function Dependentes() {

    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const [insured, setInsured] = useState('');
    const [doccpf, setDocCpf] = useState('');
    const [docrg, setDocRg] = useState('');
    const [dependentes, setDependentes] = useState('');
    const [openAdicionar, setOpenAdicionar] = useState(false);
    const [adicionarDependentes, setAdicionarDependentes] = useState('');
    const [openRemover, setOpenRemover] = useState(false);
    const [removerDependentes, setRemoverDependentes] = useState('');


    useEffect(() => {

        async function loadDependentes() {
            const response = await api.get('rest/wsanjcart/dependents?', {
                params: {
                    'contract': user.contrato,
                },
            })

                .then((response) => {
                    setInsured(response.data.insured)
                    setDocCpf(response.data.doccpf)
                    setDocRg(response.data.docrg)
                    setDependentes(response.data.dependent)
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error.response.data);
                    setLoading(false)
                });
        }

        loadDependentes();
    }, []);

    function enviarRemoveDependentes() {
        if(removerDependentes === ''){
            alert('Preencha todos os dados')
        } else {
            Linking.openURL(`mailto:contato@anjosassistencia.com.br?subject=Remover Dependente App&body=Gostaria de Remover o dependente ${removerDependentes}`)
        }
    }
    
    function enviarAddDependentes() {
        if(adicionarDependentes === ''){
            alert('Preencha todos os dados')
        } else {
            Linking.openURL(`mailto:contato@anjosassistencia.com.br?subject=Adicionar Dependente App&body=Gostaria de Adicionar o dependente ${adicionarDependentes}`)
        }
    }
    



    if (loading) {
        return <LoadingPage />
    } else{
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.containerCenter}>
                        <Text style={styles.typeDependentes}>TITULAR</Text>
                        <View style={styles.divNomeDependentes}>
                            <Text>{insured}</Text>
                        </View>
                    </View>

                    {
                        dependentes.map((item) => <Dependente data={item} key={item.name}/> )
                    }

                        <View style={styles.viewBotao}>
                            <TouchableOpacity style={styles.agregarDependentes} onPress={() => setOpenAdicionar(true)}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 5 }} colors={['#009670', '#0059bf']} style={styles.linearGradient}>
                                    <Text style={styles.textButton}> Agregar Dependentes </Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.apagarDependentes} onPress={() => setOpenRemover(true)}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 5 }} colors={['#eee', '#eee']} style={styles.linearGradient}>
                                    <Text style={styles.apagarButton}> Excluir Dependentes </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                </ScrollView>


                <Modal visible={openAdicionar} animationType="slide" transparent={true}>
                    <KeyboardAvoidingView style={styles.ModalContainer} behavior={Platform.OS === 'android' ? '' : 'padding'}>
                        <TouchableOpacity style={styles.ButtonBack} onPress={() => setOpenAdicionar(false)}>
                            <Feather
                                name="arrow-left"
                                size={22}
                                color="#121212"
                            />
                            <Text style={styles.ButtonText} color="#121212">Voltar</Text>
                        </TouchableOpacity>

                        <Text style={styles.tituloModal}>Adicionar Dependentes</Text>
                        <TextInput
                            style={styles.Input}
                            placeholder={'Nome do dependente'}
                            value={adicionarDependentes}
                            onChangeText={(text) => setAdicionarDependentes(text)}
                        />

                        <TouchableOpacity style={styles.Button} onPress={() => enviarAddDependentes()}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 5 }} colors={['#009670', '#0059bf']} style={styles.linearGradient}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>Adicionar</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </Modal>



                {/* Modal Remover */}

                <Modal visible={openRemover} animationType="slide" transparent={true}>
                    <KeyboardAvoidingView style={styles.ModalContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <TouchableOpacity style={styles.ButtonBack} onPress={() => setOpenRemover(false)}>
                            <Feather
                                name="arrow-left"
                                size={22}
                                color="#121212"
                            />
                            <Text style={styles.ButtonText} color="#121212">Voltar</Text>
                        </TouchableOpacity>

                        <Text style={styles.tituloModal}>Excluir Dependentes</Text>
                        <TextInput
                            style={styles.Input}
                            placeholder={'Nome do dependente'}
                            value={removerDependentes}
                            onChangeText={(text) => setRemoverDependentes(text)}
                        />

                        <TouchableOpacity style={styles.Button} onPress={() => enviarRemoveDependentes()}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 5 }} colors={['#ff4040', '#cc0000']} style={styles.linearGradient}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>Remover</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </Modal>
            </View>


        );
        }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollview:{

    },
    linearGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    containerCenter:{
        flex:1,
        width:'100%',
        alignItems:'center',
        marginTop: 20,
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
    agregarDependentes: {
        width: '87%',
    },
    apagarDependentes: {
        width: '87%',
    },
    textButton: {
        fontSize: 15,
        color: '#fff',
    },
    viewBotao: {
        marginTop: 10,
        marginBottom: 20,
        justifyContent:'center',
        alignItems:'center',
    },
    apagarButton: {
        fontSize: 15,
        color: '#cf3c4f',
    },

    //modal

    ModalContainer: {
        width: '100%',
        height: '70%',
        backgroundColor: '#fafafa',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonBack: {
        position: 'absolute',
        top: 15,
        left: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Input: {
        backgroundColor: '#DDD',
        width: '80%',
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
        color: '#121212',
        textAlign: 'center',
    },
    Button: {
        width: '80%',
        height: 60,
        borderRadius: 4,
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        color: '#000',
        fontSize: 16,
    },
    tituloModal: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    }

})