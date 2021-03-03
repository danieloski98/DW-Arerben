import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


// components
import Signup from '../features/Signup/Index'
import Login from '../features/Login/Index'

const LoginStack = createStackNavigator();
const SignupStack = createStackNavigator();

const LoginRoutes = () => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name="login" component={Login} options={{ headerShown: false}} />
        </LoginStack.Navigator>
    )
}

const SignUpRoutes = () => {
    return (
        <SignupStack.Navigator>
            <SignupStack.Screen name="signup" component={Signup} />
        </SignupStack.Navigator>
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
