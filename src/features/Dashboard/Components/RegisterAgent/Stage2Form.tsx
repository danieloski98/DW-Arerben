import React from 'react'
import { View, Text, Platform } from 'react-native'
import GradientButton from '../../../../Components/GradientButton'
import { Theme } from '../../../../theme'
import DropDown from '../DropDown'
import TextBox from '../TextBox'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


export default function Stage2Form() {
    const [show, setShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date());

    const toggle = () => {
        setShow((prev) => !prev)
    }
    return (
        <View style={{ flex: 1, overflow:'visible'  }}>

            <Text>Email</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>

            <Text>Phone Number</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>


            <Text>Means of Identification</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20, zIndex: 2}}>
                <DropDown />
            </View>

            <Text>Next of KIN</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>

            <Text>Account Name</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>

            <Text>Bank Name</Text>
            <View style={{ width: '100%', marginBottom: 20, height: 50, zIndex: 1 }}>
                <DropDown />
            </View>

            <Text>Account Number</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>

            <Text>Bank Verification number (BVN)</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>
          

        </View>
    )
}
