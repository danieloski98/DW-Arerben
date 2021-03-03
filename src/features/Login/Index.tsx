import React from 'react'
import { View, Text, Dimensions, StyleSheet, Platform, Button, TouchableOpacity } from 'react-native'
import { Theme } from '../../theme';

export default function Index() {
    return (
        <View style={style.parent}>
            <View style={style.headerContainer}>
                <Text style={style.headerText}>DW-Arerben</Text>
                <Text style={style.normalText}>Investment</Text>
            </View>

            <View style={style.secondConatiner}>
                <View style={style.whitePart}>
                    <View style={[StyleSheet.absoluteFillObject, {backgroundColor: 'transparent', width: Theme.width, height: Theme.width,  zIndex: 2}]}>
                        <View style={{ flex: 1, borderRadius: Theme.width / 2, backgroundColor: 'orange', alignItems: 'flex-end', justifyContent: 'center'}}>
                            <View style={{ width: 200, height: 100, backgroundColor: 'white', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, elevation: 7, shadowColor: 'grey', shadowRadius: 3, shadowOffset: {width: 4, height: 8}, shadowOpacity: 0.7, marginTop: 150}}></View>
                        </View>
                    </View>

                    <View style={{ flex: 0.6, backgroundColor: 'white', marginHorizontal: 20, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'flex-end', paddingBottom: 10, paddingHorizontal: 30, transform: [
                        {translateY: Theme.width / 100 * 65}
                    ]}}>
                        <TouchableOpacity style={{ width: '100%', height: '15%', marginBottom: 5, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                           <Text style={{ color: 'white'}}>Create Account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: '100%', height: '15%', marginBottom: 5, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                           <Text style={{ color: 'white'}}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: '100%', height: '15%', marginBottom: 5, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 2, borderColor: 'black'}}>
                           <Text style={{ color: 'orange'}}>Continue with Google</Text>
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
    }
});