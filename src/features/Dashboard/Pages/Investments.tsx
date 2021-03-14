import React from 'react'
import { View, Text } from 'react-native'
import Animated, {useSharedValue, useAnimatedStyle} from 'react-native-reanimated'
import GradientButton from '../../../Components/GradientButton'

// components
import Tabbar from '../../../Components/Tabbar'
import { Theme } from '../../../theme'
import CongratulationCard from '../Components/CongratulationCard'
import PackageCard from '../Components/PackageCard'

const arr1 = [
    100,
    220,
    330,
    450,
    650,
    750,
    870,
]

export default function Investments() {
    return (
       <Animated.ScrollView showsVerticalScrollIndicator={false}> 
           <Tabbar />
           <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20, marginBottom: 20}}>
                <CongratulationCard />
                <PackageCard type="Classic"  duration="Monthly Maturity" packages={arr1} ROI={arr1}/>
                <PackageCard type="Premium"  duration="3-Monthly Maturity" packages={arr1} ROI={arr1}/>
                <PackageCard type="Platnium"  duration="Annual Maturity" packages={arr1} ROI={arr1}/>
           </View>
       </Animated.ScrollView>
    )
}
