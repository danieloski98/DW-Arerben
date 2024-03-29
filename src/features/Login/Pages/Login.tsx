import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'
import { Theme } from '../../../theme'

// components
import LoginForm from '../Components/LoginForm';

export default function Login(props: any) {
    return (
        <View style={style.parent}>

            <StatusBar barStyle="dark-content" backgroundColor="transparent" />

            <View style={style.navigationContainer}>
                <Feather name="chevron-left" color="black" size={30} onPress={() => props.navigation.goBack()} />
                <Text style={style.navigationText}>Back</Text>
            </View>

            <View style={style.form}>
                <LoginForm />
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    parent: {
        width: Theme.width,
        height: Theme.height, 
        backgroundColor: '#F8F9FB', 
        paddingHorizontal: 20, 
        paddingVertical: 30
    },
    navigationContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },
    navigationText: {
        fontSize: Theme.header,
        marginLeft: 10
    },
    form: {
        flex: 0.9, 
        backgroundColor: 'white', 
        borderRadius: 20,
        overflow: 'hidden'
    }
})