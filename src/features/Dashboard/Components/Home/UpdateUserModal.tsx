import React from 'react'
import { View, Text, Modal, SafeAreaView, Platform, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Theme } from '../../../../theme';
import DropDown from '../DropDown';
import TextBox from '../TextBox';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons'
import * as imagepicker from 'expo-image-picker'
import GradientButton from '../../../../Components/GradientButton';
import * as yup from 'yup';
import {useFormik} from 'formik';
import { UpdateUserController } from '../../Controllers/UpdateUserController';
import useUserDetails from '../../../../Hooks/useUserDetails';
import { URL } from '../../../../utils/Url';
import { useNavigation } from '@react-navigation/core';

// yup object

const ValidationObject = yup.object({
  location: yup.string().required('This field is required'),
  sex: yup.string().required('This field is required'),
  date_of_birth: yup.string().required('This field is required'),
  marital_status: yup.string().required('This field is required'),
  nationality: yup.string().required('This field is required'),
  state_of_origin: yup.string().required('This field is required'),
  contact_address: yup.string().required('This field is required'),
  contact_state: yup.string().required('This field is required'),
  contact_city: yup.string().required('This field is required'),
  occupation: yup.string().required('This field is required'),
  source_of_income: yup.string().required('This field is required'),
  office_address: yup.string().required('This field is required'),
  bank: yup.string().required('This field is required'),
  account_number: yup.string().required('This field is required'),
  agent: yup.number(),
});

// marital status

const ms = ["Single", "Married", "Divorced"];
const sx = ["Male", "Female"];


export default function UpdateUserModal(props: {open: boolean}) {
  const [signature, setSignature] = React.useState("");
  const [profilePic, setProfilePic] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [identifyPicFile, setIdentityPicFile] = React.useState(null as any);
  const [profilePicfile, setProfilePicFile] = React.useState(null as any);

  const user = useUserDetails();
  const navigation = useNavigation();

  // formik
  const formik = useFormik({
    initialValues: {
      location: user.user.id,
      sex: '',
      date_of_birth: '',
      marital_status: '',
      nationality: '',
      state_of_origin: '',
      contact_address: '',
      contact_state: '',
      contact_city: '',
      occupation: '',
      source_of_income: '',
      office: '',
      office_address: '',
      bank: '',
      account_number: '',
      agent: '',
    },
    validationSchema: ValidationObject,
    onSubmit: () => {null}
  })



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
          setIdentityPicFile(result);
      }
    }

    const pickProfilePic = async() => {
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
      setProfilePicFile(result);

      if(!result.cancelled) {
          setProfilePic(result.uri);
      }
  }

  const selectMS = (ms: any) => {
    formik.setFieldValue('marital_status', ms);
  }

  const selectSx = (sx: string) => {
    formik.setFieldValue('sex', sx);
  }

  const toggle = () => {
    setShow((prev) => !prev)
}

