import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Calendario from '../pages/Calendario';
import ContUteis from '../pages/ContUteis';
import OffPage from '../pages/OffPage';
import Locacoes from '../pages/Locacoes';
import SignIn from '../pages/SignIn';
import Planos from '../pages/Planos'

const AppStack = createStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="SignIn" component={SignIn}
                options={{ headerShown: false }} />
            <AppStack.Screen name="OffPage" component={OffPage}
                options={{ headerShown: false, title: 'Home'}} />
            <AppStack.Screen name="Calendario" component={Calendario}
                options={{ title: 'Calendário' }} />
            <AppStack.Screen name="ContUteis" component={ContUteis}
                options={{ title: 'Contatos' }} />
            <AppStack.Screen name="Locacoes" component={Locacoes}
                options={{ title: 'Locações' }} />
            <AppStack.Screen name="Planos" component={Planos}
                options={{ title: 'Planos'}} />
        </AppStack.Navigator>
    );
}