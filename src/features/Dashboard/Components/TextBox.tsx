import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Theme } from '../../../theme'

interface IProps {
    leftItem?: JSX.Element;
    rightItem?: JSX.Element;
    onChange: Function;
    onBlur?: Function;
    onFocus?: Function;
    name: string;
    value: any;
}

export default function TextBox(props: IProps) {
    const [focused, setFocused] = React.useState(false);

    return (
        <View style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: Theme.majorSpace, borderWidth: 2, borderColor: 'lightgrey', borderRadius: 10, backgroundColor: focused ? 'lightgrey':'transparent' }}>
            {props.leftItem}
            <TextInput  style={{ flex: 1 }} value={props.value} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChangeText={props.onChange(props.name)}  />
            {props.rightItem}
        </View>
    )
}
