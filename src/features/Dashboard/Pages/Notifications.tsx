import React from 'react'
import { View, Text } from 'react-native'
import Animated from 'react-native-reanimated'

import CustomizableTabbar from '../../../Components/CustomizableTabbar'

export default function Notifications() {
    return (
        <Animated.ScrollView>
            <CustomizableTabbar name='Notifications' />
        </Animated.ScrollView>
    )
}
