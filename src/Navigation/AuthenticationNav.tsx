import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


// components
import Signup from '../features/Signup/Index'
import Loginindex from '../features/Login/Index'
import Login from '../features/Login/Pages/Login'

const AuthStack = createStackNavigator();
const SignupStack = createStackNavigator();

const LoginRoutes = () => {
    return (
        <AuthStack.Navigator initialRouteName="index">
            <AuthStack.Screen name="index" component={Loginindex} options={{ headerShown: false}} />
            <AuthStack.Screen name="login" component={Login} options={{ headerShown: false}} />
            <AuthStack.Screen name="signup" component={Signup} options={{ headerShown: false}} />
        </AuthStack.Navigator>
    )
}


const AuthChecker = () => {
    return <LoginRoutes />
}

export default function AuthenticationNav() {
    return (
        <AuthChecker />
    )
}
