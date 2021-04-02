import React from 'react'
import { View, Text, Platform } from 'react-native'
import GradientButton from '../../../../Components/GradientButton'
import { Theme } from '../../../../theme'
import DropDown from '../DropDown'
import TextBox from '../TextBox'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


export default function MeansOfIdentification() {
    const [show, setShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date());

    const toggle = () => {
        setShow((prev) => !prev)
    }
    return (
        <View style={{ flex: 1, overflow:'visible'  }}>
            <Text>EMAIL</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>


            <Text>OFFICE ADDRESS</Text>
            <View style={{ width: '100%', height: Theme.height/100*6, marginBottom: 20, zIndex: 5}}>
                <TextBox />
            </View>

            <Text>MEANS OF IDENTIFICATION</Text>
            <View style={{ width: '100%', marginBottom: 20, height: Theme.height/100*6, zIndex: 4}}>
                <DropDown />
            </View>

            <Text>PHONE NUMBER</Text>
            <View style={{ width: '100%', height: Theme.height/100*6, marginBottom: 20, zIndex: 5}}>
                <TextBox />
            </View>

            <Text>SOURCE OF FUND</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20, zIndex: 2}}>
                <DropDown />
            </View>

            <Text>REFERRAL/AGENT</Text>
            <View style={{ width: '100%', height: Theme.height/100*6, marginBottom: 20, zIndex: 5}}>
                <TextBox />
            </View>

            <Text>ACCOUNT NAME</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>

            <Text>BANK NAME</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20, zIndex: 2}}>
                <DropDown />
            </View>

            <Text>ACCOUNT NUMBER</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>

            <View style={{ width: '100%', height:Theme.height/100*6}}>
                <GradientButton text="Save" onPress={() => alert("Saving...")} />
            </View>

        </View>
    )
}
