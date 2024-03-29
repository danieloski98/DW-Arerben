import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Button from '../../../Components/Button'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import GradientButton from '../../../Components/GradientButton'
import { Theme } from '../../../theme'
import { Feather } from '@expo/vector-icons'
import * as imagepicker from 'expo-image-picker'
import TextBox from '../Components/TextBox'
import * as yup from 'yup';
import { useFormik } from 'formik'
import useUserDetails from '../../../Hooks/useUserDetails'
import { useNavigation } from '@react-navigation/core'
import { URL } from '../../../utils/Url'
import SuccessModal from '../Components/Agent/SuccessModal'
import * as DocumentPicker from 'expo-document-picker'

const val = yup.object({
  guarantor_name: yup.string().required('This field is required'),
  guarantor_occupation: yup.string().required('This field is required'),
  guarantor_email: yup.string().required('This field is required'),
  guarantor_phone: yup.string().required('This field is required'),
  guarantor_address: yup.string().required('This field is required'),
})

export default function RegisterAgent() {
  const [signature, setSignature] = React.useState("");
  const [proof, setProof] = React.useState("");
  const [file, setFile] = React.useState({} as any);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [uploadFile, setUploadFile] = React.useState({} as any);

  const user = useUserDetails();
  const navigation = useNavigation();

    const formik = useFormik({
      initialValues: {guarantor_name: '', guarantor_occupation: '', guarantor_email: '', guarantor_phone: '', guarantor_address: ''},
      onSubmit: () => {},
      validationSchema: val
    })


    const pickSignature = async() => {
      const {status} = await imagepicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
          alert("You have to grant permission");
          // return;
      }

      // pick the image
      const res = await DocumentPicker.getDocumentAsync({
        type: 'image/jpeg',
        copyToCacheDirectory: true,
      })


      if (res.type === 'success') {
        console.log(res);
        setFile(res);
        setSignature(res.uri);
      }
    }

    const pickProof = async() => {
      const {status} = await imagepicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
          alert("You have to grant permission");
          // return;
      }

      const res = await DocumentPicker.getDocumentAsync({
        type: 'image/jpeg',
        copyToCacheDirectory: true,
      })

      if (res.type === 'success') {
        console.log(res);
        setUploadFile(res);
        setProof(res.uri);
      }

      // pick the image
      // const result = await imagepicker.launchImageLibraryAsync({
      //     mediaTypes: imagepicker.MediaTypeOptions.Images,
      //     quality: 1,
      //     allowsEditing: true,
      //     aspect: [4,4]
      // })

      // console.log(result);

      // if(!result.cancelled) {
      //     setProof(result.uri);
      //     setFile(result);
      // }
    }

    const makeRequest = async() => {
      setLoading(true);
      if (!formik.dirty) {
        setLoading(false);
        alert('please filling the form to continue');
      }else if (!formik.isValid) {
        setLoading(false);
        alert('Please fill in the form correctly');
      }else if(proof === "") {
        setLoading(false);
        alert('You have to upload your proof of payment');
      }
      // else if (signature === "") {
      //   setLoading(false);
      //   alert("You have to pick the required doc")
      // }
      else {

      // arrange formData
      const formData = new FormData();
      for (const pro in formik.values) {
        formData.append(pro, formik.values[pro]);
      }


      if (proof !== undefined) {
        formData.append('proof_payment', {
          name: uploadFile['name'],
          uri: proof,
          type: 'image/jpg'
        });
        console.log(JSON.stringify(uploadFile));
      }

      if (signature !== undefined) {
        formData.append('required_doc', {
          name: file['name'],
          uri: signature,
          type: 'image/jpg'
        });
        console.log(JSON.stringify(uploadFile));
      }

      //

      const result = await fetch(`${URL}/userprofile/agent/`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${user.user.access}`,
        },
        body: formData,
      })
      // const result = await UpdateUserController.initialUpdate(formData, {authorization: `Bearer ${user.user.access}`})

      const json = await result.json();
      console.log(result.status)

      console.log(json);
      if (result.status === 201) {
        setLoading(false);
        setSuccess(true);
        // navigation.navigate('dashboard')
      }else if (result.status === 400) {
        setLoading(false);
        alert(json['errors'][0]);
      }
      else {
        setLoading(false);
        alert('An error occured, please try again');
      }

      setLoading(false);

      }


    }

    const closeSuccess = () => {
      setSuccess(false);
      navigation.navigate('More')
    }

    return (
        <View style={{ flex: 1}}>
           <CustomizableTabber name="DW-Investment Agent Form" />
           <SuccessModal visible={success} close={closeSuccess} />

           <View style={{ flex: 0.95, margin: 20, padding: 20, backgroundColor: 'white', borderRadius: 10}}>
             <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ marginTop: 10, fontSize: Theme.normalText, color: 'grey' }}>Garantor name</Text>
                <View style={{ height: 50}}>
                  <TextBox name="guarantor_name" value={formik.values.guarantor_name} onChange={formik.handleChange} />
                </View>
                {
                  formik.errors.guarantor_name && <Text style={{ fontSize: Theme.normalText - 3, color: 'red'}}>{formik.errors.guarantor_name}</Text>
                }

                <Text style={{ marginTop: 10, fontSize: Theme.normalText, color: 'grey' }}>Garantor Occupation</Text>
                <View style={{ height: 50}}>
                  <TextBox name="guarantor_occupation" value={formik.values.guarantor_occupation} onChange={formik.handleChange} />
                </View>
                {
                  formik.errors.guarantor_occupation && <Text style={{ fontSize: Theme.normalText - 3, color: 'red'}}>{formik.errors.guarantor_occupation}</Text>
                }

                <Text style={{ marginTop: 10, fontSize: Theme.normalText, color: 'grey' }}>Garantor Email</Text>
                <View style={{ height: 50}}>
                  <TextBox name="guarantor_email" value={formik.values.guarantor_email} onChange={formik.handleChange} />
                </View>
                {
                  formik.errors.guarantor_email && <Text style={{ fontSize: Theme.normalText - 3, color: 'red'}}>{formik.errors.guarantor_email}</Text>
                }

                <Text style={{ marginTop: 10, fontSize: Theme.normalText, color: 'grey' }}>Garantor Phone</Text>
                <View style={{ height: 50}}>
                  <TextBox name="guarantor_phone" value={formik.values.guarantor_phone} onChange={formik.handleChange} />
                </View>
                {
                  formik.errors.guarantor_phone && <Text style={{ fontSize: Theme.normalText - 3, color: 'red'}}>{formik.errors.guarantor_phone}</Text>
                }

                <Text style={{ marginTop: 10, fontSize: Theme.normalText, color: 'grey' }}>Garantor Address</Text>
                <View style={{ height: 50}}>
                  <TextBox name="guarantor_address" value={formik.values.guarantor_address} onChange={formik.handleChange} />
                </View>
                {
                  formik.errors.guarantor_address && <Text style={{ fontSize: Theme.normalText - 3, color: 'red'}}>{formik.errors.guarantor_address}</Text>
                }

              <View style={{ marginBottom: 20, marginTop: 20 }}>
                <Text style={{ fontSize: Theme.normalText, fontWeight: '700',}}>Proof of Payment</Text>
                <Text style={{ marginTop: 5, fontSize: Theme.normalText, color: 'grey' }}>Please attach either your NIN, Drivers License or International Passport</Text>

                <View style={styles.dashbox} >
                    <Text style={{ textAlign: 'center'}}>choose from device</Text>
                    {
                        proof !== "" ?
                        <View style={{ width: 100, height: 100, marginVertical: 10 }}>
                            <Feather name="x" style={styles.xIcon} size={20} color="white" onPress={() => setProof("")}  />
                            <Image source={{ uri: proof }} style={{ width: '100%', height: '100%', borderRadius: 10, marginTop: 5 }} resizeMode="cover" />
                        </View>: null
                    }
                    <TouchableOpacity onPress={pickProof} style={{ width: '40%', padding: Theme.majorSpace, backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: Theme.normalText - 3, color: 'grey' }}>Choose Image</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 5, fontSize: Theme.normalText - 3 }}>File size must not excess 500kb</Text>
                </View>

                <View style={{ marginBottom: 20, marginTop: 20 }}>
                <Text style={{ fontSize: Theme.normalText, fontWeight: '700',}}>Attach Identity Image</Text>
                <Text style={{ marginTop: 5, fontSize: Theme.normalText, color: 'grey' }}>Please attach either your NIN, Drivers License or International Passport</Text>

                <View style={styles.dashbox} >
                    <Text style={{ textAlign: 'center'}}>choose from device</Text>
                    {
                        signature !== "" ?
                        <View style={{ width: 100, height: 100, marginVertical: 10 }}>
                            <Feather name="x" style={styles.xIcon} size={20} color="white" onPress={() => setSignature("")}  />
                            <Image source={{ uri: signature }} style={{ width: '100%', height: '100%', borderRadius: 10, marginTop: 5 }} resizeMode="cover" />
                        </View>: null
                    }
                    <TouchableOpacity onPress={pickSignature} style={{ width: '40%', padding: Theme.majorSpace, backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: Theme.normalText - 3, color: 'grey' }}>Choose Image</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 5, fontSize: Theme.normalText - 3 }}>File size must not excess 500kb</Text>
                </View>

                <View style={{ height: 50, marginBottom: 30 }}>
                <GradientButton text="Create Agent" onPress={makeRequest} loading={loading} />
                </View>
             </ScrollView>
           </View>

        </View>
    )
}


const styles = StyleSheet.create({
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
xIcon: {
  position: 'absolute',
  zIndex: 1,
  backgroundColor: 'black',
  borderRadius: 20,
  padding: 5,
  left: 80,
  elevation: 4,
  shadowColor: Theme.shadowColor,
  shadowOffset: {width: 2, height:4},
  shadowOpacity: 0.7,
  shadowRadius: 5
},
});
