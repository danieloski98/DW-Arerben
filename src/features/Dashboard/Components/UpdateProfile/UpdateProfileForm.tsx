import React from 'react'
import { View, Text, Platform } from 'react-native'
import GradientButton from '../../../../Components/GradientButton'
import { Theme } from '../../../../theme'
import DropDown from '../DropDown'
import TextBox from '../TextBox'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


export default function UpdateProfileForm() {
    const [show, setShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date());

    const toggle = () => {
        setShow((prev) => !prev)
    }
    return (
        <View style={{ flex: 1, overflow:'visible'  }}>
            <Text>FULLNAME</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>

            <Text>DATE OF BIRTH</Text>
            <TouchableOpacity style={{ width: '100%', height:Theme.height/100*6, borderColor: 'lightgrey', borderWidth: 2, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: Theme.majorSpace, marginBottom: 20 }} onPress={toggle}>
                <Text>{date.toLocaleDateString()}</Text>
                <Feather name="calendar" size={25} color={Theme.primaryColor} />
            </TouchableOpacity>

            {
                show && <DateTimePicker mode="date" value={date} display={Platform.OS === 'ios' ? "inline":"default"} onChange={(e, date) => {setDate(date as Date); setShow(false)}} />
            }



            <Text>SEX</Text>
            <View style={{ width: '100%', height: Theme.height/100*6, marginBottom: 20, zIndex: 5}}>
                <DropDown />
            </View>

            <Text>MARITAL STATUS</Text>
            <View style={{ width: '100%', marginBottom: 20, height: Theme.height/100*6, zIndex: 4}}>
                <DropDown />
            </View>

            <Text>NATIONALITY</Text>
            <View style={{ width: '100%', marginBottom: 20, height: Theme.height/100*6, zIndex: 3}}>
                <DropDown />
            </View>

            <Text>STATE OF ORIGIN</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20, zIndex: 2}}>
                <DropDown />
            </View>

            <Text>STATE</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20,zIndex: 1}}>
                <DropDown />
            </View>

            <Text>CITY</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>

            <View style={{ width: '100%', height:Theme.height/100*6}}>
                <GradientButton text="Save" onPress={() => alert("Saving...")} />
            </View>

        </View>
    )
}
