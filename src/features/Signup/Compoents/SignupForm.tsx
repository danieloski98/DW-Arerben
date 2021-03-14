import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Theme } from '../../../theme'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export default function LoginForm(props: any) {

    const navigation = useNavigation();

    return (
        <View style={style.parent}>
            
            <View style={style.logoBox}>
                <Text style={style.writeup}>Great! Let’s get you set up.</Text>
            </View>

            <View style={{ width: '100%', height: Theme.height, justifyContent: 'flex-start', marginTop: 20,}}>

                <View style={{ width: '100%', height: '12%' }}>
                    <Text>Firstname</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '55%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="user" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} />
                        <Feather name="check" size={20} color={Theme.primaryColor} />
                    </View>
                </View>

                <View style={{ width: '100%', height: '12%' }}>
                    <Text>Lastname</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '55%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="user" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} />
                        <Feather name="check" size={20} color={Theme.primaryColor} />
                    </View>
                </View>

                <View style={{ width: '100%', height: '12%' }}>
                    <Text>Email</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '55%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="mail" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} />
                        <Feather name="check" size={20} color={Theme.primaryColor} />
                    </View>
                </View>

                <View style={{ width: '100%', height: '12%' }}>
                    <Text>Phone number</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '55%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Text style={{ paddingRight: 10, borderRightWidth: 2, borderRightColor: 'grey'}}>+234</Text>
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} />
                        <Feather name="check" size={20} color={Theme.primaryColor} />
                    </View>
                </View>

                <View style={{ width: '100%', height: '12%', marginTop: 10}}>
                    <Text>Password</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '55%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="lock" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} />
                        <Feather name="eye-off" size={20} color={Theme.primaryColor} />
                    </View>
                </View>


                <LinearGradient
                    start={{x: 0.0, y: 0.4}}
                    end={{x: 1, y: 0.0}}
                    colors={['#F46929', '#FFE5D9']}
                    style={{ width: '100%', height: '7%', borderRadius: 10, marginTop: 20}}
                >
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{ color: 'white', fontSize: Theme.normalText }}>Create Account</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <Text style={{ marginTop: 20, fontSize: Theme.normalText, fontWeight: '300'}}>By creating an account, you agree to the <Text style={{ textDecorationLine: 'underline'}}>terms & conditions, and our privacy policy</Text></Text>


                <Text style={{ marginTop: 40, fontSize: Theme.normalText, fontWeight: '300', textAlign: 'center'}}>Already have an account? <Text style={{ textDecorationLine: 'underline', fontWeight: '500'}} onPress={() => navigation.navigate('login')}>Login</Text></Text>

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    logoBox: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
    },
    writeup: {
        marginTop: 10,
        fontSize: Theme.header,
        fontWeight: '400',
        color: Theme.primaryColor
    }
})