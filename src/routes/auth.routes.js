import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import CustomDrawer from '../components/CustomDrawer';
import Home from '../pages/Home';
import Calendario from '../pages/Calendario';
import ContUteis from '../pages/ContUteis';
import Dependentes from '../pages/Dependentes';
import Financeiro from '../pages/Financeiro';
import Locacoes from '../pages/Locacoes';
import Obitos from '../pages/Obitos';
import Planos from '../pages/Planos';
import Promocoes from '../pages/Promocoes';

const AuthStack = createStackNavigator();
const AuthDrawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <AuthDrawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveTintColor: "#00644A",
                drawerLabelStyle: {
                    marginLeft: -20
                },
            }}
        >
            <AuthDrawer.Screen name="Home" component={Home} options={{ headerShown: false, drawerIcon: ({ }) => (<Ionicons name='home' size={18} color={'#00644A'} />) }} />
            <AuthDrawer.Screen name="Financeiro" component={Financeiro} options={{ headerShown: true, drawerIcon: ({ }) => (<Ionicons name='wallet' size={18} color={'#00644A'} />) }} />
            <AuthDrawer.Screen name="Dependentes" component={Dependentes} options={{ headerShown: true, drawerIcon: ({ }) => (<Ionicons name='people' size={18} color={'#00644A'} />) }} />
        </AuthDrawer.Navigator>
    );
}

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Início" component={MyDrawer}
                options={{ headerShown: false }} />
            <AuthStack.Screen name="Dependentes" component={Dependentes}
                options={{ title: 'Dependentes' }} />
            <AuthStack.Screen name="Financeiro" component={Financeiro}
                options={{ title: 'Financeiro' }} />
            <AuthStack.Screen name="Planos" component={Planos}
                options={{ title: 'Planos' }} />
            <AuthStack.Screen name="Locacoes" component={Locacoes}
                options={{ title: 'Locações' }} />
            <AuthStack.Screen name="Obitos" component={Obitos}
                options={{ title: 'Óbitos' }} />
            <AuthStack.Screen name="Promocoes" component={Promocoes}
                options={{ title: 'Promoções' }} />
            <AuthStack.Screen name="Calendario" component={Calendario}
                options={{ title: 'Calendário' }} />
            <AuthStack.Screen name="ContUteis" component={ContUteis}
                options={{ title: 'Contatos Úteis' }} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;