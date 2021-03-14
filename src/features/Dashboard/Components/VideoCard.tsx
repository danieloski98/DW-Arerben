import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Theme } from '../../../theme'
import { Feather } from '@expo/vector-icons'

export default function VideoCard() {
    return (
        <View style={style.parent}>
            <TouchableOpacity style={{ width: '100%', height: '75%', borderRadius: 20, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center'}}>
                <Feather name="play-circle" size={70} color="grey" />
            </TouchableOpacity>
            <Text style={{ fontSize: Theme.normalText, fontWeight: '600', marginTop: 20}}>What is Forex Trading and how does it work?</Text>
            <Text style={{ fontSize: Theme.normalText - 2, fontWeight: '400', marginTop: 10}}>
            2 Mins Video
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    parent: {
        width: '100%', 
        height: 350, 
        backgroundColor: 'white', 
        borderRadius: 20, 
        marginTop: 30,
        padding: 20,
    }
})