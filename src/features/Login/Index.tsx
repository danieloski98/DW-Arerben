import React from 'react'
import { View, Text, Dimensions, StyleSheet, Platform, Button, TouchableOpacity, Image } from 'react-native'
import { Theme } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient'

// svg component
import GoogleIcon from '../../../assets/svgs/google';

export default function Index(props: any) {
    return (
        <View style={style.parent}>
            <View style={style.headerContainer}>
                <Text style={style.headerText}>DW-Arerben</Text>
                <Text style={style.normalText}>Investment</Text>
            </View>

            <View style={style.secondConatiner}>
                <View style={style.whitePart}>

                    <View style={[StyleSheet.absoluteFillObject, style.banner ]}>
                        <View style={style.orangeCircle}>

                            <Image source={require('../../../assets/images/referral.png')} resizeMode="contain" style={[StyleSheet.absoluteFillObject, style.image]} />

                        </View>

                        <View style={style.floatingBanner}>
                            <View style={style.ffbp}>
                                <Text style={{ color: 'white', fontSize: Theme.header - 5}}>ALERT</Text>
                            </View>

                            <View style={style.sfbp}>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{ fontSize: Theme.header, color: '#F46929', fontWeight: '700'}}>100,000</Text>
                                </View>
                                <Text style={{ fontSize: Theme.normalText, fontWeight: '700'}}>ROI Profit</Text>
                            </View>

                        </View>
                    </View>

                    <View style={style.btnHolder}>

                        <LinearGradient
                        style={style.signupBtn}
                        start={{x: 0.0, y: 0.4}}
                        end={{x: 1, y: 0.0}}
                        colors={['#F46929', '#FFE5D9']}>
                            <TouchableOpacity style={{flex: 1, justifyContent: 'center', backgroundColor: 'transparent'}}
                            onPress={() => props.navigation.navigate('signup')}>
                            <Text style={{ color: 'white'}}>Create Account</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <TouchableOpacity style={style.loginBtn} onPress={() => props.navigation.navigate('login')}>
                           <Text style={{ color: 'white'}}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.googleBtn}>
                            <GoogleIcon />
                           <Text style={{ color: '#222222', marginLeft: 20}}>Continue with Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ flex: 0.05, alignItems: 'center'}}>
                <Text>@ SamcSoft 2021</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    headerContainer: {
        width: Theme.width,
        height: Theme.height / 100 * 10,
        justifyContent: Platform.OS === 'android' ? 'flex-end':'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: Theme.header,
        fontWeight: '600',
        color: 'black'
    },
    normalText: {
        fontSize: Theme.normalText,
        fontWeight: '300',
        color: 'black'
    },
    secondConatiner: {
        flex: 1,
        paddingHorizontal: 0
    },
    whitePart:{
        width: '100%',
        height: '90%',
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        overflow: 'visible',
    },
    btnHolder: {
        flex: 0.6,
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 30,
        transform: [
            {translateY: Theme.width / 100 * 65}
        ]
    },
    signupBtn: {
        width: '100%',
        height: '15%',
        marginBottom: 5,
        backgroundColor: '#F46929',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    loginBtn: {
        width: '100%',
        height: '15%',
        marginBottom: 5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    googleBtn: {
        width: '100%',
        height: '15%',
        marginBottom: 5,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#222222',
        flexDirection: 'row'
    },
    banner: {
        backgroundColor: 'transparent',
        width: Theme.width,
        height: Theme.width,
        zIndex: 2
    },
    orangeCircle: {
        flex: 1,
        borderRadius: Theme.width / 2,
        backgroundColor: '#FF892F',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        overflow: 'hidden'
    },
    image: {
        transform: [
            {translateX: -Theme.width / 100 * 30}
        ]
    },
    floatingBanner: {
        width: 200,
        height: 100,
        backgroundColor: 'transparent',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        position: 'absolute',
        elevation: 5,
        shadowColor: 'grey',
        shadowRadius: 3,
        shadowOffset: {width: 4, height: 8},
        shadowOpacity: 0.7,
        transform: [
            {translateX: Theme.width / 100 * 65},
            {translateY: Theme.height / 100 * 35}
        ]
    },
    ffbp: {
        width: '40%',
        backgroundColor: '#111111',
        height: '30%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sfbp: {
        flex: 1,
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        justifyContent: 'space-evenly'
    }
});
