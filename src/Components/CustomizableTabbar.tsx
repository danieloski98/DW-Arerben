import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Theme } from '../theme'
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

interface IProps {
    name: string;
}

export default function CustomizableTabber(props: IProps) {

    const navigation = useNavigation();

    return (
        <View style={style.parent}>
            <View style={style.imageBox}>
                <Feather name="chevron-left" size={25} color="grey"  onPress={() => navigation.goBack()}/>
                <Text style={{ marginLeft: '5%', fontSize: Theme.normalText, fontWeight: '700' }}>{props.name}</Text>
            </View>
            <View style={style.iconBox}>
                {/* <Feather name="search" size={30} color="grey" style={{ marginRight: 10}} />
                <Feather name="bell" size={30} color="grey" /> */}
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