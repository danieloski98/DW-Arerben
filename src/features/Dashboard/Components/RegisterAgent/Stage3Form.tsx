import React from 'react'
import { View, Text, Platform, StyleSheet, Image } from 'react-native'
import GradientButton from '../../../../Components/GradientButton'
import { Theme } from '../../../../theme'
import DropDown from '../DropDown'
import TextBox from '../TextBox'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import * as imagepicker from 'expo-image-picker'


export default function Stage3Form() {
    const [show, setShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date("DD-MM-YYYY"));
    const [paymentImage, setPaymentImage] = React.useState("");
    const [signature, setSignature] = React.useState("");

    const toggle = () => {
        setShow((prev) => !prev)
    }

    const pickProofPayment = async() => {
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
            setPaymentImage(result.uri);
        }
    }

    const pickSignature = async() => {
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
            setSignature(result.uri);
        }
    }

    return (
        <View style={{ flex: 1, overflow:'visible'  }}>

            <Text>Garantors Name</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>

            <Text>Garantors Occupation</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20, zIndex: 3}}>
                <DropDown />
            </View>

            <Text>Garantors Email</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20}}>
                <TextBox />
            </View>

            <Text>Garantors Phone Number</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20, zIndex: 2}}>
                <DropDown />
            </View>

            <Text>Garantors Office Address</Text>
            <View style={{ width: '100%', height: 50, marginBottom: 20, zIndex: 1 }}>
                <DropDown />
            </View>


            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: Theme.header - 5, fontWeight: 'bold'}}>Proof Of Payment</Text>
                <Text style={{ marginTop: 5, fontSize: Theme.normalText }}>Upload the proof of payment of the agent fee</Text>

                <View style={style.dashbox} >
                    <Text style={{ textAlign: 'center'}}>choose from device</Text>
                    {
                        paymentImage !== "" ?
                        <View style={{ width: 100, height: 100,  marginVertical: 10  }}>
                            <Feather name="x" style={{ position: 'absolute', zIndex: 1, backgroundColor: 'black', borderRadius: 100, padding: 5, left: 80, elevation: 4, shadowColor: Theme.shadowColor, shadowOffset: {width: 2, height:4}, shadowOpacity: 0.7, shadowRadius: 5 }} size={20} color="white" onPress={() => setPaymentImage("")}  />
                            <Image source={{ uri: paymentImage }} style={{ width: '100%', height: '100%', borderRadius: 10, marginTop: 5 }} resizeMode="cover" />
                        </View>: null
                    }
                    <TouchableOpacity onPress={pickProofPayment} style={{ width: '40%', padding: Theme.majorSpace, backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: Theme.normalText - 3, color: 'grey' }}>Choose Image</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 5, fontSize: Theme.normalText - 3 }}>File size must not excess 500kb</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: Theme.header - 5, fontWeight: 'bold'}}>Attach Your Signature</Text>
                <Text style={{ marginTop: 5, fontSize: Theme.normalText }}>Please sign on a white paper and upload your signature to affirm your application</Text>

                <View style={style.dashbox} >
                    <Text style={{ textAlign: 'center'}}>choose from device</Text>
                    {
                        signature !== "" ?
                        <View style={{ width: 100, height: 100, marginVertical: 10 }}>
                            <Feather name="x" style={{ position: 'absolute', zIndex: 1, backgroundColor: 'black', borderRadius: 20, padding: 5, left: 80, elevation: 4, shadowColor: Theme.shadowColor, shadowOffset: {width: 2, height:4}, shadowOpacity: 0.7, shadowRadius: 5 }} size={20} color="white" onPress={() => setSignature("")}  />
                            <Image source={{ uri: signature }} style={{ width: '100%', height: '100%', borderRadius: 10, marginTop: 5 }} resizeMode="cover" />
                        </View>: null
                    }
                    <TouchableOpacity onPress={pickSignature} style={{ width: '40%', padding: Theme.majorSpace, backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: Theme.normalText - 3, color: 'grey' }}>Choose Image</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 5, fontSize: Theme.normalText - 3 }}>File size must not excess 500kb</Text>
            </View>


        </View>
    )
}

const style = StyleSheet.create({
    dashbox: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: Theme.shadowColor,
        marginTop: 20,
        padding: 20,
        alignItems: 'center'
    }
})
