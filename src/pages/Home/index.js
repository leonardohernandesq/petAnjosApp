import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Linking, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';
import LoadingPage from '../../components/LoadingPage';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function Desloading() {
    setLoading(false)
  }

  setTimeout(Desloading, 900)

  if (loading) {
    return <LoadingPage />
  } else {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
        <SafeAreaView style={styles.container}>
        <Header />

          <TouchableOpacity style={styles.DivDependentes} onPress={() => navigation.navigate('Dependentes')}>
            <Text style={styles.tituloDependentes}>Gerenciamento de Dependentes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.DivFinanceiro} onPress={() => navigation.navigate('Financeiro')}>
            <Text style={styles.tituloFinanceiro}>Financeiro</Text>
          </TouchableOpacity>

          <Text style={styles.titulocarrossel}>Serviços</Text>
          <View style={styles.ContainerButtons}>
            <View style={styles.containerScroll}>
              <TouchableOpacity style={styles.botaoService} onPress={() => navigation.navigate('Planos')}>
                <Image
                  source={require('../../img/8.png')}
                  style={styles.iconBox}
                />
              </TouchableOpacity>
              <Text style={styles.TextScroll}>Planos</Text>
            </View>

            <View style={styles.containerScroll}>
              <TouchableOpacity style={styles.botaoService} onPress={() => navigation.navigate('Promocoes')}>
                <Image
                  source={require('../../img/7.png')}
                  style={styles.iconBox}
                />
              </TouchableOpacity>
              <Text style={styles.TextScroll}>Promoções</Text>
            </View>

            <View style={styles.containerScroll}>
              <TouchableOpacity style={styles.botaoService} onPress={() => navigation.navigate('Obitos')}>
                <Image
                  source={require('../../img/3.png')}
                  style={styles.iconBox}
                />
              </TouchableOpacity>
              <Text style={styles.TextScroll}>Óbitos</Text>
            </View>

          </View>
          
          <View style={styles.ContainerButtons}>

            <View style={styles.containerScroll}>
              <TouchableOpacity style={styles.botaoService} onPress={() => navigation.navigate('Locacoes')}>
                <Image
                  source={require('../../img/5.png')}
                  style={styles.iconBox}
                />
              </TouchableOpacity>
              <Text style={styles.TextScroll}>Locações</Text>
            </View>

            <View style={styles.containerScroll}>
              <TouchableOpacity style={styles.botaoService} onPress={() => { Linking.openURL('https://www.petparceiros.com.br'); }}>
                <Image
                  source={require('../../img/6.png')}
                  style={styles.iconBox}
                />
              </TouchableOpacity>
              <Text style={styles.TextScroll}>Pet parceiros</Text>
            </View>

            <View style={styles.containerScroll}>
              <TouchableOpacity style={styles.botaoService} onPress={() => { Linking.openURL('https://anjosassistencia.com.br/manual-do-associado/'); }}>
                <Image
                  source={require('../../img/1.png')}
                  style={styles.iconBox}
                />
              </TouchableOpacity>
              <Text style={styles.TextScroll}>Manual do associoado</Text>
            </View>
          </View>

          <View style={styles.ContainerDuvidas}>
            <View style={styles.containerScrollDuvidas}>
              <TouchableOpacity style={styles.botaoService} onPress={() => { Linking.openURL('https://www.api.whatsapp.com/send/?phone=551128571815&text&app_absent=0'); }}>
                <Image
                  source={require('../../img/2.png')}
                  style={styles.iconBox}
                  />
              </TouchableOpacity>
              <Text style={styles.TextScroll}>Dúvidas</Text>
            </View>
          </View>

          <Text style={styles.titulocarrossel}>Extras</Text>
          <View style={[styles.ContainerButtons, styles.spacing]}>
            <View style={styles.containerScrollColor}>
              <TouchableOpacity style={styles.botaoService} onPress={() => navigation.navigate('ContUteis')}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 5 }} colors={['#009670', '#0059bf']} style={styles.linearGradient}>
                  <Text style={styles.TextScrollColor}>Contatos Úteis</Text>
                </LinearGradient>
              </TouchableOpacity>

            </View>
            <View style={styles.containerScrollColor}>
              <TouchableOpacity style={styles.botaoService} onPress={() => navigation.navigate('Calendario')}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 5 }} colors={['#009670', '#0059bf']} style={styles.linearGradient}>
                  <Text style={styles.TextScrollColor}>Calendário</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    height: '100%',
    backgroundColor: '#fff',
  },

  DivDependentes: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#00644A30',
    borderColor: '#00644A30',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 8,
  },
  tituloDependentes: {
    fontSize: 16,
    marginLeft: 12,
    color: '#00644A',
  },

  DivFinanceiro: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#e8e8e8',
    marginLeft: 20,
    marginRight: 20,
    margin: 5,
    borderRadius: 8,
  },
  tituloFinanceiro: {
    fontSize: 16,
    marginLeft: 12,
    color: '#000',
  },

  containerScrollColor: {
    width: "49%",
  },

  titulocarrossel: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 5
  },

  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginTop: 5,
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },

  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },

  
  TextScrollColor: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },

  ContainerButtons:{
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: 20
  },
  containerScroll:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    width: '31%',
    marginBottom: 15,
    padding: 10,
    height: 100,
  },
  containerScrollDuvidas:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    width: '90%',
    marginBottom: 15,
    padding: 10,
    height: 100,
  },
  ContainerDuvidas:{
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextScroll: {
    fontSize: 15,
    lineHeight:15,
    paddingTop:5,
    textAlign: 'center'
  },

  spacing:{
    paddingBottom: 20
  }
})