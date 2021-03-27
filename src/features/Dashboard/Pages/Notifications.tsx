import React from 'react'
import { View, Text } from 'react-native'
import Animated from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons'

import CustomizableTabbar from '../../../Components/CustomizableTabbar'
import { Theme } from '../../../theme'

export default function Notifications() {
    return (
        <Animated.ScrollView>
            <CustomizableTabbar name='Notifications' />
            <View style={{ paddingHorizontal: 30, paddingTop: 50, alignItems: 'center'}}>
                <View style={{ width: '100%', height: Theme.height/100*30, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', padding: Theme.majorSpace, justifyContent: 'center' }}>
                    <Feather name="mail" size={45} color={Theme.primaryColor} />
                    <Text style={{ fontSize: Theme.header, color:  'black', textAlign: 'center', marginTop: 20, fontWeight: '700'}}>You have not received any notification yet!</Text>
                    <Text style={{ marginTop: 20, fontSize: Theme.normalText, color: 'grey', fontWeight: '500', textAlign: 'center'}}>Sorry, there's no message/alert in your inbox</Text>
                </View>
            </View>
        </Animated.ScrollView>
    )
}
