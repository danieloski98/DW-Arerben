import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { Theme } from '../../../theme'
import { useNavigation } from '@react-navigation/native'

function TextBox() {
    const [focus, setFocus] = React.useState(false);
    return (
        <View style={{ width: '80%', height: Theme.height / 100 * 6, borderRadius: 10, borderWidth: 2, borderColor: focus ? Theme.primaryColor:'grey', flexDirection: 'row', alignItems:'center', paddingHorizontal: Theme.majorSpace }}>
            <Feather name="search" size={25} color="grey" />
            <TextInput style={{ flex: 1, fontSize: Theme.normalText }} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onKeyPress={(e) => console.log(e.nativeEvent.key)} />
        </View>
    )
}

export default function SearchPage() {
    const navigation = useNavigation();
    const navigateBack = () => {
        navigation.goBack();
    }
    return (
        <View style={{ flex: 1, padding: Theme.majorSpace, paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TextBox />
                <Text style={{ color: Theme.primaryColor, fontSize: Theme.normalText, fontWeight: '500', marginLeft: 0 }} onPress={navigateBack}>Cancel</Text>
            </View>
        </View>
    )
}
