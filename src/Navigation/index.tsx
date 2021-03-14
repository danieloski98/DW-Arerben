import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Authentication from '../Navigation/AuthenticationNav'
import Dashboard from '../features/Dashboard/Index'

export default function index() {
    return (
       <NavigationContainer>
           <Authentication />
       </NavigationContainer>
    )
}
