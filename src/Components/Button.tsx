import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Theme } from '../theme'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function call() {}

interface IProps {
    onPress: typeof call;
    text: string;
    color?: string;
}

export default function Button(props: IProps) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: props.color ? props.color:'lightgrey', borderRadius: 10}} onPress={props.onPress} >
            {/* <Feather name="lock" color="white" size={30} /> */}
            <Text style={{ color: 'white', fontSize: Theme.normalText, marginLeft: 10}}>{props.text}</Text>
        </TouchableOpacity>
    )
}
