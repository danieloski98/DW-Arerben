import React from 'react'
import { View, Text } from 'react-native'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import { Theme } from '../../../theme'
import { Feather } from '@expo/vector-icons'

export default function ROI_History() {
    return (
        <View style={{ flex: 1 }}>
            <CustomizableTabber name="ROI" />
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ width: '80%', height: 300, backgroundColor: 'white', marginTop: 50, padding: Theme.majorSpace, alignItems: 'center', justifyContent: 'center'}}>
                    <Feather name="dollar-sign" size={50} color={Theme.primaryColor} />
                    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20, fontWeight: '300' }}>You have no current investment history at the moment.</Text>
                </View>
            </View>
        </View>
    )
}
