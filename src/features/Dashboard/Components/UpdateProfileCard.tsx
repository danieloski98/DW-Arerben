import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// icon
import EditIcon from '../../../../assets/svgs/Edit_profile'
import GradientButton from '../../../Components/GradientButton'
import { Theme } from '../../../theme'

export default function UpdateProfileCard() {
    const navigation = useNavigation();

    return (
        <View style={style.parent}>

            <View style={{ width: '100%', height: 40, alignItems: 'center'}}>
                <EditIcon />
            </View>

            <Text style={{ marginTop: 20, textAlign: 'center', fontSize: Theme.header -2, fontWeight: '700'}}>Update Profile</Text>

            <Text style={{ marginTop: 10, textAlign: 'center', fontSize: Theme.normalText}}>Complete your profile so you can set yourself up for earning and investing</Text>

            <View style={{ width: '100%', height: 40, alignItems: 'center'}}>
                <View style={{ width: '50%', height: 50 }}>
                    <GradientButton text="Update Profile" onPress={() => navigation.navigate("update", {section: 1})} />
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
