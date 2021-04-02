import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Theme } from '../../../../theme'
import TextBox from '../TextBox'

export default function InviteCard() {
    return (
        <View style={{ flex: 1,  }}>
            <Text style={{ fontSize: Theme.header - 4, fontWeight: '500'}}>Send an invitation to a friend</Text>
            <Text style={{ fontSize: Theme.normalText, fontWeight: '300', marginTop: 10}}>Type your friend’s email address and send them an invitation.</Text>
            <View style={{ flex: 0.5, marginTop: 10}}>
                <Text style={{ fontSize: Theme.normalText, fontWeight: '300'}}>Email</Text>
                <View style={{ height: '70%'}}>
                <TextBox />
                <TouchableOpacity style={{ width: Theme.width /100* 40, height: '100%', backgroundColor: 'lightgrey', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Text>Send</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
