import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

import HeaderPages from '../../components/HeaderPages';

export default function Planos() {
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.divPlano}>
                <Image
                    source={require('../../img/bronze.jpg')}
                    style={styles.imgPlano}
                />
                <Text style={styles.tituloPlano}>Bronze</Text>
                <Text style={styles.textPlano}>Adesão – R$180,00 | Mensalidade – R$40,00 | Agregados – R$8,00</Text>
                <TouchableOpacity style={styles.ButtonPlano} onPress={() => { Linking.openURL('https://sacola.pagseguro.uol.com.br/c936b067-4768-4170-a95a-bba08c790e00'); }}>
                    <Text style={styles.TextButtonPlano}>Compre Agora</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divPlano}>
                <Image
                    source={require('../../img/itaqua.jpg')}
                    style={styles.imgPlano}
                />
                <Text style={styles.tituloPlano}>Itaquá</Text>
                <Text style={styles.textPlano}>Adesão – R$180,00 | Mensalidade – R$50,00 | Agregados – R$10,00</Text>
                <TouchableOpacity style={styles.ButtonPlano} onPress={() => { Linking.openURL('https://sacola.pagseguro.uol.com.br/9bad418a-257f-4d9e-9022-6c45866f18cd'); }}>
                    <Text style={styles.TextButtonPlano}>Compre Agora</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divPlano}>
                <Image
                    source={require('../../img/luxo.jpg')}
                    style={styles.imgPlano}
                />
                <Text style={styles.tituloPlano}>Luxo</Text>
                <Text style={styles.textPlano}>Adesão – R$250,00 | Mensalidade – R$50,00 | Agregados – R$10,00</Text>
                <TouchableOpacity style={styles.ButtonPlano} onPress={() => { Linking.openURL('https://sacola.pagseguro.uol.com.br/56b7c50a-2552-46cd-9f7b-fe71de937428'); }}>
                    <Text style={styles.TextButtonPlano}>Compre Agora</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divPlano}>
                <Image
                    source={require('../../img/ouro.jpg')}
                    style={styles.imgPlano}
                />
                <Text style={styles.tituloPlano}>Ouro</Text>
                <Text style={styles.textPlano}>Sem Adesão | Mensalidade – R$80,00 | Agregados – R$10,00 | Pet Coletivo – R$10,00 | Pet Individual – R$15,00</Text>
                <TouchableOpacity style={styles.ButtonPlano} onPress={() => { Linking.openURL('https://api.whatsapp.com/send/?phone=551147516340&text&app_absent=0'); }}>
                    <Text style={styles.TextButtonPlano}>Compre Agora</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divPlano}>
                <Image
                    source={require('../../img/plus.jpg')}
                    style={styles.imgPlano}
                />
                <Text style={styles.tituloPlano}>Plano Diamante</Text>
                <Text style={styles.textPlano}>Sem Adesão | Mensalidade – R$120,00 | Agregados – R$12,00 | Pet Coletivo – R$10,00 | Pet Individual – R$15,00</Text>
                <TouchableOpacity style={styles.ButtonPlano} onPress={() => { Linking.openURL('https://api.whatsapp.com/send/?phone=551147516340&text&app_absent=0'); }}>
                    <Text style={styles.TextButtonPlano}>Compre Agora</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divPlano}>
                <Image
                    source={require('../../img/carenzero.jpg')}
                    style={styles.imgPlano}
                />
                <Text style={styles.tituloPlano}>Carência Zero – Consulte Nossa Equipe de Vendas</Text>
                <Text style={styles.textPlano}>As mensalidades podem ser pagas em qualquer agência bancária, lotérica ou ainda em uma de nossas filiais até o vencimento.</Text>
                <Text style={styles.textPlanoBold}>Desconto Especial para Pagamento à Vista!</Text>
                <Text style={styles.textPlanoBold}>Temos Planos Especiais para Empresa e Comunidade Religiosa!</Text>
                <Text style={styles.textPlano}>Sem adesão e a partir de R$ 8,00 mensais</Text>
                <TouchableOpacity style={styles.ButtonPlano} onPress={() => { Linking.openURL('https://www.api.whatsapp.com/send/?phone=551128571815&text&app_absent=0'); }}>
                    <Text style={styles.TextButtonPlano}>Consulte</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    divPlano: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    tituloPlano: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    textPlano: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    textPlanoBold: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    ButtonPlano: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00644A',
        width: 140,
        height: 40,
        marginTop: 10,
        marginBottom: 40,
    },
    TextButtonPlano: {
        color: '#fff',
    },
});