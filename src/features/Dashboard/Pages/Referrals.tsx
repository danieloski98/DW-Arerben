import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import { Theme } from '../../../theme'
import { Feather } from '@expo/vector-icons'

const Invite = () => {
    return (
        <TouchableOpacity style={{ width: Theme.width/100*30, height: '60%', borderRadius: 10, borderWidth: 2, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Invite Friend</Text>
        </TouchableOpacity>
    )
}

export default function Referrals() {
    return (
        <View style={{ flex: 1 }}>
            <CustomizableTabber name="My referrals" rightItem={<Invite />}  />
            <View style={{ flex: 1, padding: Theme.majorSpace }}>
                <View style={{ width: '100%', height: 250, justifyContent: 'center', backgroundColor: 'white', alignItems: 'center', borderRadius: 10}}>
                    <Feather name="user" size={55} color={Theme.primaryColor} />
                    <Text>You have not invited anyone.</Text>
                </View>
            </View>
        </View>
    )
}
