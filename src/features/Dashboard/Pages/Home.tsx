import React from 'react'
import { View, Text, ScrollView, Animated, StyleSheet } from 'react-native'
import Tabbar from '../../../Components/Tabbar'
import { Theme } from '../../../theme'

// components
import UpdateCard from '../Components/UpdateCard'
import VideoCard from '../Components/VideoCard'


export default function Home() {
    return (
        <Animated.ScrollView bounces={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
            <Tabbar />

            <View style={style.parent}>

                <UpdateCard />
                <VideoCard />

            </View>
        </Animated.ScrollView>
    )
}

const style = StyleSheet.create({
    parent: {
        flex: 1, 
        paddingHorizontal: Theme.majorSpace + 10, 
        paddingTop: Theme.majorSpace,
        paddingBottom: 50,
    },
    container: {
        width: '100%', 
        height: 400, 
        backgroundColor: 'white', 
        borderRadius: 20, 
        padding: 20
    },
    writeup: {
        fontSize: Theme.normalText, 
        fontWeight: '500'
    },
    flexbox: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'flex-start'
    },
    box: {
        width:'45%', 
        height: '50%', 
        justifyContent: 'center'
    },
    borderBox: {
        width: '50%', 
        height: '50%', 
        borderRadius: 300, 
        borderStyle: 'dashed', 
        borderWidth: 2, 
        borderColor: Theme.primaryColor, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})