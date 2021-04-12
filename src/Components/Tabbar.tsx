import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Theme } from '../theme'
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import useUserDetails from '../Hooks/useUserDetails';

export default function Tabbar() {
    const navigation = useNavigation();
    const userDetails = useUserDetails();

    return (
        <View style={style.parent}>
            <View style={style.imageBox}>
                <View style={{ width: '30%', height: '160%', backgroundColor: 'transparent'}}>
                    <Image source={require('../../assets/images/avatar.png')} resizeMode="cover" style={{ height: '50%', width: '100%'}} />
                </View>
                <Text style={{ width: '100%', marginLeft: 10, textAlign: 'left' }}>{userDetails.user.first_name}</Text>
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
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 50,
    },
    iconBox: {
        width: '30%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})