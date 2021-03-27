import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Theme } from '../theme'
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Tabbar() {
    const navigation = useNavigation();

    return (
        <View style={style.parent}>
            <View style={style.imageBox}>
                <Image source={require('../../assets/images/avatar.png')} resizeMode="contain" style={[StyleSheet.absoluteFillObject, {width: '50%', height: '100%'}]} />
                <Text style={{ marginLeft: '50%'}}>Alexis sanche</Text>
            </View>
            <View style={style.iconBox}>
                <Feather name="search" size={25} color="grey" style={{ marginRight: 10}} onPress={() => navigation.navigate("search")} />
                <Feather name="bell" size={25} color="grey" onPress={() => navigation.navigate("notifications")} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    parent: {
        backgroundColor: 'transparent',
        width: Theme.width,
        height: Theme.height / 100 * 10,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    imageBox: {
        width: '50%',
        height: '80%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: '30%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})