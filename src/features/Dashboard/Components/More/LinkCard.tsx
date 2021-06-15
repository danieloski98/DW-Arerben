import React from 'react'
import { View, Text, Share} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Theme } from '../../../../theme'
import TextBox from '../TextBox'
import { FontAwesome5 } from '@expo/vector-icons'
import { Alert } from 'react-native'

export default function LinkCard() {
  const share = async () => {
    try {
      const result = await Share.share({ message: 'this is from an app i am building'});

      if (result.action === Share.sharedAction) {
        if(result.activityType) {
          Alert.alert(result.action);
        }else {
          console.log('shared')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
    return (
        <View style={{ flex: 1,  }}>
            <Text style={{ fontSize: Theme.header, fontWeight: '700'}}>Share your referral link</Text>
            <Text style={{ fontSize: Theme.normalText, fontWeight: '300', marginTop: 10}}>You can share your referral link by copying and sending it OR share it via social media</Text>
            <View style={{ flex: 0.5, marginTop: 20, height: '30%'}}>
                <View style={{ width: '100%', backgroundColor: '#FFEBE2', height: 50, borderRadius: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>
                    <Text style={{ flex: 1}}>https://dwainvest.com/referra…</Text>
                    <Text style={{ fontWeight: '900', color: Theme.primaryColor}}>COPY</Text>
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={share} style={{ width: Theme.width /100* 40, height: 50, backgroundColor: 'lightgrey', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Text>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
