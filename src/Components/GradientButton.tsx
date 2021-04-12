import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Theme } from '../theme'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function call() {}

interface IProps {
    onPress: typeof call;
    text: string;
    loading?: boolean;
}

export default function GradientButton(props: IProps) {
    const navigation = useNavigation();

    return (
        <LinearGradient
                    start={{x: 0.0, y: 0.4}}
                    end={{x: 1, y: 0.0}}
                    colors={['#F46929', '#FFE5D9']}
                    style={{ width: '100%', height: '100%', borderRadius: 10, marginTop: 20}}
                >
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                    onPress={props.onPress}
                    >
                        {/* <Feather name="lock" color="white" size={30} /> */}
                       {
                           props.loading ? <ActivityIndicator size="large" color="white" /> :  <Text style={{ color: 'white', fontSize: Theme.normalText, marginLeft: 10}}>{props.text}</Text>
                       }
                    </TouchableOpacity>
        </LinearGradient>
    )
}
