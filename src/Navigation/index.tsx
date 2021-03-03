import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Authentication from '../Navigation/AuthenticationNav'

export default function index() {
    return (
       <NavigationContainer>
           <Authentication />
       </NavigationContainer>
    )
}
