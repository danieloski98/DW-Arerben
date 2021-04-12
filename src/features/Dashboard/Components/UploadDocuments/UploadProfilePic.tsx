import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle} from 'react-native-reanimated'
import { Theme } from '../../../../theme';
import * as imagepicker from 'expo-image-picker'
import {Feather} from '@expo/vector-icons'
import GradientButton from '../../../../Components/GradientButton';

export default function UploadProfilePic() {
    const [pic, setPic] = React.useState("");


    const pickPic = async() => {
        const {status} = await imagepicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert("You have to grant permission");
            // return;
        }

        // pick the image
        const result = await imagepicker.launchImageLibraryAsync({
            mediaTypes: imagepicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
            aspect: [4,4]
        })

        console.log(result);

        if(!result.cancelled) {
            setPic(result.uri);
        }
    }

    return (
        <View style={{ flex: 1, paddingTop: 20 }}>
            <Text style={style.headerText}>Select Profile Picture</Text>
            <Text style={style.normalText}>Please upload a portrait that captures your face. NO black & white images</Text>
            {
                pic !== "" && 
                <View style={style.imageBox}>
                    <View style={{ width: '40%', height: '100%'}}>
                        <Feather name="x" size={20} color="white" onPress={() => setPic("")} style={{ position: 'absolute', zIndex: 1, borderRadius: 100, backgroundColor: 'black', padding: 2, left: 120, top: -10 }} />
                        <Animated.Image source={{ uri: pic }} resizeMode="cover" style={style.image}/>
                    </View>
                </View>
            }

            <View style={{ marginBottom: 20 }}>

                <View style={style.dashbox} >
                    <Text style={{ textAlign: 'center'}}>choose from device</Text>
                    <TouchableOpacity onPress={pickPic} style={{ width: '40%', padding: Theme.majorSpace, backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 10 }}>

                        <Text style={{ fontSize: Theme.normalText - 3, color: 'grey' }}>Choose Image</Text>

                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 5, fontSize: Theme.normalText - 3 }}>File size must not excess 500kb</Text>

                <View style={style.buttonHolder}>
                    <GradientButton text="Save" onPress={() => alert("Pressed")} />
                </View>

            </View>
        </View>
    )
}


const style = StyleSheet.create({
    headerText: {
        fontSize: Theme.header - 5,
        fontWeight: '700',
    },
    normalText: {
        fontSize: Theme.normalText,
        fontWeight: '300',
        marginTop: 5
    },
    imageBox: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    dashbox: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: Theme.shadowColor,
        marginTop: 20,
        padding: 20,
        alignItems: 'center'
    },
    buttonHolder: {
        marginTop: 10,
        width: '100%',
        height: 50,
    }
})