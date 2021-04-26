import React from 'react'
import { View, Text, TextInput, TouchableOpacity, } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Theme } from '../../../theme'
import Animated, {Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import { TouchableOpacity as TO, FlatList, ScrollView } from 'react-native-gesture-handler';

function collect(item: any) {}
function scroll(item: boolean) {}

interface IProps {
    lists?: any[];
    value?: any;
    onChange?: typeof collect;
    onScroll: typeof scroll;
}

export default function DropDown(props: IProps) {
    // animated value
    const rotate = useSharedValue(0);
    const opacity = useSharedValue(0);
    const [open, setOpen] = React.useState(false);

    const [focused, setFocused] = React.useState(false);
    const lists =  ["a", "b", "c", "d", "e", "a", "b", "c", "d", "e", "a", "b", "c", "d", "e", "a", "b", "c", "d", "e",];

    const animStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {rotateZ: `${rotate.value}deg`}
            ]
        }
    })

    const opac = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        }
    });

    const turn = () => {
        if (open) {
            rotate.value = withTiming(0, {duration: 500 })
            opacity.value = withTiming(0, {duration: 500})
            setOpen(false);
        }else {
            rotate.value = withTiming(180, {duration: 500 })
            opacity.value = withTiming(1, {duration: 700})
            setOpen(true)
        }

    }

    return (
        <View style={{ width: '100%', height: '100%', overflow: 'visible'}}>
            <TouchableOpacity onPress={turn} style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: Theme.majorSpace, borderWidth: 2, borderColor: 'lightgrey', borderRadius: 10, backgroundColor: 'transparent', justifyContent: 'space-between' }}>
                <Text>{props.value}</Text>
                <Animated.View style={animStyle}>
                    <Feather name="chevron-down" size={25} color="lightgrey" />
                </Animated.View>
            </TouchableOpacity>
            {open && <Animated.View style={{ width: '100%', position: 'absolute',  backgroundColor: 'white', top: Theme.height/100*6, elevation: 5, shadowColor: 'grey', shadowOffset: {width: 2, height: 4}, shadowOpacity: 0.7, shadowRadius: 8 }}>
                <View style={{ maxHeight: Theme.height/100*30, width: '100%', padding: Theme.majorSpace, overflow: 'scroll', backgroundColor: 'whitesmoke', }}>
                    <ScrollView showsVerticalScrollIndicator={true} >
                        {
                          props.lists ?
                          props.lists.map((item, index) => (
                            <TO onPress={() => { props.onChange(item); turn();}} key={index} style={{ height: 30, width: '100%', backgroundColor: 'white', marginVertical: 10, justifyContent: 'center', paddingLeft: Theme.majorSpace}}>
                                <Text>{item}</Text>
                            </TO>
                          )) :
                          lists.map((item, index) => (
                            <TouchableOpacity key={index} style={{ height: 30, width: '100%'}}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                          ))
                        }
                    </ScrollView>
                </View>

            </Animated.View>}
        </View>
    )
}
