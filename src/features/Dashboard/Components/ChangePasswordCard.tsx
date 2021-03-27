import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// icon
import EditIcon from '../../../../assets/svgs/Password'
import GradientButton from '../../../Components/GradientButton'
import { Theme } from '../../../theme'

export default function ChangePasswordCard() {
    const navigation = useNavigation();
    return (
        <View style={style.parent}>

            <View style={{ width: '100%', height: 40, alignItems: 'center'}}>
                <EditIcon />
            </View>

            <Text style={{ marginTop: 20, textAlign: 'center', fontSize: Theme.header, fontWeight: '500'}}>Change my DWA Password</Text>

            <Text style={{ marginTop: 20, textAlign: 'center', fontSize: Theme.normalText}}>You can change your DWA password Anytime</Text>

            <View style={{ width: '100%', height: 40, alignItems: 'center'}}>
                <View style={{ width: '50%', height: '100%'}}>
                    <GradientButton text="Change" onPress={() => navigation.navigate("update", {section: 3})} />
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    parent: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 15,
        justifyContent: 'center',
        marginBottom: 30,
    }
})
