import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Tabbar from '../../../Components/Tabbar'
import { Theme } from '../../../theme'
import InviteCard from '../Components/More/InviteCard'
import LinkCard from '../Components/More/LinkCard'
import UpdatePart from '../Components/More/UpdatePart'
import UpdateCard from '../Components/UpdateCard'
import {useNavigation} from '@react-navigation/native'

export default function More() {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>

            <Tabbar />

            <View style={{ flex: 0.9, marginBottom: 30 }}>
                <ScrollView style={{ padding: Theme.majorSpace }} contentContainerStyle={{ paddingBottom: 50}} showsVerticalScrollIndicator={false} >
                    <UpdatePart />
                    <View style={{ width: '100%', backgroundColor: 'white', borderRadius: 10, marginTop: 30, padding: Theme.majorSpace + 10 }}>
                        <InviteCard />
                    </View>

                    <View style={{ width: '100%', height: 250, backgroundColor: 'white', borderRadius: 10, marginTop: 30, padding: Theme.majorSpace + 10 }}>
                        <LinkCard />
                    </View>
                </ScrollView>
            </View>

            <View style={{ flex: 0.1, height: 30, backgroundColor: 'white', bottom: 30, paddingHorizontal: Theme.majorSpace, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
               <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
               <Text style={{ marginHorizontal: 30, fontSize: Theme.normalText }} onPress={() => navigation.navigate("registeragent")}>Register</Text>
                <Text style={{ marginHorizontal: 30, fontSize: Theme.normalText }} onPress={() => navigation.navigate("referrals")}>My Referrals</Text>
                <Text style={{ marginHorizontal: 30, fontSize: Theme.normalText }}>Commission History</Text>
               </ScrollView>
            </View>

        </View>
    )
}
