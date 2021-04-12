import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Theme } from '../../../../theme'
import TextBox from '../TextBox'
import { FontAwesome5 } from '@expo/vector-icons'

export default function LinkCard() {
    return (
        <View style={{ flex: 1,  }}>
            <Text style={{ fontSize: Theme.header - 4, fontWeight: '700'}}>Share your referral link</Text>
            <Text style={{ fontSize: Theme.normalText, fontWeight: '300', marginTop: 10}}>You can share your referral link by copying and sending it OR share it via social media</Text>
            <View style={{ flex: 0.5, marginTop: 20, height: '30%'}}>
                <View style={{ width: '100%', backgroundColor: '#FFEBE2', height: 50, borderRadius: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>
                    <Text style={{ flex: 1}}>https://dwainvest.com/referra…</Text>
                    <Text style={{ fontWeight: '900', color: Theme.primaryColor}}>COPY</Text>
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', marginTop: 20 }}>
                <FontAwesome5 name="facebook" size={30} color={Theme.primaryColor} />
                <FontAwesome5 name="instagram" size={30} color={Theme.primaryColor} style={{ marginLeft: 10 }} />
                <FontAwesome5 name="twitter" size={30} color={Theme.primaryColor} style={{ marginLeft: 10 }} />
                <FontAwesome5 name="linkedin" size={30} color={Theme.primaryColor} style={{ marginLeft: 10 }} />
            </View>
        </View>
    )
}
