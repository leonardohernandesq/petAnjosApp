import React, { useContext } from 'react';

import { AuthContext } from '../contexts/auth'

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {

    const { user } = useContext(AuthContext);

    if (user.nome !== undefined) {
        return (
            <AuthRoutes />
        )
    } else {
        return (
            <AppRoutes />
        )
    }
}

export default Routes;