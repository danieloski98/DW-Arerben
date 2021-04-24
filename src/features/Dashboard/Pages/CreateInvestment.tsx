import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity,  } from 'react-native-gesture-handler'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import GradientButton from '../../../Components/GradientButton'
import { Theme } from '../../../theme'
import DropDown from '../Components/DropDown'
import TextBox from '../Components/TextBox'
import * as imagepicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons'

export default function CreateInvestment() {
    const [proof, setProof] = React.useState("");

    const pickProof = async() => {
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
            setProof(result.uri);
        }
       
    }

    return (
        <View style={{ flex: 1}}>
            <CustomizableTabber name="Create Investment" />

            <ScrollView style={{ flex: 1, backgroundColor: 'transparent', paddingHorizontal: Theme.majorSpace, paddingTop: 20, paddingBottom: 20}}>
                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: Theme.majorSpace, paddingTop: 50, paddingBottom: 30 }}>

                   <Text style={{ fontSize: Theme.normalText, marginBottom: 10, fontWeight: '500' }}>Investment Pack</Text>
                   <View style={{ width: '100%', height: 50, zIndex: 4 }}>
                       <DropDown  />
                   </View>

                   <Text style={{ marginTop: 20, fontSize: Theme.normalText, marginBottom: 10, fontWeight: '500' }}>Account Number</Text>
                   <View style={{ width: '100%', height: 50, zIndex: 3 }}>
                       <TextBox />
                   </View>

                   <Text style={{ marginTop: 20, fontSize: Theme.normalText, marginBottom: 10, fontWeight: '500' }}>Investment Amount</Text>
                   <View style={{ width: '100%', height: 50, zIndex: 2 }}>
                       <TextBox />
                   </View>

                   <Text style={{ marginTop: 20, fontSize: Theme.normalText, marginBottom: 10, fontWeight: '500' }}>Proof of Payment</Text>

                   <View style={{ width: '100%', borderRadius: 10, borderStyle: 'dashed', borderColor: 'lightgrey', borderWidth: 2, paddingVertical: 20, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>

                       {/* <Text style={{ fontSize: Theme.normalText, marginBottom: 10, fontWeight: '500' }}>Choose file</Text> */}

                       {
                        proof !== "" ? 
                        <View style={{ width: 100, height: 100, marginVertical: 20 }}>
                            <Feather name="x" style={{ position: 'absolute', zIndex: 1, backgroundColor: 'black', borderRadius: 20, padding: 5, left: 80, elevation: 4, shadowColor: Theme.shadowColor, shadowOffset: {width: 2, height:4}, shadowOpacity: 0.7, shadowRadius: 5 }} size={20} color="white" onPress={() => setProof("")}  />
                            <Image source={{ uri: proof }} style={{ width: '100%', height: '100%', borderRadius: 10, marginTop: 5 }} resizeMode="cover" />
                        </View>: null
                    }

                       <TouchableOpacity onPress={pickProof} style={{ width: 200, height: 50, borderRadius: 10, backgroundColor: 'lightgrey', alignItems: 'center', justifyContent: 'center'}}>
                           <Text>Choose file</Text>
                       </TouchableOpacity>

                   </View>


                </View>
            </ScrollView>

            <View style={{ flex: 0.12, backgroundColor:'white'}}>
                <View style={{ width: '100%', height: 50, paddingHorizontal: Theme.majorSpace}}>
                    <GradientButton text="Submit" onPress={() => alert("Submitted")} />
                </View>
            </View>
            
        </View>
    )
}