const setDateISO = (data: Date) => {
  const nd = data.toISOString().split('T')[0];
  alert(nd);
  formik.setFieldValue('date_of_birth', nd);
  setDate(data);
}

  const makeRequest = async() => {
    setLoading(true);
    if (!formik.dirty) {
      setLoading(false);
      alert('please filling the form to continue');
    }else if (!formik.isValid) {
      setLoading(false);
      alert('Please fill in the form correctly');
    }else {

          // arrange formData
    const formData = new FormData();
    for (const pro in formik.values) {
      formData.append(pro, formik.values[pro]);
    }

    console.log(formData);

    if (profilePic !== '') {
      formData.append('profile_pic', profilePicfile);
    }

    if (signature !== '') {
      formData.append('identity_pic', identifyPicFile)
    }
    const result = await fetch(`${URL}/userprofile/`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${user.user.access}`,
      },
      body: formData,
    })
    // const result = await UpdateUserController.initialUpdate(formData, {authorization: `Bearer ${user.user.access}`})

    const json = await result.json();

    console.log(json);
    if (result.status === 200) {
      navigation.navigate('dashboard')
    }else {
      alert('An error occured, please try again');
    }

    setLoading(false);

    }


  }

  return (
      <View style={styles.parent}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>

            {/* <View style={styles.logoBox}>
              {
                profilePic === "" ?
                <TouchableOpacity onPress={pickProfilePic} style={styles.imgPlaceHolder}>
                <Feather name="camera" size={30} color={Theme.primaryColor} />
                </TouchableOpacity>
              :
              <TouchableOpacity style={styles.profilePicContainer}>
                <Feather name="x" style={styles.xIcon} size={20} color="white" onPress={() => setProfilePic("")}  />
                <Image source={{ uri: profilePic }} style={{ width: '100%', height: '100%', borderRadius: 100, }} resizeMode="cover" />
              </TouchableOpacity>
              }
            </View> */}

            <Text style={styles.msgText}>Please Update Your Details To Continue</Text>

              {/* form section */}

            <Text style={styles.normalText}>Sex</Text>
            <View style={{ width: '100%', height: 50, zIndex: 1}}>
            <DropDown  lists={sx} value={formik.values.sex} onChange={selectSx} />
            </View>
            {
              formik.errors.sex && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.sex}</Text>
            }

            {/* <Text style={styles.normalText}>Location</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="location" value={formik.values.location} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </View>
            {
              formik.errors.location && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.location}</Text>
            } */}

            <Text style={styles.normalText}>Date of Birth</Text>
            <View style={{ width: '100%', height: 50, zIndex: 2}}>
            <TouchableOpacity style={{ width: '100%', height:Theme.height/100*6, borderColor: 'lightgrey', borderWidth: 2, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: Theme.majorSpace, marginBottom: 20 }} onPress={toggle}>
                <Text>{date.toLocaleDateString()}</Text>
                <Feather name="calendar" size={25} color={Theme.primaryColor} />
            </TouchableOpacity>

            {
                show && <DateTimePicker mode="date" date={new Date("yyyy-mm-dd")} value={date} display={Platform.OS === 'ios' ? "inline":"default"} onChange={(e, date) => {setDateISO(date as Date); setShow(false)}} style={{ zIndex: 4, backgroundColor: 'white'}} />
            }
            </View>
            {
              formik.errors.date_of_birth && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.date_of_birth}</Text>
            }

            <Text style={styles.normalText}>Marital Status</Text>
            <View style={{ width: '100%', height: 50, zIndex: 3}}>
              <DropDown  lists={ms} value={formik.values.marital_status} onChange={selectMS} />
            </View>

            <Text style={styles.normalText}>Nationality</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="nationality" value={formik.values.nationality} onChange={formik.handleChange} />
            </View>
            {
              formik.errors.nationality && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.nationality}</Text>
            }

            <Text style={styles.normalText}>State of Origin</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="state_of_origin" value={formik.values.state_of_origin} onChange={formik.handleChange}/>
            </View>
            {
              formik.errors.state_of_origin && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.state_of_origin}</Text>
            }

            <Text style={styles.normalText}>Contact Address</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="contact_address" value={formik.values.contact_address} onChange={formik.handleChange} />
            </View>

            <Text style={styles.normalText}>Contact State</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="contact_state" value={formik.values.contact_state} onChange={formik.handleChange} />
            </View>
            {
              formik.errors.contact_state && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.contact_state}</Text>
            }

            <Text style={styles.normalText}>Contact City</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="contact_city" value={formik.values.contact_city} onChange={formik.handleChange} />
            </View>
            {
              formik.errors.contact_city && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.contact_city}</Text>
            }

            <Text style={styles.normalText}>Occupation</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="occupation" value={formik.values.occupation} onChange={formik.handleChange} />
            </View>
            {
              formik.errors.occupation && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.occupation}</Text>
            }

            <Text style={styles.normalText}>Source of Income</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="source_of_income" value={formik.values.source_of_income} onChange={formik.handleChange} />
            </View>
            {
              formik.errors.source_of_income && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.source_of_income}</Text>
            }

            <Text style={styles.normalText}>Office Address</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="office_address" value={formik.values.office_address} onChange={formik.handleChange} />
            </View>
            {
              formik.errors.office_address && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.office_address}</Text>
            }

            <Text style={styles.normalText}>Bank Name</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="bank" value={formik.values.bank} onChange={formik.handleChange} />
            </View>
            {
              formik.errors.bank && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.bank}</Text>
            }

            {/* <Text style={styles.normalText}>Acoount Name</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="account_name" value={formik.values.account_name} onChange={formik.handleChange} />
            </View>
            {
              formik.errors.account_name && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.account_name}</Text>
            } */}


            <Text style={styles.normalText}>Acoount Number</Text>
            <View style={{ width: '100%', height: 50}}>
              <TextBox name="account_number" value={formik.values.account_number} onChange={formik.handleChange} />
            </View>
            {
              formik.errors.account_number && <Text style={{ fontSize: 10, color: 'red', marginTop: 5 }}>{formik.errors.account_number}</Text>
            }

            {/* <View style={{ marginBottom: 20, marginTop: 20 }}>
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
            </View> */}

            <View style={{ width: '100%', height: 50, marginBottom: 100}}>
              <GradientButton text="Submit" onPress={makeRequest} loading={loading} />
            </View>

          </ScrollView>
        </View>
      </View>

  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingTop: Platform.OS === 'ios'? 40:0,
    padding: Theme.majorSpace,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  container: {
    width: '100%',
    minHeight: Theme.height/100*90,
    maxHeight: Theme.height/100*70,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: Theme.majorSpace
  },
  logoBox: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  imgPlaceHolder: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  msgText: {
    fontSize:Theme.normalText,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20
  },
  normalText: {
    fontSize: Theme.normalText,
    color: 'grey',
    marginTop: 20,
    marginBottom: 5
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
profilePicContainer: {
  width: 100,
  height: 100,
  borderRadius: 100,
}
});
