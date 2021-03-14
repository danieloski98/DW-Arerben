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
                <Image source={require('../../../../assets/images/logo.png')} resizeMode="contain" style={{ width: '30%', height: '60%'}} />
                <Text style={style.writeup}>Welcome back to DW-Investment</Text>
            </View>

            <View style={{ flex: 0.8, justifyContent: 'flex-start', marginTop: 50}}>

                <View style={{ width: '100%', height: '20%'}}>
                    <Text>Email</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '60%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="user" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} />
                        <Feather name="check" size={20} color={Theme.primaryColor} />
                    </View>
                </View>

                <View style={{ width: '100%', height: '20%', marginTop: 20}}>
                    <Text>Password</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '60%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="lock" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} secureTextEntry={true} />
                        <Feather name="eye-off" size={20} color={Theme.primaryColor} />
                    </View>
                </View>

                <Text style={{ marginTop: 20, fontSize: Theme.normalText, fontWeight: '500'}}>Having trouble signing in?</Text>

                <LinearGradient
                    start={{x: 0.0, y: 0.4}}
                    end={{x: 1, y: 0.0}}
                    colors={['#F46929', '#FFE5D9']}
                    style={{ width: '100%', height: '12%', borderRadius: 10, marginTop: 20}}
                >
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => navigation.navigate("dashboard")}
                    >
                        <Feather name="lock" color="white" size={30} />
                        <Text style={{ color: 'white', fontSize: Theme.normalText, marginLeft: 10}}>Login</Text>
                    </TouchableOpacity>
                </LinearGradient>


                <Text style={{ marginTop: 40, fontSize: Theme.normalText, fontWeight: '500', textAlign: 'center'}}>Don’t have an account? <Text style={{ textDecorationLine: 'underline', fontWeight: '700'}} onPress={() => navigation.navigate('signup')}>Create</Text></Text>

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
        height: '15%',
        alignItems: 'center',
    },
    writeup: {
        marginTop: 10,
        fontSize: Theme.normalText,
        fontWeight: '400'
    }
})